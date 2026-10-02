// Niveau 1 — Improvisation

const LH_BASSE_ACCORD = `[V:LH] .F,,2 .[A,CF]2 .C,2 .[A,CF]2 | .D,,2 .[A,DF]2 .A,,2 .[A,DF]2 | .B,,2 .[B,DF]2 .F,,2 .[B,DF]2 | .C,,2 .[B,=EG]2 .G,,2 .[B,=EG]2 | .F,,2 .[A,CF]2 F,,4 |]`;
const HEAD = () => `X:1
M:4/4
L:1/8
K:Fmin
%%score {RH | LH}
V:RH clef=treble
V:LH clef=bass`;

const ACC_A = `X:1
M:4/4
L:1/8
K:Fmin
"^i".F,,2 .[A,CF]2 .C,2 .[A,CF]2 | "^VI".D,,2 .[A,DF]2 .A,,2 .[A,DF]2 | "^iv".B,,2 .[B,DF]2 .F,,2 .[B,DF]2 | "^V7".C,,2 .[B,=EG]2 .G,,2 .[B,=EG]2 | "^i".F,,2 .[A,CF]2 F,,4 |]`.replace('K:Fmin', 'K:Fmin clef=bass');

const ACC_B = `X:1
M:4/4
L:1/8
K:Fmin clef=bass
"^i"(3F,,C,A, (3CA,C, (3F,,C,A, (3CA,C, | "^VI"(3D,,A,,F, (3A,F,A,, (3D,,A,,F, (3A,F,A,, | "^iv"(3B,,,F,,D, (3F,D,F,, (3B,,,F,,D, (3F,D,F,, | "^V7"(3C,,G,,=E, (3B,=E,G,, (3C,,G,,=E, (3B,=E,G,, | "^i"[F,,C,A,]8 |]`;

const ACC_C = `X:1
M:4/4
L:1/8
K:Fmin clef=bass
"^i"[F,,C,A,]8 | "^VI"[D,,A,,F,]8 | "^iv"[B,,,F,,D,]8 | "^V7"[C,,B,,=E,]8 | "^i"[F,,C,A,]8 |]`;

const melodyScore = (rh) => `${HEAD()}
[V:RH] ${rh}
${LH_BASSE_ACCORD}`;

const STEP1 = melodyScore(`"^1. squelette"A8 | A8 | F8 | =E8 | F8 |]`);
const STEP2 = melodyScore(`"^2. un temps sur deux"A2 B2 c2 B2 | F2 A2 d2 c2 | B2 A2 F2 G2 | c2 B2 G2 =E2 | F8 |]`);
const STEP3 = melodyScore(`"^3. broderies et passages"AG AB c2 B2 | FA dc d2 c2 | Bc BA F2 G2 | cB G=E F2 =E2 | F8 |]`);
const STEP4 = `X:1
M:4/4
L:1/16
K:Fmin
%%score {RH | LH}
V:RH clef=treble
V:LH clef=bass
[V:RH] "^4. appoggiatures"B8 A4 =B2 c2 | e8 d4 c4 | c8 B4 A2 G2 | A8 G4 F2 =E2 | F16 |]
[V:LH] .F,,4 .[A,CF]4 .C,4 .[A,CF]4 | .D,,4 .[A,DF]4 .A,,4 .[A,DF]4 | .B,,4 .[B,DF]4 .F,,4 .[B,DF]4 | .C,,4 .[B,=EG]4 .G,,4 .[B,=EG]4 | .F,,4 .[A,CF]4 F,,8 |]`;

const PERIOD = `X:1
M:4/4
L:1/8
K:Fmin
%%score {RH | LH}
V:RH clef=treble
V:LH clef=bass
[V:RH] "^antécédent"(c2 f2 ed c2 | B2 d2 cB A2 | A2 c2 FG A2 | "^demi-cadence"G6) z2 | "^conséquent"(c2 f2 ed c2 | B2 d2 f2 ed | c2 B2 G2 =E2 | "^cadence parfaite"F6) z2 |]
[V:LH] "_i".F,,2 .[A,CF]2 .C,2 .[A,CF]2 | "_iv".B,,2 .[B,DF]2 .F,,2 .[B,DF]2 | "_i".F,,2 .[A,CF]2 .C,2 .[A,CF]2 | "_V".C,,2 .[G,C=E]2 .G,,2 .[G,C=E]2 | "_i".F,,2 .[A,CF]2 .C,2 .[A,CF]2 | "_iv".B,,2 .[B,DF]2 .F,,2 .[B,DF]2 | "_V7".C,,2 .[B,=EG]2 .G,,2 .[B,=EG]2 | "_i".F,,2 .[A,CF]2 F,,4 |]`;

const PEDAL5 = [0, 4, 8, 12, 16];

