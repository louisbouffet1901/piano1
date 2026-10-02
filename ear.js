// Oreille et théorie : générateur de questions (écoute, lecture, jeu au piano).
import { h, esc, pick, shuffle, randInt, fmtPct, noteNameFr, capitalize, INTERVALS, CHORDS, SCALES, KEYS, midiToAbc, pc } from '../util.js';
import { audio } from '../audio.js';
import { midi } from '../midi.js';
import { store } from '../store.js';

const PLAY = '<svg viewBox="0 0 24 24" width="16" height="16"><path d="M7 4.5v15l12-7.5-12-7.5z" fill="currentColor"/></svg>';

/* ---------------- Lecture audio ---------------- */
async function playNotes(list) {
  // list : [{m, t, d, v}] en secondes
  await audio.ensure();
  const t0 = audio.now() + 0.06;
  for (const n of list) {
    const v = audio.noteOn(n.m, n.v || 72, t0 + n.t, { owner: 'quiz' });
    if (v) audio.noteOff(v, t0 + n.t + n.d);
  }
}
const stopAudio = () => audio.stopAll('quiz');

/* ---------------- Libellés ---------------- */
const IV_LABEL = { 1: '2de m', 2: '2de M', 3: '3ce m', 4: '3ce M', 5: '4te J', 6: 'Triton', 7: '5te J', 8: '6te m', 9: '6te M', 10: '7e m', 11: '7e M', 12: '8ve' };
const IV_SHORT_TO_ST = { '2m': 1, '2M': 2, '3m': 3, '3M': 4, '4J': 5, 'Triton': 6, '5J': 7, '6m': 8, '6M': 9, '7m': 10, '7M': 11, '8ve': 12 };
const CH_LABEL = { M: 'Majeur', m: 'Mineur', dim: 'Diminué', aug: 'Augmenté', '7': '7e de dominante', maj7: '7e majeure', m7: '7e mineure', hdim7: 'Demi-diminué (7e de sensible)', dim7: '7e diminuée' };
const SC_LABEL = { maj: 'Majeure', natMin: 'Mineure naturelle', harmMin: 'Mineure harmonique', melMin: 'Mineure mélodique' };
const CAD_LABEL = { parfaite: 'Parfaite', demi: 'Demi-cadence', plagale: 'Plagale', rompue: 'Rompue' };
const NOTE_BTNS = [['do', 0], ['ré', 2], ['mi', 4], ['fa', 5], ['sol', 7], ['la', 9], ['si', 11]];

/* ---------------- Cadences : voicings en do majeur / la mineur ---------------- */
const VOICE_MAJ = {
  I: [48, 64, 67, 72], ii: [50, 65, 69, 74], IV: [53, 65, 69, 72], V: [43, 62, 67, 71], V7: [43, 62, 65, 71], vi: [45, 64, 69, 72],
};
const VOICE_MIN = { // la mineur, sensible sol♯
  i: [45, 60, 64, 69], iv: [50, 62, 65, 69], V: [40, 59, 64, 68], V7: [40, 59, 62, 68], VI: [41, 60, 65, 69],
};
const CAD_TEMPLATES = {
  maj: { parfaite: ['I', 'IV', 'V7', 'I'], demi: ['I', 'vi', 'IV', 'V'], plagale: ['I', 'vi', 'IV', 'I'], rompue: ['I', 'IV', 'V7', 'vi'] },
  min: { parfaite: ['i', 'iv', 'V7', 'i'], demi: ['i', 'VI', 'iv', 'V'], plagale: ['i', 'VI', 'iv', 'i'], rompue: ['i', 'iv', 'V7', 'VI'] },
};

