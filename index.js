// Index du parcours : niveaux, modules, pièces, plans hebdomadaires, grilles de validation.
import N1_TECH from './n1/technique.js';
import N1_INTERP from './n1/interpretation.js';
import N1_THEO from './n1/theorie.js';
import N1_LECT from './n1/lecture.js';
import N1_IMPRO from './n1/impro.js';
import N2_TECH from './n2/technique.js';
import N2_INTERP from './n2/interpretation.js';
import N2_THEO from './n2/theorie.js';
import N2_LECT from './n2/lecture.js';
import N2_IMPRO from './n2/impro.js';
import { PIECE_PAGES } from './pieces.js';

export const MODULES = [
  { id: 'technique', label: 'Technique', intro: 'Le geste au service du son : posture, poids, legato, pédale, gammes — et surtout une méthode de travail efficace.' },
  { id: 'interpretation', label: 'Interprétation', intro: 'Phrasé, chant, rubato, couleurs : comprendre ce que dit la musique et le faire entendre.' },
  { id: 'theorie', label: 'Théorie', intro: 'L’harmonie et l’analyse qui servent directement à jouer : tonalités, accords, fonctions, cadences, formes.' },
  { id: 'lecture', label: 'Lecture à vue', intro: 'Une méthode et un entraînement quotidien court, avec des extraits toujours nouveaux.' },
  { id: 'impro', label: 'Improvisation', intro: 'Improviser dans le style classique et romantique : accompagnements de nocturne, phrases, ornements, formes.' },
];

const tag = (lessons, level, module) => lessons.map(l => ({ ...l, level, module }));

const N1_LESSONS = [
  ...tag(N1_TECH, 'n1', 'technique'), ...tag(N1_INTERP, 'n1', 'interpretation'), ...tag(N1_THEO, 'n1', 'theorie'),
  ...tag(N1_LECT, 'n1', 'lecture'), ...tag(N1_IMPRO, 'n1', 'impro'),
];
const N2_LESSONS = [
  ...tag(N2_TECH, 'n2', 'technique'), ...tag(N2_INTERP, 'n2', 'interpretation'), ...tag(N2_THEO, 'n2', 'theorie'),
  ...tag(N2_LECT, 'n2', 'lecture'), ...tag(N2_IMPRO, 'n2', 'impro'),
];
const ALL = [...N1_LESSONS, ...N2_LESSONS];

export const PIECES = PIECE_PAGES;

const ROUTINE = `<p>Pour une heure de travail :</p>
<ul>
<li><b>10 min de technique</b> : gammes et exercice de la semaine, avec le métronome ou l’analyseur.</li>
<li><b>10 min de lecture à vue</b> : un ou deux extraits nouveaux, sans s’arrêter.</li>
<li><b>30 min de pièce phare</b>, quand l’attention est encore fraîche : sections courtes, lentement, une intention à la fois.</li>
<li><b>10 min</b> de théorie / oreille ou d’improvisation, en alternant d’un jour à l’autre ; finir par une pièce complémentaire pour le plaisir.</li>
</ul>
<p>Un jour par semaine, enregistre la pièce phare en entier et réécoute-la le lendemain.</p>`;

