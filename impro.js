// Niveau 2 — Improvisation

const LH8 = `[V:LH] "_i".F,,2 .[A,CF]2 .C,2 .[A,CF]2 | "_iv".B,,2 .[B,DF]2 .F,,2 .[B,DF]2 | "_V7".C,,2 .[B,=EG]2 .G,,2 .[B,=EG]2 | "_i".F,,2 .[A,CF]2 F,,4 |]`;
const LH16 = `[V:LH] "_i".F,,4 .[A,CF]4 .C,4 .[A,CF]4 | "_iv".B,,4 .[B,DF]4 .F,,4 .[B,DF]4 | "_V7".C,,4 .[B,=EG]4 .G,,4 .[B,=EG]4 | "_i".F,,4 .[A,CF]4 F,,8 |]`;
const head = (L) => `X:1
M:4/4
L:${L}
K:Fmin
%%score {RH | LH}
V:RH clef=treble
V:LH clef=bass`;

const PLAIN = `${head('1/8')}
[V:RH] "^mélodie simple"c4 f4 | f4 e2 d2 | c4 G2 =E2 | A2 G2 F4 |]
${LH8}`;

const ORNATE = `${head('1/16')}
[V:RH] "^mélodie ornée"c4 dc=Bc g4 f4 | f4 gf=ef _e4 d4 | c4 dcBc G4 =E4 | A4 (6:4:6GAGF=EG F8 |]
${LH16}`;

const MARCHE = `X:1
M:4/4
L:1/8
K:Am
%%score {RH | LH}
V:RH clef=treble
V:LH clef=bass
[V:RH] "^modèle"e3d c2e2 | f3e d2f2 | "^un degré plus bas"d3c B2d2 | e3d c2e2 | "^encore un degré plus bas"c3B A2c2 | d3c B2d2 | "^cadence"B3A ^G2B2 | A8 |]
[V:LH] "_i"A,,4 [E,A,C]4 | "_iv"D,,4 [D,F,A,]4 | "_VII"G,,4 [D,G,B,]4 | "_III"C,4 [E,G,C]4 | "_VI"F,,4 [C,F,A,]4 | "_ii°"B,,4 [D,F,B,]4 | "_V7"E,,4 [D,^G,B,]4 | "_i"A,,8 |]`;

const RETOUR = `X:1
M:4/4
L:1/8
K:Fmin
%%score {RH | LH}
V:RH clef=treble
V:LH clef=bass
[V:RH] "^la♭ majeur : I"[Ace]8 | "^fa mineur : V"[Gc=e]4 "^V7"[GB=e]4 | "^i"[FAf]8 |]
[V:LH] A,,8 | C,8 | F,,8 |]`;

const LAMENTO = `X:1
M:4/4
L:1/8
K:F
%%score {RH | LH}
V:RH clef=treble
V:LH clef=bass
[V:RH] "^F"Acfc Acfc | "^C/E"Gcec Gcec | "^F7/E♭"Acfc Acfc | "^B♭/D"Bdfd Bdfd | "^B♭m/D♭"B_dfd Bdfd | "^F/C"Acfc Acfc | "^C7"GBeB GBeB | "^F"[FAc]8 |]
[V:LH] F,8 | E,8 | _E,8 | D,8 | _D,8 | C,8 | C,8 | F,,8 |]`;

const PED4 = [0, 4, 8, 12];
const PED8 = [0, 4, 8, 12, 16, 20, 24, 28];