/* ---------------- Générateurs de questions ---------------- */
const GEN = {
  intervals(cfg) {
    const set = (cfg.set || ['2m', '2M', '3m', '3M', '4J', '5J', '8ve']).map(s => IV_SHORT_TO_ST[s]);
    const st = pick(set);
    const dir = cfg.direction || pick(cfg.directions || ['up']);
    const root = randInt(55, 67);
    const a = root, b = dir === 'down' ? root - st : root + st;
    const notes = dir === 'harm' ? [{ m: a, t: 0, d: 1.4 }, { m: b, t: 0, d: 1.4 }] : [{ m: a, t: 0, d: 0.8 }, { m: b, t: 0.75, d: 1.1 }];
    const ivObj = INTERVALS.find(x => x.st === st);
    return {
      prompt: dir === 'harm' ? 'Quel intervalle (notes jouées ensemble) ?' : dir === 'down' ? 'Quel intervalle descendant ?' : 'Quel intervalle ?',
      play: () => playNotes(notes),
      answers: set.map(s => ({ id: s, label: IV_LABEL[s] })),
      correct: st,
      explain: `C’était une <b>${ivObj.name}</b> (${st} demi-ton${st > 1 ? 's' : ''}) : ${noteNameFr(a)} → ${noteNameFr(b)}.`,
      // mode jeu : jouer l'intervalle au-dessus (ou au-dessous) de la note donnée
      playTask: `Joue la note ${noteNameFr(a)} puis une <b>${ivObj.name}</b> ${dir === 'down' ? 'en dessous' : 'au-dessus'}.`,
      check: played => played.length >= 2 && played[0] === a && played[1] === b,
    };
  },

  chords(cfg) {
    const set = cfg.set || ['M', 'm'];
    const q = pick(set);
    const root = randInt(50, 62);
    const iv = CHORDS[q].iv;
    const ms = iv.map(x => root + x);
    const arpFirst = cfg.arpeggiate !== false;
    const notes = [];
    if (arpFirst) ms.forEach((m, i) => notes.push({ m, t: i * 0.28, d: 0.5 }));
    const off = arpFirst ? ms.length * 0.28 + 0.15 : 0;
    ms.forEach(m => notes.push({ m, t: off, d: 1.6 }));
    return {
      prompt: 'Quelle sorte d’accord ?',
      play: () => playNotes(notes),
      answers: set.map(s => ({ id: s, label: CH_LABEL[s] })),
      correct: q,
      explain: `Accord <b>${CHORDS[q].fr}</b> sur ${noteNameFr(root, { octave: false })} : ${ms.map(m => noteNameFr(m, { octave: false })).join(' – ')}.`,
      playTask: `Joue un accord <b>${CHORDS[q].fr}</b> sur <b>${noteNameFr(root, { octave: false })}</b> (n’importe quelle position).`,
      check: played => samePcs(played, ms),
    };
  },

  cadences(cfg) {
    const set = cfg.set || ['parfaite', 'demi', 'plagale', 'rompue'];
    const kind = pick(set);
    const mode = pick(cfg.modes || ['maj', 'min']);
    const tr = randInt(-4, 4);
    const tpl = CAD_TEMPLATES[mode][kind];
    const V = mode === 'maj' ? VOICE_MAJ : VOICE_MIN;
    const notes = [];
    tpl.forEach((deg, i) => V[deg].forEach(m => notes.push({ m: m + tr, t: i * 0.95, d: i === tpl.length - 1 ? 1.8 : 0.9, v: 66 })));
    return {
      prompt: 'Quelle cadence termine ce passage ?',
      play: () => playNotes(notes),
      answers: set.map(s => ({ id: s, label: CAD_LABEL[s] })),
      correct: kind,
      explain: `Enchaînement : <b>${tpl.join(' – ')}</b> → cadence <b>${CAD_LABEL[kind].toLowerCase()}</b>${kind === 'parfaite' ? ' (V → I : conclusion)' : kind === 'demi' ? ' (arrêt sur V : suspension)' : kind === 'plagale' ? ' (IV → I : « amen »)' : ' (V → vi : surprise)'}.`,
    };
  },

  scales(cfg) {
    const set = cfg.set || ['maj', 'natMin', 'harmMin', 'melMin'];
    const s = pick(set);
    const root = randInt(57, 65);
    const ms = [...SCALES[s].map(x => root + x), root + 12];
    return {
      prompt: 'Quelle gamme (montante) ?',
      play: () => playNotes(ms.map((m, i) => ({ m, t: i * 0.3, d: 0.42 }))),
      answers: set.map(x => ({ id: x, label: SC_LABEL[x] })),
      correct: s,
      explain: `Gamme <b>${SC_LABEL[s].toLowerCase()}</b> de ${noteNameFr(root, { octave: false })} : ${ms.map(m => noteNameFr(m, { octave: false })).join(' ')}.`,
    };
  },

  keysig(cfg) {
    const pool = cfg.keys || ['C', 'G', 'D', 'A', 'E', 'F', 'Bb', 'Eb', 'Ab'];
    const k = pick(pool);
    const minor = cfg.minor ? Math.random() < 0.5 : false;
    const key = KEYS[k];
    const relMin = Object.entries(KEYS).find(([n, v]) => v.mode === 'min' && v.sig === key.sig);
    const answerKeys = shuffle(pool).slice(0, Math.min(6, pool.length));
    if (!answerKeys.includes(k)) answerKeys[0] = k;
    const label = kk => minor ? capitalize(Object.values(KEYS).find(v => v.mode === 'min' && v.sig === KEYS[kk].sig).fr) : capitalize(KEYS[kk].fr);
    return {
      prompt: minor ? 'Quelle tonalité <b>mineure</b> a cette armure ?' : 'Quelle tonalité <b>majeure</b> a cette armure ?',
      staff: `X:1\nL:1/4\nK:${k}\nx4|]`,
      answers: shuffle(answerKeys).map(kk => ({ id: kk, label: label(kk) })),
      correct: k,
      explain: `${key.sig === 0 ? 'Aucune altération' : Math.abs(key.sig) + ' ' + (key.sig > 0 ? 'dièse' : 'bémol') + (Math.abs(key.sig) > 1 ? 's' : '')} : <b>${key.fr}</b> ou sa relative <b>${relMin[1].fr}</b>.`,
    };
  },

  notes(cfg) {
    const clef = pick(cfg.clefs || ['treble', 'bass']);
    const range = clef === 'treble' ? (cfg.trebleRange || [57, 84]) : (cfg.bassRange || [36, 64]);
    let m;
    do { m = randInt(range[0], range[1]); } while ([1, 3, 6, 8, 10].includes(m % 12));
    const abcNote = midiToAbc(m);
    return {
      prompt: 'Quelle est cette note ?',
      staff: `X:1\nL:1/4\nK:C clef=${clef}\n${abcNote}4|]`,
      answers: NOTE_BTNS.map(([l, p]) => ({ id: p, label: l })),
      correct: m % 12,
      explain: `C’est un <b>${noteNameFr(m, { octave: false })}</b> (${noteNameFr(m)}, à la française : do3 = do central).`,
      playTask: 'Joue cette note à la bonne hauteur sur le piano.',
      check: played => played[0] === m,
      sound: () => playNotes([{ m, t: 0, d: 1 }]),
    };
  },

  chordsight(cfg) {
    const roots = [60, 62, 64, 65, 67, 69, 71];
    const r = pick(roots);
    const q = pick(cfg.set || ['M', 'm']);
    const inv = pick(cfg.inversions || [0, 1, 2]);
    let ms = CHORDS[q].iv.map(x => r + x);
    for (let i = 0; i < inv; i++) { const lo = ms.shift(); ms.push(lo + 12); }
    while (Math.max(...ms) > 81) ms = ms.map(m => m - 12);
    const invName = ['état fondamental', '1er renversement', '2e renversement', '3e renversement'][inv];
    const abc = `X:1\nL:1/4\nK:C\n[${ms.map(m => midiToAbc(m)).join('')}]4|]`;
    const opts = [];
    for (const qq of (cfg.set || ['M', 'm'])) for (const ii of (cfg.inversions || [0, 1, 2])) opts.push({ id: qq + ii, label: `${CH_LABEL[qq]} — ${['fond.', '1er renv.', '2e renv.', '3e renv.'][ii]}` });
    return {
      prompt: `Accord de quelle nature, et dans quel état ? (fondamentale : ${noteNameFr(r, { octave: false })})`,
      staff: abc,
      answers: opts,
      correct: q + inv,
      explain: `Accord <b>${CHORDS[q].fr}</b> de ${noteNameFr(r, { octave: false })}, <b>${invName}</b> (basse : ${noteNameFr(ms[0], { octave: false })}).`,
      sound: () => playNotes(ms.map(m => ({ m, t: 0, d: 1.4 }))),
    };
  },

  /** Jouer un accord de fonction : « joue le V7 de fa mineur » */
  playchord(cfg) {
    const items = cfg.items || [
      { ask: 'l’accord de <b>tonique</b> (i) de fa mineur', pcs: [5, 8, 0] },
      { ask: 'l’accord de <b>sous-dominante</b> (iv) de fa mineur', pcs: [10, 1, 5] },
      { ask: 'l’accord de <b>dominante avec septième</b> (V7) de fa mineur', pcs: [0, 4, 7, 10] },
    ];
    const it = pick(items);
    return {
      prompt: `Joue ${it.ask}.`,
      playTask: `Joue ${it.ask} (n’importe quel renversement), puis relâche les touches.`,
      check: played => samePcs(played, it.pcs),
      explain: `Notes attendues : <b>${it.pcs.map(p => noteNameFr(p + 60, { octave: false, flats: true })).join(' – ')}</b>.`,
      onlyPlay: true,
    };
  },
};

