// Niveau 1 — Théorie
import { OP55 } from '../excerpts.js';

const MINOR_SCALES = `X:1
M:4/4
L:1/8
K:Am
"^naturelle"A B c d e f g a | "^harmonique"A B c d e f ^g a | "^mélodique (montée)"A B c d e ^f ^g a | "^mélodique (descente)"a =g =f e d c B A |]`;

const INTERVALS_ABC = `X:1
M:4/4
L:1/2
K:C
"^2de M"[CD] "^3ce m"[C_E] | "^3ce M"[CE] "^4te J"[CF] | "^5te J"[CG] "^6te M"[CA] | "^7e m"[C_B] "^8ve"[Cc] |]`;

const TRIADS = `X:1
M:4/4
L:1/4
K:C
"^majeur"[CEG]2 "^mineur"[C_EG]2 | "^diminué"[C_E_G]2 "^augmenté"[CE^G]2 |]`;

const INVERSIONS = `X:1
M:4/4
L:1/4
K:C
"^état fondamental (5)""_do"[CEG]4 | "^1er renversement (6)""_do/mi"[EGc]4 | "^2e renversement (6/4)""_do/sol"[Gce]4 |]`;

const FUNCTIONS = `X:1
M:4/4
L:1/8
K:Fmin
%%score {RH | LH}
V:RH clef=treble
V:LH clef=bass
[V:RH] "^T"[FAc]4 "^SD"[FBd]4 | "^D"[=EGB]4 "^T"[FAc]4 |]
[V:LH] "_i"F,,4 "_iv"B,,4 | "_V7"C,4 "_i"F,,4 |]`;

const CADENCES = `X:1
M:4/4
L:1/4
K:C
%%score {RH | LH}
V:RH clef=treble
V:LH clef=bass
[V:RH] "^parfaite"[FAc] [DFB] [EGc]2 || "^demi-cadence"[EGc] [FAc] [DGB]2 || "^plagale"[EGc] [FAc] [EGc]2 || "^rompue"[FAc] [DFB] [EAc]2 |]
[V:LH] "_IV"F, "_V7"G,, "_I"C,2 || "_I"C, "_IV"F, "_V"G,,2 || "_I"C, "_IV"F, "_I"C,2 || "_IV"F, "_V7"G,, "_vi"A,,2 |]`;

const NONCHORD = `X:1
M:4/4
L:1/8
K:C
%%score {RH | LH}
V:RH clef=treble
V:LH clef=bass
[V:RH] E2 "^passage"F2 G4 | G2 "^broderie"A2 G4 | "^appoggiature"c4 B4 | "^préparation"c8- | "^retard"c4 B4 | c8 |]
[V:LH] "_I"[C,E,G,]8 | [C,E,G,]8 | "_V"[G,,B,,D,]8 | "_I"[C,E,G,]8 | "_V"[G,,B,,D,]8 | "_I"[C,E,G,]8 |]`;