export default [
  {
    id: 'n2-im1', minutes: 20,
    title: 'Orner une mélodie',
    summary: 'Transformer une mélodie simple en mélodie chopinienne : broderies, appoggiatures, chromatismes, fioritures.',
    goals: ['Connaître les ornements de base du style romantique.', 'Garder le squelette de la mélodie sous les ornements.', 'Orner une mélodie en improvisant, sans perdre la pulsation.'],
    body: W => `
<p>Les ornements de Chopin sont nés de l’improvisation : quand un thème revient, il le chante autrement, comme un chanteur d’opéra qui varie sa reprise. On peut apprendre à faire de même, à partir d’une mélodie très simple.</p>
${W.score({ abc: PLAIN, title: 'La mélodie simple (i – iv – V7 – i)', bpm: 60, pedal: PED4, pedalEnd: 16 })}
${W.score({ abc: ORNATE, title: 'La même mélodie, ornée', bpm: 60, startBpm: 52, pedal: PED4, pedalEnd: 16, caption: 'Mêmes notes d’appui aux mêmes endroits (à la mesure 1, l’appoggiature sol retarde le fa d’un temps) ; seuls les espaces entre elles sont remplis. Compare les deux versions mesure par mesure.' })}

<h2>La boîte à outils</h2>
<ul>
<li><b>La broderie</b> : on quitte une note pour sa voisine et on revient (do – ré♭ – do). Doublée, elle devient un <b>groupe</b> autour de la note : ré♭ – do – si♮ – do (mesure 1).</li>
<li><b>L’appoggiature</b> : une note étrangère sur le temps, qui se résout par degré (sol → fa, mesure 1). C’est le moment expressif fort : un peu plus de poids, puis une résolution douce.</li>
<li><b>Le chromatisme</b> : une broderie ou un passage par demi-ton, même hors de la gamme (le mi♮ sous fa, mesure 2).</li>
<li><b>La fioriture</b> : un petit groupe rapide qui remplit un temps avant une note d’arrivée (le sextolet de la mesure 4).</li>
</ul>

<h2>Les règles du jeu</h2>
<ol>
<li><b>Le squelette d’abord</b> : les notes d’appui restent sur les temps forts (ou arrivent juste après, avec une appoggiature).</li>
<li><b>Ornements plus légers</b> que les notes qu’ils ornent.</li>
<li><b>La main gauche ne bouge pas</b> : c’est elle qui garde le temps pendant que la main droite se libère.</li>
<li><b>Peu, mais bien</b> : une ou deux idées par phrase. Un thème orné partout perd son chant.</li>
</ol>
${W.exo('Exercice', `<ol>
<li>Joue la mélodie simple avec l’accompagnateur ci-dessous.</li>
<li>Rejoue-la en ajoutant un seul ornement par mesure, différent à chaque fois.</li>
<li>Invente ta propre mélodie simple (des blanches et des noires), puis orne-la à la reprise : ABA′, où A′ est la version ornée.</li>
</ol>`)}
${W.improv({ preset: 'n1-nocturne', presets: ['n1-nocturne', 'n1-nocturne8'] })}
${W.links([W.informance('/content/pages/5-anyone-can-improvise', 'Anyone Can Improvise!'), W.informance('/content/pages/189-how-to-improvise', 'How to Improvise')], 'Pour aller plus loin')}
`,
  },

  {
    id: 'n2-im2', minutes: 20,
    title: 'Improviser sur une marche',
    summary: 'Un modèle de deux mesures, répété un degré plus bas : la marche improvise presque à ta place.',
    goals: ['Inventer un modèle mélodique sur deux accords.', 'Le transposer en suivant la marche harmonique.', 'Conclure par une cadence.'],
    body: W => `
<p>La marche par quintes (voir <a href="#/lecon/n2-th4">la théorie</a>) est un cadeau pour l’improvisateur : il suffit d’inventer un motif sur les deux premiers accords, puis de le recopier un degré plus bas, et encore un degré plus bas. L’oreille suit la logique et la musique avance toute seule.</p>
${W.score({ abc: MARCHE, title: 'Un modèle et ses reprises (la mineur)', bpm: 66, startBpm: 56, caption: 'Le modèle (mesures 1-2) : mi – ré – do – mi, puis fa – mi – ré – fa. Il est repris un degré plus bas (mesures 3-4), puis encore (mesures 5-6), avant la cadence.' })}
<h2>Méthode</h2>
<ol>
<li><b>Le modèle</b> : deux mesures, notes de l’accord sur les temps forts, une note de passage entre elles. Simple et reconnaissable.</li>
<li><b>Les reprises</b> : même rythme, même dessin, un degré plus bas. Ne cherche pas à varier : c’est la répétition qui fait la marche.</li>
<li><b>La sortie</b> : sur V7 – i, abandonne le modèle pour une vraie cadence (sol♯ – la).</li>
<li><b>Puis seulement, varier</b> : même modèle, autre rythme ; ou un ornement à chaque reprise.</li>
</ol>
${W.exo('Exercice', `<ol>
<li>Joue l’exemple avec l’accompagnateur (« Marche par quintes en la mineur »).</li>
<li>Invente ton propre modèle sur i – iv et transpose-le en improvisant.</li>
<li>Essaie un modèle en croches, puis un modèle avec une appoggiature sur chaque premier temps.</li>
</ol>`)}
${W.improv({ preset: 'n2-marche', presets: ['n2-marche'] })}
`,
  },

  {
    id: 'n2-im3', minutes: 25,
    title: 'Improviser une forme ABA',
    summary: 'Deux caractères, une modulation, un retour : la forme du nocturne, improvisée.',
    goals: ['Improviser deux sections de caractère opposé.', 'Moduler vers le relatif majeur et revenir.', 'Tenir une forme complète sans s’arrêter.'],
    body: W => `
<p>Tu as tous les éléments : un accompagnement de nocturne, des mélodies construites sur l’harmonie, des ornements, des marches. Il reste à les organiser en une <b>forme</b>, comme l’op. 15 n° 1 : A, un contraste B, puis le retour de A.</p>
${W.diagram('form', { total: 21, sections: [
  { label: 'A', kind: 'A', from: 1, to: 8, key: 'fa mineur', note: 'chant, basse + accord' },
  { label: 'B', kind: 'B', from: 9, to: 16, key: 'la♭ majeur', note: 'autre caractère' },
  { label: '', kind: 'C', from: 17, to: 17, note: 'V7' },
  { label: 'A', kind: 'A', from: 18, to: 21, key: 'fa mineur', note: 'retour, orné' },
] }, 'Le plan de l’accompagnateur « Forme ABA » : huit mesures en fa mineur, huit en la♭ majeur, une mesure de dominante (do 7), et quatre mesures de retour.')}

<h2>Construire le contraste</h2>
<p>Comme dans le nocturne, change plusieurs paramètres à la fois en passant à B :</p>
<ul>
<li><b>Le mode</b> : fa mineur → la♭ majeur (le relatif, même armure : aucune note nouvelle).</li>
<li><b>Le registre</b> : plus aigu (ou plus grave), une autre couleur.</li>
<li><b>Le rythme</b> : des valeurs plus courtes, des notes répétées, ou au contraire un choral en accords.</li>
<li><b>La nuance et le toucher</b> : plus clair, plus léger ou plus intense.</li>
</ul>

<h2>Le retour</h2>
<p>La mesure de transition est la dominante de fa mineur : do 7. Depuis l’accord de la♭ majeur, deux notes suffisent pour obtenir l’accord de do : la♭ descend vers sol, mi♭ monte vers mi♮, do reste en place. Puis do descend vers si♭ : voici do 7.</p>
${W.score({ abc: RETOUR, title: 'De la♭ majeur vers fa mineur', bpm: 56, pedal: [0, 4, 6, 8], pedalEnd: 12, caption: 'La♭ – do – mi♭ devient sol – do – mi♮, puis do 7, puis fa mineur. Au retour de A, reprends ton thème, mais orne-le : le voyage l’a changé.' })}
${W.improv({ preset: 'n2-aba', presets: ['n2-aba'] })}
${W.checklist({ id: 'n2-im3-check', title: 'Je vérifie', items: ['Je ne m’arrête pas, même aux changements de section.', 'B a un vrai contraste de caractère, pas seulement d’accords.', 'La mesure de do 7 prépare le retour (la sensible mi♮ monte vers fa).', 'Le retour de A rappelle le thème du début, varié ou orné.'] })}
`,
  },

  {
    id: 'n2-im4', minutes: 20,
    title: 'Un prélude sur une basse descendante',
    summary: 'La basse de lamento, des voix qui avancent par demi-tons, une figuration de prélude.',
    goals: ['Connaître la basse de lamento.', 'Conduire les voix supérieures par notes communes et degrés conjoints.', 'Improviser une figuration et une mélodie sur cette basse.'],
    body: W => `
<p>Une basse qui descend lentement, par demi-tons, de la tonique à la dominante : c’est la <b>basse de lamento</b>, une formule très répandue depuis le XVIIe siècle. On l’entend dans la lamentation de Didon de Purcell (<i>Didon et Énée</i>) ; et chez Chopin, dans le Prélude op. 28 n° 4 en mi mineur, où les accords de la main gauche glissent par demi-tons sous une mélodie presque immobile.</p>
${W.score({ abc: LAMENTO, title: 'Prélude sur la basse fa – mi – mi♭ – ré – ré♭ – do', bpm: 60, startBpm: 50, pedal: PED8, pedalEnd: 32, caption: 'Une figuration en accords brisés, comme dans les préludes de Bach. Chaque accord garde le plus de notes possible du précédent ; les autres bougent d’un degré.' })}

<h2>La conduite des voix</h2>
<ul>
<li><b>Garder les notes communes</b> : do reste en place pendant les trois premiers accords ; la et fa descendent d’un degré, puis remontent.</li>
<li><b>Bouger par degrés</b> : de fa 7 à si♭, la septième mi♭ de la basse descend vers ré ; de si♭ majeur à si♭ mineur, seul ré devient ré♭.</li>
<li><b>Laisser la basse conduire</b> : c’est elle la mélodie principale de ce prélude ; fais-la entendre, chaque nouveau demi-ton est un événement.</li>
</ul>

<h2>Improviser dessus</h2>
<ol>
<li><b>Une autre figuration</b> : arpège montant et descendant, accords répétés, basse et accord… La même harmonie, un autre caractère.</li>
<li><b>Une mélodie</b> en valeurs longues au-dessus des accords. Un squelette possible : do – do – do – si♭ – si♭ – la – sol – fa, une note par mesure. Puis orne-le (leçon 1).</li>
<li><b>Une forme</b> : joue la grille deux fois, la seconde plus intense ou plus ornée, et termine sur un long accord de fa.</li>
</ol>
${W.improv({ preset: 'n2-lamento', presets: ['n2-lamento'] })}
${W.checklist({ id: 'n2-im4-check', title: 'Je vérifie', items: ['La basse descend sans interruption, un demi-ton par mesure.', 'Les voix supérieures avancent par notes communes et degrés conjoints, sans sauts inutiles.', 'Ma mélodie repose sur les notes de l’accord aux temps forts.', 'La fin se pose clairement sur do 7 puis fa.'] })}
`,
  },
];