function samePcs(played, target) {
  const a = new Set(played.map(pc));
  const b = new Set(target.map(pc));
  if (a.size !== b.size) return false;
  for (const x of a) if (!b.has(x)) return false;
  return true;
}

/* ---------------- Interface ---------------- */
export function mountQuiz(el, cfg) {
  const total = cfg.count || 10;
  const gen = GEN[cfg.kind];
  if (!gen) { el.textContent = 'Exercice inconnu'; return; }
  const frame = h('div', { class: 'w-frame' });
  const head = h('div', { class: 'w-head' }, h('span', { class: 'w-title' }, cfg.title || 'Exercice'), cfg.sub ? h('span', { class: 'w-sub' }, cfg.sub) : null);
  const body = h('div', { class: 'w-body' });
  frame.append(head, body);
  el.append(frame);
  const canPlayMode = cfg.mode === 'play' || (gen === GEN.playchord);
  let state;
  let offNotes = null;

  const start = () => {
    state = { i: 0, ok: 0, firstTry: 0, startAt: Date.now() };
    next();
  };

  const listenPlayed = (onDone) => {
    offNotes?.();
    const pressed = [];
    const held = new Set();
    let timer = null;
    const finish = () => { offOff(); offOn(); offNotes = null; onDone(pressed.slice()); };
    const offOn = midi.on('noteon', ev => { pressed.push(ev.note); held.add(ev.note); clearTimeout(timer); });
    const offOff = midi.on('noteoff', ev => {
      held.delete(ev.note);
      if (held.size === 0 && pressed.length) { clearTimeout(timer); timer = setTimeout(finish, 350); }
    });
    offNotes = () => { offOn(); offOff(); clearTimeout(timer); };
  };

  const next = () => {
    stopAudio();
    offNotes?.();
    body.innerHTML = '';
    if (state.i >= total) return finish();
    const q = gen(cfg);
    state.q = q;
    state.tries = 0;
    const prog = h('div', { class: 'quiz-progress' }, h('span', {}, `${state.i + 1} / ${total}`), h('div', { class: 'progress' }, h('i', { style: { width: `${state.i / total * 100}%` } })), h('span', {}, `${state.ok} juste${state.ok > 1 ? 's' : ''}`));
    body.append(prog);
    const usePlay = canPlayMode && q.check;
    body.append(h('div', { class: 'quiz-q', html: usePlay && q.playTask ? q.playTask : q.prompt }));
    if (q.staff) {
      const st = h('div', { class: 'quiz-staff' });
      body.append(st);
      window.ABCJS.renderAbc(st, q.staff, { responsive: 'resize', staffwidth: 260, scale: 1.4, paddingtop: 0, paddingbottom: 0 });
    }
    const fb = h('div', { class: 'quiz-feedback' });
    const row = h('div', { class: 'btn-row', style: { marginBottom: '12px' } });
    if (q.play) {
      const again = h('button', { class: 'btn', type: 'button', html: PLAY + ' Réécouter' });
      again.addEventListener('click', () => { stopAudio(); q.play(); });
      row.append(again);
      setTimeout(() => q.play(), 250);
    }
    const nextBtn = h('button', { class: 'btn primary', type: 'button', hidden: true }, state.i + 1 >= total ? 'Voir le résultat' : 'Question suivante');
    nextBtn.addEventListener('click', () => { state.i++; next(); });
    if (usePlay) {
      if (midi.status !== 'ready') fb.innerHTML = 'Connecte le piano (pastille en haut à droite) pour répondre en jouant.';
      const skip = h('button', { class: 'btn ghost', type: 'button' }, 'Je passe');
      skip.addEventListener('click', () => { fb.className = 'quiz-feedback bad'; fb.innerHTML = q.explain; nextBtn.hidden = false; offNotes?.(); });
      row.append(skip);
      body.append(row, fb, nextBtn);
      const wait = () => listenPlayed(played => {
        state.tries++;
        if (q.check(played)) {
          state.ok++; if (state.tries === 1) state.firstTry++;
          fb.className = 'quiz-feedback ok'; fb.innerHTML = 'Exact. ' + q.explain;
          nextBtn.hidden = false;
        } else {
          fb.className = 'quiz-feedback bad';
          fb.innerHTML = `Pas tout à fait (tu as joué : ${played.map(m => noteNameFr(m)).join(', ')}). Réessaie.`;
          wait();
        }
      });
      wait();
      return;
    }
    body.append(row);
    const grid = h('div', { class: 'quiz-answers' });
    for (const a of q.answers) {
      const b = h('button', { class: 'btn', type: 'button' }, a.label);
      b.addEventListener('click', () => {
        if (!nextBtn.hidden) return;
        state.tries++;
        if (a.id === q.correct) {
          b.classList.add('right');
          if (state.tries === 1) { state.ok++; state.firstTry++; }
          fb.className = 'quiz-feedback ok'; fb.innerHTML = (state.tries === 1 ? 'Exact. ' : 'Oui. ') + q.explain;
          nextBtn.hidden = false;
          q.sound?.();
        } else {
          b.classList.add('wrong');
          fb.className = 'quiz-feedback bad'; fb.textContent = 'Non — réécoute et essaie encore.';
          if (state.tries >= 2) {
            grid.querySelectorAll('button').forEach(x => { const ans = q.answers.find(y => y.label === x.textContent); if (ans && ans.id === q.correct) x.classList.add('right'); });
            fb.innerHTML = q.explain;
            nextBtn.hidden = false;
          }
        }
      });
      grid.append(b);
    }
    body.append(grid, fb, nextBtn);
  };

  const finish = () => {
    stopAudio();
    const pct = state.ok / total;
    body.innerHTML = '';
    body.append(h('div', { class: 'big-score' },
      h('div', {}, h('div', { class: 'v' }, fmtPct(pct)), h('div', { class: 'l' }, 'réussite du premier coup')),
      h('div', {}, h('div', { class: 'v' }, `${state.ok}/${total}`), h('div', { class: 'l' }, 'réponses justes')),
      h('div', {}, h('div', { class: 'v' }, `${Math.round((Date.now() - state.startAt) / 1000)} s`), h('div', { class: 'l' }, 'durée'))));
    body.append(h('p', { class: 'small', html: pct >= 0.8 ? 'Objectif atteint (80 %). Augmente la difficulté ou passe à la suite.' : 'Objectif : 80 %. Refais une série demain : la régularité compte plus que la durée.' }));
    const again = h('button', { class: 'btn primary', type: 'button' }, 'Recommencer');
    again.addEventListener('click', start);
    body.append(again);
    if (cfg.stat) store.push('stats.ear', { id: cfg.stat, at: Date.now(), pct, total });
  };

  // écran d'accueil
  const intro = h('div');
  intro.append(h('p', { class: 'small mt-0', html: cfg.intro || `${total} questions. ${canPlayMode ? 'Tu réponds en jouant sur le piano.' : 'Tu réponds en touchant la bonne réponse.'}` }));
  const go = h('button', { class: 'btn primary', type: 'button' }, 'Commencer');
  go.addEventListener('click', () => { audio.ensure().catch(() => {}); start(); });
  intro.append(go);
  body.append(intro);
  return () => { stopAudio(); offNotes?.(); };
}