export default [
  {
    id: 'n1-th1', minutes: 20,
    title: 'Tonalités, armures et cycle des quintes',
    summary: 'Pourquoi une armure, comment la lire en une seconde, et comment les tonalités s’organisent.',
    goals: ['Construire une gamme majeure.', 'Reconnaître une tonalité majeure ou mineure à son armure.', 'Situer les tonalités voisines sur le cycle des quintes.'],
    body: W => `
<h2>La gamme majeure</h2>
<p>Toutes les gammes majeures ont la même structure : <b>ton – ton – demi-ton – ton – ton – ton – demi-ton</b>. Sur les touches blanches, seule la gamme de do respecte ce modèle. Pour le reproduire à partir d’une autre note, il faut des dièses ou des bémols : c’est l’<b>armure</b>.</p>
${W.kbd({ from: 60, to: 72, title: 'Do majeur', marks: [60, 62, 64, 65, 67, 69, 71, 72].map(m => ({ m })), names: 'marks', play: 'seq', caption: 'Demi-tons entre mi et fa, et entre si et do.' })}
${W.kbd({ from: 56, to: 68, title: 'La♭ majeur (4 bémols)', marks: [56, 58, 60, 61, 63, 65, 67, 68].map(m => ({ m })), names: 'marks', flats: true, play: 'seq', caption: 'Même structure à partir de la♭ : si♭, mi♭, la♭ et ré♭ sont nécessaires.' })}

<h2>Lire une armure</h2>
<ul>
<li><b>Ordre des dièses</b> : fa – do – sol – ré – la – mi – si. <b>Ordre des bémols</b> : l’inverse, si – mi – la – ré – sol – do – fa.</li>
<li><b>Avec des dièses</b> : la tonique majeure est un demi-ton au-dessus du dernier dièse (dernier dièse do♯ → ré majeur).</li>
<li><b>Avec des bémols</b> : la tonique majeure est l’avant-dernier bémol (si♭ mi♭ la♭ ré♭ → la♭ majeur). Un seul bémol : fa majeur.</li>
</ul>

<h2>Relatif et homonyme</h2>
<p>Chaque armure correspond à <b>deux</b> tonalités : une majeure et sa <b>relative mineure</b>, une tierce mineure (trois demi-tons) plus bas. Quatre bémols : la♭ majeur ou <b>fa mineur</b>, la tonalité de l’op. 55 n° 1. L’<b>homonyme</b>, lui, a la même tonique et l’autre mode : fa mineur et fa majeur. La coda de l’op. 55 passe justement de fa mineur à fa majeur.</p>

<h2>Le cycle des quintes</h2>
${W.cof({ start: 8, minor: true })}
<p>En tournant dans le sens des aiguilles d’une montre, on monte d’une quinte et on ajoute un dièse (ou on retire un bémol). Les tonalités côte à côte sont les <b>tons voisins</b> : ce sont celles vers lesquelles une pièce module le plus naturellement.</p>

<h2>Dans ton répertoire</h2>
<table>
<thead><tr><th>Pièce</th><th>Tonalité</th><th>Armure</th></tr></thead>
<tbody>
<tr><td>Nocturne op. 55 n° 1</td><td>fa mineur</td><td>4 bémols</td></tr>
<tr><td>Valse B. 150</td><td>la mineur</td><td>aucune</td></tr>
<tr><td>Romance S. 169</td><td>mi mineur</td><td>1 dièse</td></tr>
<tr><td>Nocturne op. 15 n° 1 (niveau 2)</td><td>fa majeur, partie centrale en fa mineur</td><td>1 puis 4 bémols</td></tr>
<tr><td>Clair de lune (niveau 2)</td><td>ré♭ majeur</td><td>5 bémols</td></tr>
</tbody></table>
${W.quiz({ kind: 'keysig', keys: ['C', 'G', 'D', 'A', 'E', 'F', 'Bb', 'Eb', 'Ab', 'Db'], title: 'Armures : tonalités majeures', count: 10, stat: 'ks-maj' })}
${W.quiz({ kind: 'keysig', minor: true, keys: ['C', 'G', 'D', 'A', 'E', 'F', 'Bb', 'Eb', 'Ab'], title: 'Armures : tonalités mineures', count: 10, stat: 'ks-min' })}
${W.links([W.informance('/content/pages/20-a-crash-course-in-music-theory', 'A Crash Course in Music Theory')], 'Pour aller plus loin')}
`,
  },

  {
    id: 'n1-th2', minutes: 15,
    title: 'Les trois gammes mineures',
    summary: 'Naturelle, harmonique, mélodique : trois versions d’une même tonalité, et pourquoi elles existent.',
    goals: ['Construire les trois gammes mineures.', 'Comprendre le rôle de la sensible.', 'Les reconnaître à l’oreille.'],
    body: W => `
<ul>
<li><b>Mineure naturelle</b> : les notes de l’armure, sans altération (la mineur : les touches blanches de la à la).</li>
<li><b>Mineure harmonique</b> : on hausse le 7e degré d’un demi-ton. Il devient une <b>sensible</b>, à un demi-ton de la tonique, qui « appelle » la tonique. Entre le 6e et le 7e degré apparaît une seconde augmentée, très caractéristique.</li>
<li><b>Mineure mélodique</b> : en montant, on hausse le 6e et le 7e degré (la seconde augmentée disparaît) ; en descendant, on revient à la forme naturelle.</li>
</ul>
${W.score({ abc: MINOR_SCALES, title: 'La mineur : les trois formes', bpm: 96, hands: false, practice: false })}
<h2>Pourquoi la sensible ?</h2>
<p>Sans elle, l’accord de dominante serait mineur et n’aurait pas la même force d’attraction vers la tonique. En fa mineur, la sensible est <b>mi♮</b> : c’est elle qu’on entend à la basse à la mesure 2 du nocturne (accord de do 7 avec mi♮ à la basse), et dans la gamme de fa mineur harmonique.</p>
${W.kbd({ from: 65, to: 77, title: 'Fa mineur harmonique', marks: [65, 67, 68, 70, 72, 73, 76, 77].map(m => ({ m, color: m === 76 ? '#f2d9a8' : null })), names: 'marks', flats: true, play: 'seq', caption: 'La sensible mi♮ en couleur ; entre ré♭ et mi♮, la seconde augmentée.' })}
${W.quiz({ kind: 'scales', title: 'Reconnaître la gamme à l’oreille', count: 10, stat: 'sc' })}
`,
  },

  {
    id: 'n1-th3', minutes: 20,
    title: 'Les intervalles',
    summary: 'Nommer, lire et entendre la distance entre deux notes.',
    goals: ['Nommer un intervalle (quantité et qualité).', 'Le reconnaître sur la portée.', 'L’entendre et le jouer.'],
    body: W => `
<h2>Le nom d’un intervalle</h2>
<p>Un intervalle a deux composantes. La <b>quantité</b> se compte en noms de notes, en incluant les deux notes : do-mi = do, ré, mi = <b>tierce</b>. La <b>qualité</b> dépend du nombre de demi-tons : do-mi (4 demi-tons) est une tierce <b>majeure</b>, do-mi♭ (3) une tierce <b>mineure</b>.</p>
<table>
<thead><tr><th>Intervalle</th><th class="num">Demi-tons</th><th>Depuis do</th><th>Pour l’oreille</th></tr></thead>
<tbody>
<tr><td>Seconde mineure / majeure</td><td class="num">1 / 2</td><td>ré♭ / ré</td><td>2de M : le début de « Frère Jacques »</td></tr>
<tr><td>Tierce mineure / majeure</td><td class="num">3 / 4</td><td>mi♭ / mi</td><td>3ce m : la Berceuse de Brahms ; 3ce M (descendante) : la 5e de Beethoven</td></tr>
<tr><td>Quarte juste</td><td class="num">5</td><td>fa</td><td>le début de « La Marseillaise » ; la levée de l’op. 55 (do → fa)</td></tr>
<tr><td>Triton</td><td class="num">6</td><td>fa♯ / sol♭</td><td>instable, il veut se résoudre</td></tr>
<tr><td>Quinte juste</td><td class="num">7</td><td>sol</td><td>« Ah ! vous dirai-je, maman »</td></tr>
<tr><td>Sixte mineure / majeure</td><td class="num">8 / 9</td><td>la♭ / la</td><td></td></tr>
<tr><td>Septième mineure / majeure</td><td class="num">10 / 11</td><td>si♭ / si</td><td>la 7e de l’accord de dominante (7e m)</td></tr>
<tr><td>Octave</td><td class="num">12</td><td>do</td><td>la même note, plus haut</td></tr>
</tbody></table>
${W.score({ abc: INTERVALS_ABC, title: 'Intervalles depuis do3', bpm: 60, hands: false, practice: false })}

<h2>Lire les intervalles sur la portée</h2>
<ul>
<li><b>Seconde</b> : d’une ligne à l’interligne voisin (ou l’inverse).</li>
<li><b>Tierce</b> : de ligne à ligne, ou d’interligne à interligne.</li>
<li><b>Quinte</b> : ligne-ligne en sautant une ligne ; <b>quarte</b> : une ligne et un interligne en sautant un espace.</li>
<li><b>Octave</b> : une ligne et un interligne, très éloignés.</li>
</ul>
<p>C’est la base de la lecture à vue rapide : on lit la <b>distance</b> entre les notes plutôt que le nom de chaque note.</p>

<h2>Le renversement</h2>
<p>Renverser un intervalle, c’est passer la note grave à l’octave supérieure : do-mi (tierce) devient mi-do (sixte). La quantité devient « 9 moins l’ancienne », et la qualité s’inverse : majeur ↔ mineur, juste ↔ juste, augmenté ↔ diminué.</p>

${W.quiz({ kind: 'intervals', set: ['2m', '2M', '3m', '3M', '4J', '5J', '8ve'], title: 'À l’oreille : intervalles montants', count: 10, stat: 'iv-n1' })}
${W.quiz({ kind: 'intervals', set: ['2m', '2M', '3m', '3M', '4J', '5J', '8ve'], mode: 'play', title: 'Au piano : jouer l’intervalle demandé', count: 8, stat: 'iv-n1-play' })}
`,
  },

  {
    id: 'n1-th4', minutes: 20,
    title: 'Accords de trois sons et renversements',
    summary: 'Superposer deux tierces : quatre sortes d’accords, trois positions.',
    goals: ['Construire les accords majeur, mineur, diminué et augmenté.', 'Reconnaître un renversement et son chiffrage.', 'Entendre la nature d’un accord.'],
    body: W => `
<h2>Quatre accords</h2>
<p>Un accord de trois sons superpose deux tierces au-dessus d’une <b>fondamentale</b> : fondamentale, tierce, quinte.</p>
<ul>
<li><b>majeur</b> : tierce majeure + tierce mineure (do – mi – sol) ;</li>
<li><b>mineur</b> : tierce mineure + tierce majeure (do – mi♭ – sol) ;</li>
<li><b>diminué</b> : deux tierces mineures (do – mi♭ – sol♭) ;</li>
<li><b>augmenté</b> : deux tierces majeures (do – mi – sol♯).</li>
</ul>
${W.score({ abc: TRIADS, title: 'Les quatre accords sur do', bpm: 50, hands: false, practice: false })}

<h2>Les renversements</h2>
<p>Quand la fondamentale n’est pas à la basse, l’accord est <b>renversé</b>. Le chiffrage indique l’intervalle entre la basse et les autres notes :</p>
<ul>
<li><b>état fondamental</b> (chiffré 5) : fondamentale à la basse ;</li>
<li><b>1er renversement</b> (6) : tierce à la basse ;</li>
<li><b>2e renversement</b> (6/4) : quinte à la basse. Il est instable : on le trouve surtout juste avant une cadence (le i<sup>6/4</sup> de la mesure 7 de l’op. 55).</li>
</ul>
${W.score({ abc: INVERSIONS, title: 'Do majeur dans ses trois positions', bpm: 50, hands: false, practice: false, caption: 'En notation anglo-saxonne, le renversement s’écrit avec la basse : do/mi, do/sol.' })}

<h2>Les accords d’une tonalité</h2>
<p>Sur chaque degré de la gamme, on peut construire un accord avec les notes de la tonalité. En majeur : I, ii, iii, IV, V, vi, vii° (majuscule = majeur, minuscule = mineur, ° = diminué). En mineur harmonique : i, ii°, III, iv, V, VI, vii°. On en voit déjà plusieurs dans les premières mesures de l’op. 55 : i, VII<sup>6</sup> (mi♭ majeur, 1er renversement), III (la♭ majeur).</p>
${W.kbd({ from: 53, to: 77, title: 'Fa mineur : i, iv et V', marks: [{ m: 53, label: 'i' }, { m: 56 }, { m: 60 }, { m: 58, label: 'iv', color: '#efe3cc' }, { m: 61, color: '#efe3cc' }, { m: 65, color: '#efe3cc' }, { m: 72, label: 'V', color: '#e3ecdf' }, { m: 76, color: '#e3ecdf' }, { m: 67, color: '#e3ecdf' }], names: 'none', caption: 'i : fa – la♭ – do ; iv : si♭ – ré♭ – fa ; V : do – mi♮ – sol (ici en positions écartées).' })}
${W.quiz({ kind: 'chords', set: ['M', 'm', 'dim', 'aug'], title: 'À l’oreille : nature de l’accord', count: 10, stat: 'ch-n1' })}
${W.quiz({ kind: 'chordsight', set: ['M', 'm'], inversions: [0, 1, 2], title: 'Sur la portée : nature et renversement', count: 8, stat: 'chs' })}
`,
  },

  {
    id: 'n1-th5', minutes: 20,
    title: 'Degrés et fonctions : tonique, sous-dominante, dominante',
    summary: 'Chaque accord joue un rôle : repos, éloignement ou tension. Comprendre ces rôles, c’est comprendre le mouvement de la musique.',
    goals: ['Nommer les degrés.', 'Classer les accords par fonction.', 'Comprendre la résolution de la septième de dominante.'],
    body: W => `
<h2>Les degrés</h2>
<p>I tonique, II sus-tonique, III médiante, IV sous-dominante, V dominante, VI sus-dominante, VII sensible (ou sous-tonique quand il est à un ton de la tonique, comme mi♭ en fa mineur naturel).</p>

<h2>Trois fonctions</h2>
${W.diagram('functions', { key: 'fa mineur' })}
<ul>
<li><b>Tonique (T)</b> : I, et parfois vi ou III qui la remplacent. Le repos.</li>
<li><b>Sous-dominante (SD)</b> : IV, ii, et la sixte napolitaine. L’éloignement, la préparation.</li>
<li><b>Dominante (D)</b> : V, V7, vii°. La tension, qui appelle la tonique.</li>
</ul>
<p>Le schéma le plus courant de la musique tonale est <b>T – SD – D – T</b>. Quand tu reconnais ces trois fonctions, tu sais où la musique va, et donc où elle se tend et se détend.</p>
${W.score({ abc: FUNCTIONS, title: 'T – SD – D – T en fa mineur', bpm: 60, caption: 'Écoute la tension du V7 et le soulagement du dernier accord.' })}

<h2>La septième de dominante</h2>
<p>L’accord V7 (en fa mineur : do – mi♮ – sol – si♭) contient un <b>triton</b> entre mi♮ et si♭. Ce triton se résout : la sensible <b>mi♮ monte</b> vers fa, la septième <b>si♭ descend</b> vers la♭. C’est cette double attraction qui rend la cadence si forte.</p>
${W.kbd({ from: 60, to: 72, title: 'Résolution de V7 vers i', marks: [{ m: 64, label: 'mi', color: '#f2d9a8' }, { m: 70, label: 'si♭', color: '#f2d9a8' }, { m: 65, label: 'fa', color: '#cfe6d7' }, { m: 68, label: 'la♭', color: '#cfe6d7' }], names: 'none', caption: 'Orange : le triton du V7 ; vert : ses notes de résolution.' })}

<h2>Application : les mesures 1 à 8 du nocturne</h2>
<p>Voici l’analyse déjà vue en interprétation, avec les fonctions :</p>
<ul>
<li>i (T) – VII<sup>6</sup> (accord de passage) – III (T, relatif majeur) – V<sup>6/5</sup> (D) : une boucle qui revient sur i ;</li>
<li>mesure 6 : <b>N6</b>, la sixte napolitaine (SD) ;</li>
<li>mesure 7 : i<sup>6/4</sup> – V (D) : le 6/4 de cadence n’est pas une vraie tonique, il prépare la dominante ;</li>
<li>mesure 8 : i (T), cadence parfaite.</li>
</ul>
${W.quiz({ kind: 'playchord', mode: 'play', title: 'Au piano : jouer les fonctions en fa mineur', count: 6, stat: 'play-fm' })}
`,
  },

  {
    id: 'n1-th6', minutes: 15,
    title: 'Les cadences',
    summary: 'La ponctuation de la musique : point final, virgule, « amen » et surprise.',
    goals: ['Reconnaître les quatre cadences.', 'Les repérer dans l’op. 55 n° 1.', 'Les entendre.'],
    body: W => `
<ul>
<li><b>Cadence parfaite</b> (V – I), les deux accords à l’état fondamental, la tonique au soprano : le point final. Si l’un des accords est renversé, ou si la tonique n’est pas au soprano, on parle de <b>cadence imparfaite</b>.</li>
<li><b>Demi-cadence</b> : arrêt sur V. Une virgule, une question.</li>
<li><b>Cadence plagale</b> (IV – I) : le « amen » des cantiques, plus doux.</li>
<li><b>Cadence rompue</b> (V – vi) : on attend I, on entend vi. Une surprise qui relance la musique.</li>
</ul>
${W.score({ abc: CADENCES, title: 'Les quatre cadences en do majeur', bpm: 72, caption: 'Une cadence par mesure.' })}

<h2>Dans le nocturne</h2>
<ul>
<li>Mesures 7-8 : i<sup>6/4</sup> – V – i, <b>cadence parfaite</b> qui clôt le thème.</li>
<li>Mesure 24 : la phrase b s’arrête sur do, la dominante : <b>demi-cadence</b> (et attente du retour).</li>
<li>Mesure 72 : point d’orgue sur la dominante, à la fin du Più mosso : encore une suspension.</li>
<li>Mesures 98-99 : sous-dominante mineure – V7 – I : la cadence finale, en fa majeur.</li>
</ul>
${W.quiz({ kind: 'cadences', title: 'À l’oreille : quelle cadence ?', count: 10, stat: 'cad' })}
`,
  },

  {
    id: 'n1-th7', minutes: 20,
    title: 'Les notes étrangères',
    summary: 'Les notes qui n’appartiennent pas à l’accord : ce sont elles qui font chanter une mélodie.',
    goals: ['Reconnaître notes de passage, broderies, appoggiatures et retards.', 'Les repérer dans l’op. 55 n° 1.', 'En tirer des conséquences pour le phrasé.'],
    body: W => `
<p>Une mélodie faite uniquement de notes de l’accord serait un arpège. Ce qui la rend expressive, ce sont les <b>notes étrangères</b> à l’harmonie.</p>
<ul>
<li><b>Note de passage</b> : relie deux notes de l’accord par mouvement conjoint, sur un temps faible.</li>
<li><b>Broderie</b> : quitte une note de l’accord et y revient (au-dessus ou au-dessous), sur un temps faible.</li>
<li><b>Appoggiature</b> : dissonance placée <b>sur le temps</b>, qui se résout par mouvement conjoint. Elle s’appuie, sa résolution se pose.</li>
<li><b>Retard</b> : une note de l’accord précédent est <b>tenue</b> pendant le changement d’accord, devient dissonante, puis descend se résoudre.</li>
</ul>
${W.score({ abc: NONCHORD, title: 'Les quatre notes étrangères (do majeur)', bpm: 66, caption: 'Le retard a besoin d’une préparation : do appartient à l’accord de I (mesure 4), il est tenu sur V (mesure 5), puis se résout sur si.' })}

<h2>Dans l’op. 55 n° 1</h2>
${W.score({ abc: OP55.e1, title: 'Mesures 1 à 4', bpm: 56, hands: false })}
<ul>
<li>Mesure 1 : sur l’accord de mi♭ majeur (3e temps), le <b>ré♭</b> est une note de passage entre mi♭ et do.</li>
<li>Mesure 2 : <b>si♮</b> et <b>ré♭</b> sont des broderies de do (inférieure chromatique et supérieure).</li>
<li>Mesure 7 (voir l’analyse) : le <b>la♭</b> sur l’accord de do 7 est une appoggiature de sol.</li>
</ul>
${W.key('Conséquence pour le jeu', '<ul><li>Appoggiature : plus d’appui, puis résolution plus douce.</li><li>Notes de passage et broderies : plus légères que les notes de l’accord qu’elles ornent.</li><li>Retard : laisser entendre la dissonance tenue, résoudre en douceur.</li></ul>')}
${W.exo('Exercice', '<p>Sur la partition des mesures 1 à 24, entoure au crayon les notes étrangères de la mélodie et note leur type (P, B, App, R). Puis joue la main droite en les allégeant (ou en appuyant les appoggiatures).</p>')}
`,
  },
];