export const LEVELS = [
  {
    id: 'n1', num: 1, short: 'Chanter au piano', title: 'Chanter au piano',
    subtitle: 'Une mélodie qui chante au-dessus d’une main gauche légère : legato, plans sonores, pédale, rubato. Pièce phare : le Nocturne en fa mineur op. 55 n° 1.',
    piece: 'op55-1', complements: ['valse-b150', 'prokofiev-75-6', 'liszt-s169'],
    pieceIds: ['op55-1', 'valse-b150', 'prokofiev-75-6', 'liszt-s169'],
    goals: [
      'Jouer le <b>Nocturne op. 55 n° 1</b> en entier, sans arrêt, mélodie chantante et main gauche légère, pédale propre.',
      'Maîtriser le <b>legato de doigts</b>, la <b>hiérarchie des plans sonores</b> et la <b>pédale syncopée</b> (vérifiés à l’analyseur).',
      'Gammes majeures et mineures harmoniques du programme à ♩ = 80 en doubles croches, régulières.',
      'Comprendre et entendre <b>tonalités, intervalles, accords, fonctions, cadences et notes étrangères</b>.',
      'Lire à vue des pièces simples à deux mains (jusqu’à deux altérations) <b>sans s’arrêter</b>.',
      'Improviser <b>huit mesures</b> dans le style du nocturne sur une grille donnée.',
    ],
    weekRoutine: ROUTINE,
    plan: [
      { title: 'Mise en place', focus: 'Découvrir la pièce, poser la méthode, la posture et les repères.', tasks: [
        { mod: 'Pièce', piece: 'op55-1', text: '{p} : écoute deux versions (section « Écouter »), puis mesures 1 à 8 mains séparées, très lentement.' },
        { mod: 'Technique', lesson: 'n1-t1', text: '{l}' },
        { mod: 'Technique', lesson: 'n1-t2', text: '{l}' },
        { mod: 'Théorie', lesson: 'n1-th1', text: '{l}' },
        { mod: 'Lecture', lesson: 'n1-l1', text: '{l}' },
        { mod: 'Lecture', tool: ['#/outils/lecture', 'Lecture à vue'], text: '{t} « niveau 1 · main droite » : 10 minutes, 5 jours sur 7.' },
        { mod: 'Impro', lesson: 'n1-im1', text: '{l}' },
        { mod: 'Compléments', piece: 'valse-b150', text: '{p} (en cours) : stabiliser la partie A, caractère de valse.' },
      ] },
      { title: 'Le legato chanté', focus: 'La mélodie sans pédale, au doigt : le cœur du niveau.', tasks: [
        { mod: 'Pièce', piece: 'op55-1', text: '{p} : mesures 1 à 16 mains ensemble à ♩ = 40 ; mesures 17 à 24 mains séparées.' },
        { mod: 'Technique', lesson: 'n1-t3', text: '{l} — puis mesure la mélodie des mesures 1 à 4 avec l’analyseur (legato).' },
        { mod: 'Théorie', lesson: 'n1-th2', text: '{l}' },
        { mod: 'Lecture', lesson: 'n1-l2', text: '{l}' },
        { mod: 'Impro', lesson: 'n1-im2', text: '{l}' },
        { mod: 'Compléments', piece: 'prokofiev-75-6', text: '{p} (en cours) : rythme pointé et poids des accords.' },
      ] },
      { title: 'Les plans sonores', focus: 'Faire chanter le dessus ; les retours variés du thème.', tasks: [
        { mod: 'Pièce', piece: 'op55-1', text: '{p} : mesures 17 à 48 ; travaille à part les triolets (m. 27-28) et le septolet (m. 44).' },
        { mod: 'Technique', lesson: 'n1-t4', text: '{l}' },
        { mod: 'Interprétation', lesson: 'n1-i1', text: '{l}' },
        { mod: 'Théorie', lesson: 'n1-th3', text: '{l}' },
        { mod: 'Lecture', lesson: 'n1-l3', text: '{l}' },
        { mod: 'Impro', tool: ['#/outils/impro', 'l’accompagnateur'], text: 'Avec {t} (« Nocturne en fa mineur ») : 3 improvisations de 4 mesures.' },
      ] },
      { title: 'La pédale', focus: 'Pédale syncopée, puis le Più mosso.', tasks: [
        { mod: 'Pièce', piece: 'op55-1', text: '{p} : Più mosso, mesures 48 à 64, mains séparées puis ensemble lentement.' },
        { mod: 'Technique', lesson: 'n1-t5', text: '{l}' },
        { mod: 'Interprétation', lesson: 'n1-i2', text: '{l}' },
        { mod: 'Théorie', lesson: 'n1-th4', text: '{l}' },
        { mod: 'Lecture', tool: ['#/outils/lecture', 'Lecture à vue'], text: '{t} « deux mains (mélodie + basses) » : mode attente, puis en rythme.' },
        { mod: 'Impro', lesson: 'n1-im3', text: '{l}' },
      ] },
      { title: 'Assembler', focus: 'Fin du Più mosso, gammes, rubato.', tasks: [
        { mod: 'Pièce', piece: 'op55-1', text: '{p} : mesures 65 à 76 (traits chromatiques 69-70), puis enchaîne A et Più mosso.' },
        { mod: 'Technique', lesson: 'n1-t6', text: '{l}' },
        { mod: 'Interprétation', lesson: 'n1-i3', text: '{l}' },
        { mod: 'Théorie', lesson: 'n1-th5', text: '{l}' },
        { mod: 'Lecture', lesson: 'n1-l4', text: '{l}' },
        { mod: 'Compléments', piece: 'liszt-s169', text: '{p} : déchiffrage et mise en place de la première page.' },
      ] },
      { title: 'La coda', focus: 'Triolets molto legato, passage en fa majeur, choral final.', tasks: [
        { mod: 'Pièce', piece: 'op55-1', text: '{p} : coda, mesures 77 à 101.' },
        { mod: 'Théorie', lesson: 'n1-th6', text: '{l}' },
        { mod: 'Impro', lesson: 'n1-im4', text: '{l}' },
        { mod: 'Lecture', tool: ['#/outils/lecture', 'Lecture à vue'], text: '{t} « deux mains (mélodie + accords) » : 5 extraits dans la semaine.' },
        { mod: 'Oreille', tool: ['#/outils/oreille', 'Oreille et théorie'], text: '{t} : séries « Intervalles » et « Cadences » jusqu’à 80 %.' },
        { mod: 'Compléments', piece: 'liszt-s169', text: '{p} : suite de la mise en place.' },
      ] },
      { title: 'Vue d’ensemble', focus: 'Toute la pièce, tempo progressif ; l’analyse éclaire l’interprétation.', tasks: [
        { mod: 'Pièce', piece: 'op55-1', text: '{p} : enchaîne toute la pièce ; tempo progressif de ♩ = 50 à ♩ = 60 (métronome, accélération progressive).' },
        { mod: 'Interprétation', lesson: 'n1-i4', text: '{l}' },
        { mod: 'Théorie', lesson: 'n1-th7', text: '{l}' },
        { mod: 'Compléments', piece: 'valse-b150', text: '{p} et Montaigus et Capulets : jouer en entier.' },
      ] },
      { title: 'Interpréter et valider', focus: 'Écouter, s’enregistrer, juger avec la grille.', tasks: [
        { mod: 'Interprétation', lesson: 'n1-i5', text: '{l}' },
        { mod: 'Pièce', piece: 'op55-1', text: '{p} : deux enregistrements complets dans la semaine, réécoutés le lendemain.' },
        { mod: 'Validation', tool: ['#/validation/n1', 'la grille de validation'], text: 'Remplis {t} honnêtement ; reprends les points « en cours ».' },
        { mod: 'Oreille', tool: ['#/outils/oreille', 'Oreille et théorie'], text: 'Révisions : toutes les séries du niveau à 80 % ou plus.' },
      ] },
    ],
    validation: [
      { id: 'p1', group: 'Pièce phare', text: 'Je joue le Nocturne op. 55 n° 1 en entier, sans arrêt, au tempo de ♩ = 60 au moins.' },
      { id: 'p2', group: 'Pièce phare', text: 'La mélodie chante nettement au-dessus de la main gauche.', how: 'Réécoute d’un enregistrement, ou analyseur « Équilibre » : au moins +12 de vélocité.' },
      { id: 'p3', group: 'Pièce phare', text: 'La main gauche (basse + accord) est légère et régulière ; les basses sont tenues par la pédale sans mélanger les harmonies.' },
      { id: 'p4', group: 'Pièce phare', text: 'Les fioritures et groupes irréguliers (m. 14, 30, 44, 46) sont souples, sans précipitation ni retard de la main gauche.' },
      { id: 'p5', group: 'Pièce phare', text: 'Le Più mosso est agité sans dureté ; les traits des mesures 69-70 sont égaux.' },
      { id: 'p6', group: 'Pièce phare', text: 'La coda est molto legato, le crescendo dosé ; le choral final sonne plein et calme.' },
      { id: 't1', group: 'Technique', text: 'Gammes du niveau 1 à ♩ = 80 en doubles croches, mains ensemble.', how: 'Analyseur « Régularité » : irrégularité inférieure à 8 %.' },
      { id: 't2', group: 'Technique', text: 'Legato de doigts maîtrisé sur une mélodie lente.', how: 'Analyseur « Legato » : au moins 80 % de transitions legato.' },
      { id: 't3', group: 'Technique', text: 'Pédale syncopée propre sur i – iv – V7 – i.', how: 'Analyseur « Pédale » : au moins 80 % de changements syncopés, aucun brouillé.' },
      { id: 'o1', group: 'Théorie et oreille', text: 'Je reconnais à l’oreille les intervalles de la seconde à l’octave.', how: 'Série « Intervalles (2de à 5te, 8ve) » : 80 % ou plus.' },
      { id: 'o2', group: 'Théorie et oreille', text: 'Je reconnais majeur, mineur, diminué, augmenté et les quatre cadences.', how: 'Séries « Accords » et « Cadences » : 80 % ou plus.' },
      { id: 'o3', group: 'Théorie et oreille', text: 'Je sais nommer les fonctions (T, SD, D) des mesures 1 à 8 de l’op. 55 n° 1.' },
      { id: 'l1', group: 'Lecture à vue', text: 'Lecture à deux mains (niveau 1) en rythme sans m’arrêter.', how: 'Outil Lecture à vue « deux mains » : 85 % de notes justes à ♩ = 60.' },
      { id: 'i1', group: 'Improvisation', text: 'J’improvise huit mesures question–réponse dans le style du nocturne, sans m’arrêter, en m’appuyant sur les notes de l’accord aux temps forts.', how: 'Accompagnateur : au moins 70 % de temps forts sur une note de l’accord.' },
      { id: 'r1', group: 'Interprétation', text: 'Rubato : ma main gauche reste stable quand la main droite s’étire.', how: 'Joue les mesures 1 à 8 avec le métronome à la main gauche seule, puis compare.' },
      { id: 'c1', group: 'Pièces complémentaires', text: 'Valse en la mineur et Montaigus et Capulets jouées en entier, avec leur caractère.' },
      { id: 'c2', group: 'Pièces complémentaires', text: 'Romance S.169 : la mélodie chante au-dessus de l’accompagnement arpégé (au moins la première page).' },
    ],
  },
  {
    id: 'n2', num: 2, short: 'Contrastes et couleurs', title: 'Contrastes et couleurs',
    subtitle: 'Deux mondes dans une même pièce : le cantabile et le con fuoco. Rotation, polyphonie de la main gauche, pianissimo, ornements. Pièce phare : le Nocturne en fa majeur op. 15 n° 1 ; complément : Clair de lune.',
    piece: 'op15-1', complements: ['clair-de-lune'],
    pieceIds: ['op15-1', 'clair-de-lune'],
    goals: [
      'Jouer le <b>Nocturne op. 15 n° 1</b> en entier : un Andante cantabile intime et un Con fuoco agité, avec des transitions maîtrisées.',
      'Acquérir la <b>rotation de l’avant-bras</b> (doubles notes du Con fuoco) et la <b>polyphonie de la main gauche</b>.',
      'Contrôler le <b>pianissimo</b> et la palette des nuances (exercice des nuances à l’analyseur).',
      'Comprendre les <b>accords de septième, dominantes secondaires, modulations, marches, sixte napolitaine et sixte augmentée</b>.',
      'Lire à vue en <b>motifs</b>, dans les tonalités jusqu’à quatre altérations, en <b>regardant en avance</b>.',
      'Improviser une <b>forme ABA</b> avec modulation, et un <b>prélude</b> sur une basse descendante.',
      'Jouer <b>Clair de lune</b> avec une pédale et des couleurs propres à Debussy.',
    ],
    weekRoutine: ROUTINE,
    plan: [
      { title: 'Deux mondes', focus: 'Découvrir la pièce ; la main gauche à trois voix de l’Andante.', tasks: [
        { mod: 'Pièce', piece: 'op15-1', text: '{p} : écoute deux versions ; mesures 1 à 8, main gauche seule (basse, voix en noires, triolets).' },
        { mod: 'Technique', lesson: 'n2-t3', text: '{l}' },
        { mod: 'Théorie', lesson: 'n2-th1', text: '{l}' },
        { mod: 'Lecture', lesson: 'n2-l1', text: '{l}' },
        { mod: 'Impro', lesson: 'n2-im1', text: '{l}' },
      ] },
      { title: 'Le cantabile', focus: 'L’Andante mains ensemble ; ornements.', tasks: [
        { mod: 'Pièce', piece: 'op15-1', text: '{p} : mesures 1 à 24 mains ensemble lentement ; la fioriture de la mesure 20.' },
        { mod: 'Technique', lesson: 'n2-t1', text: '{l}' },
        { mod: 'Interprétation', lesson: 'n2-i3', text: '{l}' },
        { mod: 'Théorie', tool: ['#/outils/oreille', 'Oreille et théorie'], text: '{t} : série « Accords de septième ».' },
        { mod: 'Lecture', lesson: 'n2-l2', text: '{l}' },
      ] },
      { title: 'Le Con fuoco (1)', focus: 'Rotation pour les doubles notes, traits de la main gauche.', tasks: [
        { mod: 'Pièce', piece: 'op15-1', text: '{p} : mesures 25 à 28, main droite (rotation) puis main gauche (traits), très lentement en rythmes.' },
        { mod: 'Technique', lesson: 'n2-t2', text: '{l}' },
        { mod: 'Théorie', lesson: 'n2-th2', text: '{l}' },
        { mod: 'Lecture', tool: ['#/outils/lecture', 'Lecture à vue'], text: '{t} « niveau 2 · une main » : 10 minutes par jour.' },
        { mod: 'Impro', lesson: 'n2-im2', text: '{l}' },
      ] },
      { title: 'Le Con fuoco (2)', focus: 'La mélodie à la main gauche ; octaves et accords.', tasks: [
        { mod: 'Pièce', piece: 'op15-1', text: '{p} : mesures 29 à 48 (mélodie à la main gauche, mesures à 6/8).' },
        { mod: 'Technique', lesson: 'n2-t5', text: '{l}' },
        { mod: 'Interprétation', lesson: 'n2-i1', text: '{l}' },
        { mod: 'Théorie', lesson: 'n2-th3', text: '{l}' },
        { mod: 'Lecture', lesson: 'n2-l3', text: '{l}' },
      ] },
      { title: 'Le retour', focus: 'Assembler le B ; la reprise ornée ; Clair de lune commence.', tasks: [
        { mod: 'Pièce', piece: 'op15-1', text: '{p} : section B en entier à tempo réduit ; reprise mesures 49 à 74 (ornements m. 54 et 56).' },
        { mod: 'Technique', lesson: 'n2-t6', text: '{l}' },
        { mod: 'Théorie', lesson: 'n2-th4', text: '{l}' },
        { mod: 'Impro', lesson: 'n2-im3', text: '{l}' },
        { mod: 'Compléments', piece: 'clair-de-lune', text: '{p} : mesures 1 à 26.' },
      ] },
      { title: 'L’harmonie', focus: 'Enchaîner ; l’harmonie guide le phrasé.', tasks: [
        { mod: 'Pièce', piece: 'op15-1', text: '{p} : enchaînement complet, transitions m. 24-25 et 48-49.' },
        { mod: 'Interprétation', lesson: 'n2-i2', text: '{l}' },
        { mod: 'Théorie', lesson: 'n2-th5', text: '{l}' },
        { mod: 'Lecture', lesson: 'n2-l4', text: '{l}' },
        { mod: 'Compléments', piece: 'clair-de-lune', text: '{p} : mesures 27 à 50 (arpèges, pédale).' },
      ] },
      { title: 'Vue d’ensemble', focus: 'Tempo final ; analyse ; pianissimo.', tasks: [
        { mod: 'Pièce', piece: 'op15-1', text: '{p} : tempo final (Chopin indique ♩ = 69 pour l’Andante ; vise 60 à 69), toute la pièce.' },
        { mod: 'Interprétation', lesson: 'n2-i4', text: '{l}' },
        { mod: 'Technique', lesson: 'n2-t4', text: '{l}' },
        { mod: 'Théorie', lesson: 'n2-th6', text: '{l}' },
        { mod: 'Impro', lesson: 'n2-im4', text: '{l}' },
        { mod: 'Compléments', piece: 'clair-de-lune', text: '{p} : mesures 51 à la fin.' },
      ] },
      { title: 'Interpréter et valider', focus: 'Debussy et Chopin, deux sons ; enregistrement ; grille.', tasks: [
        { mod: 'Interprétation', lesson: 'n2-i5', text: '{l}' },
        { mod: 'Pièce', piece: 'op15-1', text: '{p} : deux enregistrements complets, réécoutés le lendemain.' },
        { mod: 'Validation', tool: ['#/validation/n2', 'la grille de validation'], text: 'Remplis {t}.' },
      ] },
    ],
    validation: [
      { id: 'p1', group: 'Pièce phare', text: 'Je joue le Nocturne op. 15 n° 1 en entier sans arrêt ; Andante ♩ ≈ 60–69.' },
      { id: 'p2', group: 'Pièce phare', text: 'Andante : la mélodie chante, la main gauche à trois voix reste legato et transparente (basse tenue, triolets discrets).' },
      { id: 'p3', group: 'Pièce phare', text: 'Con fuoco : les doubles notes de la main droite sont régulières grâce à la rotation, sans crispation.' },
      { id: 'p4', group: 'Pièce phare', text: 'La mélodie de la main gauche (m. 29-30 et 41-44) domine l’agitation de la main droite.' },
      { id: 'p5', group: 'Pièce phare', text: 'Les deux transitions (m. 24-25, 48-49) sont préparées ; la reprise est ornée et plus intime.' },
      { id: 't1', group: 'Technique', text: 'Rotation : trémolo d’octave brisée / doubles notes alternées, régulier à ♩ = 80 en sextolets.', how: 'Analyseur « Régularité » : irrégularité inférieure à 8 %.' },
      { id: 't2', group: 'Technique', text: 'Contrôle des nuances : pp, p, mf, f atteints à la demande.', how: 'Analyseur « Nuances » : 70 % de notes dans la cible.' },
      { id: 't3', group: 'Technique', text: 'Gammes et arpèges du niveau 2 (dont 7e de dominante et 7e diminuée) à ♩ = 88 en doubles croches.' },
      { id: 'o1', group: 'Théorie et oreille', text: 'Je reconnais à l’oreille les cinq accords de septième.', how: 'Série « Accords de septième » : 80 % ou plus.' },
      { id: 'o2', group: 'Théorie et oreille', text: 'Je sais repérer dans une partition une dominante secondaire, une modulation, une marche, une sixte napolitaine.' },
      { id: 'l1', group: 'Lecture à vue', text: 'Lecture « niveau 2 » en rythme avec l’option « Regard en avant ».', how: 'Outil Lecture à vue : 80 % de notes justes.' },
      { id: 'i1', group: 'Improvisation', text: 'J’improvise une forme ABA (fa mineur / la♭ majeur / fa mineur) sans m’arrêter, avec un vrai contraste de caractère.' },
      { id: 'i2', group: 'Improvisation', text: 'J’improvise un prélude sur la basse chromatique descendante, en conduisant les voix par mouvement conjoint.' },
      { id: 'c1', group: 'Pièce complémentaire', text: 'Clair de lune en entier : pianissimo maîtrisé, pédale de résonance sans brouillage, sommet de l’« En animant » construit.' },
    ],
  },
  { id: 'n3', num: 3, locked: true, short: 'Fioritures', title: 'Fioritures et rubato', pieceTitle: 'Nocturne op. 9 n° 1 (Chopin)', complementsText: 'Complément : Glass, Étude n° 6', pieceIds: [] },
  { id: 'n4', num: 4, locked: true, short: 'Le son russe', title: 'Le son russe', pieceTitle: 'Élégie op. 3 n° 1 (Rachmaninov)', complementsText: 'Complément : Scriabine, Prélude op. 11 n° 14', pieceIds: [] },
  { id: 'n5', num: 5, locked: true, short: 'Grandeur', title: 'Grandeur et puissance', pieceTitle: 'Prélude op. 3 n° 2 (Rachmaninov)', complementsText: 'Complément : Nocturne op. 48 n° 1 (Chopin)', pieceIds: [] },
  { id: 'n6', num: 6, locked: true, short: 'La ballade', title: 'Raconter une ballade', pieceTitle: 'Ballade n° 3 op. 47 (Chopin)', complementsText: '', pieceIds: [] },
];

export const levelById = id => LEVELS.find(l => l.id === id);
export const allLessons = () => ALL;
export const lessonById = id => ALL.find(l => l.id === id);
export const lessonsOf = (level, module) => ALL.filter(l => l.level === level && l.module === module);