/** Séries prêtes à l'emploi pour la page Outils. */
export const QUIZ_PRESETS = [
  { group: 'Oreille', id: 'iv-n1', title: 'Intervalles (2de à 5te, 8ve)', kind: 'intervals', set: ['2m', '2M', '3m', '3M', '4J', '5J', '8ve'] },
  { group: 'Oreille', id: 'iv-all', title: 'Tous les intervalles', kind: 'intervals', set: ['2m', '2M', '3m', '3M', '4J', 'Triton', '5J', '6m', '6M', '7m', '7M', '8ve'], directions: ['up', 'down', 'harm'] },
  { group: 'Oreille', id: 'ch-n1', title: 'Accords : majeur, mineur, diminué, augmenté', kind: 'chords', set: ['M', 'm', 'dim', 'aug'] },
  { group: 'Oreille', id: 'ch-n2', title: 'Accords de septième', kind: 'chords', set: ['7', 'maj7', 'm7', 'hdim7', 'dim7'] },
  { group: 'Oreille', id: 'cad', title: 'Cadences', kind: 'cadences' },
  { group: 'Oreille', id: 'sc', title: 'Gammes majeures et mineures', kind: 'scales' },
  { group: 'Lecture', id: 'notes-t', title: 'Notes en clé de sol', kind: 'notes', clefs: ['treble'] },
  { group: 'Lecture', id: 'notes-b', title: 'Notes en clé de fa', kind: 'notes', clefs: ['bass'] },
  { group: 'Lecture', id: 'notes-play', title: 'Notes à jouer au piano (les deux clés)', kind: 'notes', mode: 'play' },
  { group: 'Théorie', id: 'ks-maj', title: 'Armures : tonalités majeures', kind: 'keysig', keys: ['C', 'G', 'D', 'A', 'E', 'B', 'F', 'Bb', 'Eb', 'Ab', 'Db'] },
  { group: 'Théorie', id: 'ks-min', title: 'Armures : tonalités mineures', kind: 'keysig', minor: true, keys: ['C', 'G', 'D', 'A', 'E', 'F', 'Bb', 'Eb', 'Ab'] },
  { group: 'Théorie', id: 'chs', title: 'Accords écrits : nature et renversement', kind: 'chordsight', set: ['M', 'm'], inversions: [0, 1, 2] },
  { group: 'Théorie', id: 'play-fm', title: 'Jouer les fonctions en fa mineur', kind: 'playchord', mode: 'play' },
];