export default [
  {
    id: 'n1-im1', minutes: 15,
    title: 'Improviser : les règles du jeu',
    summary: 'Improviser, c’est composer en temps réel avec des modèles. Quelques règles suffisent pour commencer.',
    goals: ['Garder la pulsation quoi qu’il arrive.', 'Construire avec peu de matériau.', 'Transformer une « fausse note » en note de passage.'],
    body: W => `
<p>Chopin, Liszt, Beethoven improvisaient en public : préludes, variations, fantaisies. Les organistes le font encore à chaque office. Improviser dans le style classique, ce n’est pas jouer n’importe quoi : c’est <b>composer en direct</b> avec des modèles qu’on a assimilés. Ce module te donne ces modèles, un par un.</p>

<h2>Cinq règles</h2>
<ol>
<li><b>La pulsation ne s’arrête jamais.</b> Mieux vaut une note simple à temps qu’une belle idée en retard.</li>
<li><b>Peu de matériau.</b> Un motif de trois ou quatre notes, répété, varié, transposé, suffit à remplir huit mesures.</li>
<li><b>Des contraintes.</b> Cinq notes, une grille de quatre accords : la contrainte libère l’imagination.</li>
<li><b>Une « fausse note » se rattrape</b> : résous-la d’un demi-ton ou d’un ton vers une note de l’accord, et elle devient une note de passage.</li>
<li><b>Des phrases courtes</b> : quatre mesures, une respiration, quatre mesures.</li>
</ol>

${W.exo('Exercice 1 — Cinq notes', `<p>Lance l’accompagnement ci-dessous (fa mineur, i – iv – V7 – i). À la main droite, utilise seulement <b>fa, sol, la♭, si♭, do</b> (fa3 à do4), en noires et en blanches. Commence et finis sur fa. Pendant l’accord de V7 (do – mi – sol – si♭), privilégie sol et si♭.</p>`)}
${W.exo('Exercice 2 — Un motif', `<p>Prends le motif <b>do – fa – mi♭ – ré♭</b> (le début du nocturne). Joue-le tel quel, puis un ton plus bas, puis renversé (do – sol – la♭ – si♭), puis avec un autre rythme. Enchaîne ces versions sur l’accompagnement.</p>`)}
${W.improv({ preset: 'n1-nocturne', presets: ['n1-nocturne', 'n1-nocturne8'] })}
${W.links([W.informance('/content/pages/5-anyone-can-improvise', 'Anyone Can Improvise!'), W.informance('/content/pages/189-how-to-improvise', 'How to Improvise')], 'Pour aller plus loin')}
`,
  },

  {
    id: 'n1-im2', minutes: 20,
    title: 'L’accompagnement du nocturne',
    summary: 'Trois formules de main gauche, sur une grille de quatre accords en fa mineur.',
    goals: ['Jouer trois formules d’accompagnement.', 'Enchaîner i – VI – iv – V7 – i dans chaque formule.', 'Placer la pédale sur chaque changement d’harmonie.'],
    body: W => `
<p>La main gauche du nocturne porte l’harmonie et le mouvement. Avant d’improviser une mélodie, il faut qu’elle soit automatique. Voici trois formules, sur la grille <b>i – VI – iv – V7 – i</b> en fa mineur (fa mineur, ré♭ majeur, si♭ mineur, do 7, fa mineur).</p>

<h2>1. Basse et accord</h2>
<p>Celle de l’op. 55 : basse au 1er et au 3e temps (la fondamentale, puis la quinte en dessous ou au-dessus), accord léger au 2e et au 4e. Une pédale par accord.</p>
${W.score({ abc: ACC_A, title: 'Basse et accord', bpm: 60, pedal: PEDAL5, pedalEnd: 20, hands: false })}

<h2>2. L’arpège élargi</h2>
<p>Celle de l’op. 9 n° 2, de l’op. 72 n° 1, de la Romance de Liszt : une basse grave, puis la quinte et la dixième, en arpège qui monte et redescend. La main s’ouvre sur plus d’une octave ; le poignet et le coude accompagnent le déplacement. La pédale tient la basse.</p>
${W.score({ abc: ACC_B, title: 'Arpège élargi (triolets)', bpm: 50, pedal: PEDAL5, pedalEnd: 20, hands: false })}

<h2>3. Les accords tenus</h2>
<p>La plus simple : un accord par mesure, en position large. Idéale pour se concentrer sur la mélodie.</p>
${W.score({ abc: ACC_C, title: 'Accords tenus', bpm: 60, hands: false })}

${W.exo('Exercice', '<ol><li>Chaque formule, main gauche seule, jusqu’à pouvoir la jouer sans regarder.</li><li>Puis en boucle, en fredonnant une mélodie par-dessus.</li><li>Enfin, mains ensemble : la main droite tient une note de l’accord par mesure (fa, fa, fa, mi, fa par exemple).</li></ol>')}
${W.tip('L’accompagnateur', '<p>Dans l’outil ci-dessous, choisis la formule de main gauche (« basse + accord », « arpège élargi », « accords tenus ») : tu peux écouter la grille, puis improviser à la main droite pendant que l’appli joue la main gauche.</p>')}
${W.improv({ preset: 'n1-arpege', presets: ['n1-arpege', 'n1-nocturne8'] })}
`,
  },

  {
    id: 'n1-im3', minutes: 20,
    title: 'La mélodie : notes de l’accord, puis ornements',
    summary: 'Construire une mélodie en quatre étapes : squelette, passages, broderies, appoggiatures.',
    goals: ['Construire un squelette sur les notes de l’accord.', 'Ajouter notes de passage et broderies.', 'Utiliser l’appoggiature, signature du style chopinien.'],
    body: W => `
<p>Une mélodie improvisée tient debout si ses <b>temps forts</b> reposent sur l’harmonie. Les notes étrangères (vues en théorie) viennent ensuite l’animer. Voici la même grille, i – VI – iv – V7 – i, en quatre étapes.</p>
${W.score({ abc: STEP1, title: 'Étape 1 — le squelette', bpm: 60, pedal: PEDAL5, pedalEnd: 20, caption: 'Une note de l’accord par mesure, en mouvement conjoint quand c’est possible : la♭, la♭, fa, mi♮, fa. Le mi♮ (sensible) monte vers fa.' })}
${W.score({ abc: STEP2, title: 'Étape 2 — notes de l’accord aux temps 1 et 3, passages entre', bpm: 60, pedal: PEDAL5, pedalEnd: 20 })}
${W.score({ abc: STEP3, title: 'Étape 3 — broderies et croches de passage', bpm: 60, pedal: PEDAL5, pedalEnd: 20 })}
${W.score({ abc: STEP4, title: 'Étape 4 — appoggiatures', bpm: 56, pedal: PEDAL5, pedalEnd: 20, caption: 'Chaque mesure commence par une appoggiature (si♭, mi♭, do, la♭) qui descend se résoudre sur une note de l’accord. Le si♮ de la mesure 1 est une broderie chromatique, comme dans le nocturne.' })}
${W.exo('Exercice', `<ol><li>Joue l’étape 1 avec l’accompagnateur, puis invente ton propre squelette.</li><li>Garde ton squelette et habille-le : étape 2, puis 3.</li><li>Ajoute une ou deux appoggiatures par phrase, pas plus : ce sont des moments forts.</li></ol>`)}
${W.improv({ preset: 'n1-nocturne8', presets: ['n1-nocturne8', 'n1-nocturne'] })}
${W.tip('Le retour de l’accompagnateur', '<p>Les notes que tu joues s’allument : vert pour une note de l’accord, bleu pour une note de la gamme, orange pour une note chromatique. À l’arrêt, tu vois la part de temps forts posés sur une note de l’accord. Vise au moins 70 %.</p>')}
`,
  },

  {
    id: 'n1-im4', minutes: 20,
    title: 'Question–réponse : construire huit mesures',
    summary: 'La période classique : une phrase qui interroge, une phrase qui répond.',
    goals: ['Construire un antécédent qui finit sur la dominante.', 'Construire un conséquent qui reprend le motif et conclut.', 'Improviser huit mesures sans s’arrêter.'],
    body: W => `
<p>La forme la plus naturelle de huit mesures est la <b>période</b> : un <b>antécédent</b> de quatre mesures qui s’arrête sur la dominante (demi-cadence, une question), puis un <b>conséquent</b> qui commence comme l’antécédent et conclut sur la tonique (cadence parfaite, la réponse).</p>
${W.score({ abc: PERIOD, title: 'Une période en fa mineur', bpm: 60, pedal: [0, 4, 8, 12, 16, 20, 24, 28], pedalEnd: 32, caption: 'Grille : i – iv – i – V | i – iv – V7 – i. Les mesures 5-6 reprennent les mesures 1-2, la fin change.' })}
<h2>Les ingrédients</h2>
<ul>
<li><b>Un motif</b> clair dans la mesure 1, repris à la mesure 5.</li>
<li><b>Une demi-cadence</b> à la mesure 4 : une note longue de l’accord de V (sol, mi♮ ou do).</li>
<li><b>Une cadence parfaite</b> à la mesure 8 : la sensible mi♮ ou le 2e degré sol mènent à fa.</li>
<li><b>Un sommet</b>, souvent dans le conséquent (mesure 6 ici, sur fa).</li>
</ul>
${W.exo('Exercice en quatre temps', `<ol>
<li>Joue l’exemple tel quel.</li>
<li>Garde les mesures 1-2 et 5-6, improvise les mesures 3-4 et 7-8.</li>
<li>Improvise tout, en gardant un motif à la mesure 1 et à la mesure 5.</li>
<li>Avec l’accompagnateur « Question–réponse » (main gauche jouée pour toi), puis en jouant toi-même la main gauche.</li>
</ol>`)}
${W.improv({ preset: 'n1-qr', presets: ['n1-qr', 'n1-nocturne8'] })}
${W.checklist({ id: 'n1-im4-check', title: 'Je vérifie', items: ['Je ne m’arrête pas, même après une erreur.', 'On entend une question (mesure 4) et une réponse (mesure 8).', 'Le motif de la mesure 1 revient à la mesure 5.', 'Les temps forts reposent sur les notes de l’accord.'] })}
`,
  },
];
