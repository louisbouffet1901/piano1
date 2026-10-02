// Niveau 2 — Théorie
import { OP15 } from '../excerpts.js';

const SEVENTHS = `X:1
M:4/4
L:1/4
K:C
"^7e de dominante"[CEG_B]4 | "^7e majeure"[CEGB]4 | "^7e mineure"[C_EG_B]4 | "^7e demi-diminuée"[C_E_G_B]4 | "^7e diminuée"[C_E_G__B]4 |]`;

const V7_INV = `X:1
M:4/4
L:1/4
K:Fmin
"^7 (do)"[C=EGB]4 | "^6/5 (mi)"[=EGBc]4 | "^4/3 (sol)"[GBc=e]4 | "^4/2 (si♭)"[Bc=eg]4 |]`;

const V7_RES = `X:1
M:4/4
L:1/4
K:Fmin
%%score {RH | LH}
V:RH clef=treble
V:LH clef=bass
[V:RH] "^V7"[=EBc]2 "^i"[FAc]2 |]
[V:LH] C,2 F,,2 |]`;

const SECDOM = `X:1
M:4/4
L:1/4
K:F
%%score {RH | LH}
V:RH clef=treble
V:LH clef=bass
[V:RH] "^I"[FAc]2 "^V7/vi"[GA^c]2 | "^vi"[FAd]2 "^V7/V"[F=Bd]2 | "^V7"[E_Bc]2 "^I"[FAc]2 |]
[V:LH] F,2 A,,2 | D,2 G,,2 | C,2 F,,2 |]`;

const MODUL = `X:1
M:4/4
L:1/4
K:C
%%score {RH | LH}
V:RH clef=treble
V:LH clef=bass
[V:RH] "^do majeur : I"[Gce]4 | "^IV"[Acf]4 | "^vi"[Ace]4 | [Ac^f]4 | [GBg]4 |]
[V:LH] C,4 | F,4 | "_= sol majeur : ii"A,,4 | "_V7"D,4 | "_I"G,,4 |]`;

const SEQUENCE = `X:1
M:4/4
L:1/4
K:Am
%%score {RH | LH}
V:RH clef=treble
V:LH clef=bass
[V:RH] "^i"[Ace]2 "^iv"[Adf]2 | "^VII"[GBd]2 "^III"[Gce]2 | "^VI"[FAc]2 "^ii°"[FBd]2 | "^V7"[E^Gd]2 "^i"[EAc]2 |]
[V:LH] "_modèle"A,,2 D,2 | "_un degré plus bas"G,,2 C,2 | "_un degré plus bas"F,,2 B,,2 | "_cadence"E,,2 A,,2 |]`;

const NEAPOLITAN = `X:1
M:4/4
L:1/4
K:Fmin
%%score {RH | LH}
V:RH clef=treble
V:LH clef=bass
[V:RH] "^i"[FAc]4 | "^N6"[_GBd]4 | "^6/4 de cadence"[FAc]4 | "^V"[=EGc]4 | "^i"[FAc]4 |]
[V:LH] F,,4 | B,,4 | C,4 | C,4 | F,,4 |]`;

const AUG6 = `X:1
M:4/4
L:1/4
K:Fmin
%%score {RH | LH}
V:RH clef=treble
V:LH clef=bass
[V:RH] "^i"[FAc]4 | "^6te augm."[FG=B]4 | "^V"[=EGc]4 | "^i"[FAc]4 |]
[V:LH] F,,4 | D,,4 | C,,4 | F,,4 |]`;

export default [
  {
    id: 'n2-th1', minutes: 20,
    title: 'Les accords de septième',
    summary: 'Cinq accords de quatre sons, et la septième de dominante, moteur de l’harmonie tonale.',
    goals: ['Construire les cinq accords de septième.', 'Savoir où ils se trouvent dans une tonalité.', 'Reconnaître et résoudre la septième de dominante et ses renversements.'],
    body: W => `
<p>Ajoute une tierce au-dessus d’un accord de trois sons : tu obtiens un accord de <b>septième</b>, nommé d’après l’intervalle entre sa fondamentale et sa note la plus haute. Selon l’accord de départ et la septième ajoutée, il en existe cinq types courants.</p>
${W.score({ abc: SEVENTHS, title: 'Les cinq accords de septième, sur do', bpm: 60, hands: false, practice: false })}
<table>
<thead><tr><th>Accord</th><th>Construction</th><th>Sur do</th><th>Où le trouver</th></tr></thead>
<tbody>
<tr><td>7e de dominante</td><td>majeur + 7e mineure</td><td>do – mi – sol – si♭</td><td>sur le 5e degré (V7), en majeur comme en mineur</td></tr>
<tr><td>7e majeure</td><td>majeur + 7e majeure</td><td>do – mi – sol – si</td><td>I et IV en majeur ; VI en mineur</td></tr>
<tr><td>7e mineure</td><td>mineur + 7e mineure</td><td>do – mi♭ – sol – si♭</td><td>ii, iii et vi en majeur ; iv en mineur</td></tr>
<tr><td>7e demi-diminuée</td><td>diminué + 7e mineure</td><td>do – mi♭ – sol♭ – si♭</td><td>vii en majeur ; ii en mineur (iiø7)</td></tr>
<tr><td>7e diminuée</td><td>diminué + 7e diminuée</td><td>do – mi♭ – sol♭ – si𝄫 (= la)</td><td>vii en mineur harmonique (vii°7)</td></tr>
</tbody></table>
${W.kbd({ from: 60, to: 72, title: 'Do 7 (septième de dominante)', marks: [60, 64, 67, 70].map(m => ({ m })), names: 'marks', flats: true, play: ['chord', 'arp'], caption: 'Le triton mi – si♭, au cœur de l’accord, lui donne son besoin de se résoudre.' })}

<h2>La septième de dominante et ses renversements</h2>
${W.score({ abc: V7_INV, title: 'Do 7 (V7 de fa mineur) : quatre positions', bpm: 60, hands: false, practice: false, caption: 'La note de basse est entre parenthèses.' })}
<table>
<thead><tr><th>Position</th><th>Basse</th><th>Chiffrage</th><th>Nom français traditionnel</th></tr></thead>
<tbody>
<tr><td>État fondamental</td><td>fondamentale (do)</td><td>7</td><td>septième de dominante</td></tr>
<tr><td>1er renversement</td><td>tierce (mi)</td><td>6/5</td><td>quinte diminuée et sixte</td></tr>
<tr><td>2e renversement</td><td>quinte (sol)</td><td>4/3</td><td>sixte sensible</td></tr>
<tr><td>3e renversement</td><td>septième (si♭)</td><td>4/2</td><td>triton</td></tr>
</tbody></table>

<h2>La résolution</h2>
<p>Deux notes ont une direction obligée : la <b>sensible</b> (la tierce de l’accord, mi♮ en fa mineur) <b>monte</b> vers la tonique ; la <b>septième</b> (si♭) <b>descend</b> d’un degré. Le triton mi – si♭ se resserre ainsi sur la tierce fa – la♭.</p>
${W.score({ abc: V7_RES, title: 'V7 → i en fa mineur', bpm: 50, caption: 'Mi♮ monte vers fa, si♭ descend vers la♭, do reste en place ; à la basse, do va à fa.' })}

<h2>La septième diminuée</h2>
<p>Elle est faite de trois tierces mineures superposées : elle partage l’octave en quatre parts égales. Conséquence : il n’en existe que <b>trois</b> différentes, et chacune peut se résoudre vers plusieurs tonalités selon la façon dont on l’écrit. Chopin et Liszt s’en servent pour moduler en un instant, ou pour créer un moment de suspense.</p>

<h2>Dans tes pièces</h2>
<ul>
<li><b>Op. 55 n° 1, mesure 2</b> : do 7 avec mi♮ à la basse (V6/5), qui se résout sur fa mineur.</li>
<li><b>Op. 15 n° 1, mesure 5</b> : sol – si♭ – ré♭ – fa, une septième demi-diminuée (iiø7) ; <b>mesure 6</b> : si – ré – fa – la, une autre.</li>
</ul>
${W.quiz({ kind: 'chords', set: ['7', 'maj7', 'm7', 'hdim7', 'dim7'], title: 'Accords de septième à l’oreille', count: 10, stat: 'ch-n2' })}
${W.links([W.informance('/content/pages/20-a-crash-course-in-music-theory', 'A Crash Course in Music Theory'), W.informance('/content/pages/206-harmony-history-style', 'Harmony, History & Style')], 'Pour aller plus loin')}
`,
  },

  {
    id: 'n2-th2', minutes: 20,
    title: 'Les dominantes secondaires',
    summary: 'Chaque accord peut avoir sa propre dominante : une tonicisation passagère, qui colore sans changer de tonalité.',
    goals: ['Construire la dominante d’un degré quelconque.', 'Repérer une dominante secondaire grâce à son altération.', 'Analyser les mesures 4 à 8 de l’op. 15 n° 1.'],
    body: W => `
<p>Un accord majeur ou mineur peut être précédé de <b>sa propre dominante</b>, comme s’il était une tonique le temps d’un instant. On parle de <b>dominante secondaire</b>, notée V/x ou V7/x (« dominante de x »). La tonalité ne change pas : l’accord visé est simplement mis en valeur.</p>

<h2>La construire</h2>
<ol>
<li>Choisis l’accord visé, par exemple vi en fa majeur (ré mineur).</li>
<li>Construis l’accord de 7e de dominante sur la note située une quinte au-dessus de sa fondamentale : la – do♯ – mi – sol.</li>
<li>Le do♯ est la sensible de ré : c’est lui qui crée l’attraction.</li>
</ol>
<table>
<thead><tr><th>En fa majeur</th><th>Accord visé</th><th>Sa dominante</th><th>Altération caractéristique</th></tr></thead>
<tbody>
<tr><td>V7/ii</td><td>sol mineur</td><td>ré – fa♯ – la – do</td><td>fa♯</td></tr>
<tr><td>V7/iii</td><td>la mineur</td><td>mi – sol♯ – si♮ – ré</td><td>sol♯ (et si♮)</td></tr>
<tr><td>V7/IV</td><td>si♭ majeur</td><td>fa – la – do – mi♭</td><td>mi♭</td></tr>
<tr><td>V7/V</td><td>do majeur</td><td>sol – si♮ – ré – fa</td><td>si♮</td></tr>
<tr><td>V7/vi</td><td>ré mineur</td><td>la – do♯ – mi – sol</td><td>do♯</td></tr>
</tbody></table>

<h2>Une chaîne de dominantes</h2>
${W.score({ abc: SECDOM, title: 'I – V7/vi – vi – V7/V – V7 – I en fa majeur', bpm: 60, caption: 'À la basse, la – ré – sol – do – fa : une chaîne de quintes descendantes. La 7, sol 7 et do 7 sont chacun la dominante de l’accord suivant. Aux voix supérieures, tout se fait par degrés conjoints ou notes communes.' })}

<h2>La repérer</h2>
<p>Une altération accidentelle qui crée une <b>sensible</b> (une note à un demi-ton sous la fondamentale de l’accord suivant) signale presque toujours une dominante secondaire. Un bémol accidentel, lui, signale souvent la septième d’une dominante secondaire (mi♭ dans V7/IV) ou un emprunt au mode mineur.</p>
${W.exo('Analyse : op. 15 n° 1, mesures 4 à 8', `<p>Trouve les altérations accidentelles et l’accord qu’elles annoncent, puis vérifie avec l’<a href="#/lecon/n2-i4">analyse complète</a>.</p>
<ul>
<li>Mesure 4 : do♯ → <b>V7/vi</b>, résolu sur ré mineur au temps suivant.</li>
<li>Mesure 5 : si♮ → <b>V7/V</b> ; puis ré♭ → emprunt au mode mineur.</li>
<li>Mesure 6 : si♮ à la basse, mais ce n’est pas une sensible : si – ré – fa – la est le <b>iiø7 de la mineur</b>, qui prépare la mesure suivante. Toute altération n’annonce pas une dominante : vérifie toujours vers quoi elle va.</li>
<li>Mesures 7 et 8 : sol♯ → <b>V7/iii</b> et <b>V/iii</b>, autour de la mineur.</li>
</ul>`)}
${W.score({ abc: OP15.e1, title: 'Op. 15 n° 1, mesures 1 à 8', bpm: 66, startBpm: 56 })}
${W.tip('À l’oreille', '<p>Une dominante secondaire sonne comme une petite surprise lumineuse (une note qui monte d’un demi-ton), aussitôt expliquée par l’accord suivant. Joue la chaîne de dominantes ci-dessus, puis la même suite sans altérations (I – iii – vi – ii – V – I) : la différence est frappante.</p>')}
`,
  },

  {
    id: 'n2-th3', minutes: 20,
    title: 'Moduler',
    summary: 'Changer de tonalité : par un accord pivot, par une altération, par un changement de mode.',
    goals: ['Distinguer tonicisation passagère et modulation.', 'Connaître les tons voisins.', 'Reconnaître les principales façons de moduler.'],
    body: W => `
<p>Une dominante secondaire éclaire un accord un instant ; une <b>modulation</b> installe durablement une nouvelle tonique, confirmée par une cadence. Toutes les pièces un peu longues modulent : c’est ce qui crée le sentiment de voyage et de retour.</p>

<h2>Les tons voisins</h2>
<p>Une tonalité a cinq <b>tons voisins</b> : son relatif, et les tonalités situées une quinte au-dessus et au-dessous avec leurs relatifs. Ils diffèrent d’une altération au plus, et l’on y module le plus naturellement.</p>
<table>
<thead><tr><th>Depuis</th><th>Relatif</th><th>Dominante</th><th>Sous-dominante</th></tr></thead>
<tbody>
<tr><td>fa majeur</td><td>ré mineur</td><td>do majeur (et la mineur)</td><td>si♭ majeur (et sol mineur)</td></tr>
<tr><td>fa mineur</td><td>la♭ majeur</td><td>do mineur (et mi♭ majeur)</td><td>si♭ mineur (et ré♭ majeur)</td></tr>
</tbody></table>
${W.cof({ start: 11, minor: false })}

<h2>1. Par un accord pivot</h2>
<p>Un accord appartient aux deux tonalités : on l’entend dans l’ancienne, on le comprend après coup dans la nouvelle. Ici, la mineur est vi en do majeur et ii en sol majeur ; la dominante de sol (ré 7) confirme ensuite le changement.</p>
${W.score({ abc: MODUL, title: 'De do majeur à sol majeur par un accord pivot', bpm: 60, caption: 'Le la mineur de la mesure 3 est le pivot : vi en do majeur, ii en sol majeur. Le fa♯ de ré 7 fait basculer.' })}

<h2>2. Par une altération</h2>
<p>Une note est altérée pour appartenir à la nouvelle tonalité : de do majeur, fa devient fa♯ (la sensible de sol) pour aller vers sol ; si devient si♭ (le 4e degré de fa, qui efface la sensible de do) pour aller vers fa. La dominante de la nouvelle tonalité vient ensuite confirmer le changement.</p>

<h2>3. Par changement de mode</h2>
<p>On garde la même tonique et on change de mode : c’est la <b>tonalité homonyme</b>. C’est exactement ce que fait l’op. 15 n° 1 : fa majeur, silence, fa mineur (mesure 25), sans aucune préparation. Dans Clair de lune, l’<i>En animant</i> (mesure 37) passe de ré♭ majeur à do♯ mineur : l’homonyme de ré♭ majeur, mais noté avec quatre dièses plutôt qu’avec huit bémols (écriture <b>enharmonique</b>).</p>

<h2>4. Les autres moyens</h2>
<ul>
<li><b>La modulation directe</b> : une nouvelle tonalité attaquée sans transition, souvent après une cadence ou un silence.</li>
<li><b>La modulation enharmonique</b> : un accord réécrit autrement change de sens, en particulier la septième diminuée (voir <a href="#/lecon/n2-th1">les accords de septième</a>) et la sixte augmentée (voir <a href="#/lecon/n2-th5">la sixte augmentée</a>). C’est le moyen favori des romantiques pour atteindre des tonalités lointaines.</li>
</ul>
${W.exo('Dans tes pièces', `<ul>
<li>Op. 55 n° 1 : fa mineur, puis fa majeur dans la coda (homonyme).</li>
<li>Op. 15 n° 1 : fa majeur – fa mineur – fa majeur (homonymes).</li>
<li>Clair de lune : ré♭ majeur – do♯ mineur (mesure 37) – ré♭ majeur (<i>Calmato</i>, mesure 43).</li>
</ul>`)}
`,
  },

  {
    id: 'n2-th4', minutes: 15,
    title: 'Les marches harmoniques',
    summary: 'Un modèle répété à des hauteurs successives : le moteur de nombreux développements.',
    goals: ['Reconnaître une marche harmonique et son modèle.', 'Jouer la marche par quintes descendantes.', 'Repérer une marche mélodique dans une partition.'],
    body: W => `
<p>Une <b>marche</b> (ou séquence) est un modèle — un motif mélodique et son harmonie — répété plusieurs fois à des hauteurs différentes, le plus souvent par degrés. L’oreille, qui a compris le modèle, anticipe la suite : c’est un formidable moteur, en composition comme en improvisation.</p>

<h2>La marche par quintes descendantes</h2>
<p>La plus fréquente : les fondamentales descendent de quinte en quinte (ou montent de quarte), en passant par tous les degrés de la tonalité. En la mineur : i – iv – VII – III – VI – ii° – V – i.</p>
${W.score({ abc: SEQUENCE, title: 'Marche par quintes en la mineur', bpm: 60, caption: 'Le modèle (deux accords) est repris un degré plus bas, puis encore un degré plus bas, avant la cadence. La basse alterne quarte montante et quinte descendante.' })}
<ul>
<li>Le modèle dure ici deux accords ; chaque reprise descend d’un degré.</li>
<li>À l’intérieur du modèle, les voix supérieures gardent les notes communes et se déplacent par degrés ; d’un modèle au suivant, tout le bloc descend d’un degré.</li>
<li>On sort de la marche par une cadence (ii° – V7 – i).</li>
</ul>

<h2>Les autres marches</h2>
<ul>
<li><b>Marche par degrés ascendants</b> : un modèle répété un degré plus haut, qui fait monter la tension (souvent dans les crescendos).</li>
<li><b>Marche d’accords de sixte</b> : des accords au premier renversement qui descendent en parallèle, très fréquents dans les traits.</li>
<li><b>Marche mélodique</b> : un motif mélodique répété à différentes hauteurs, même si l’harmonie varie un peu. Dans le Con fuoco de l’op. 15 n° 1 (mesures 45 à 47), un même motif — longue, brève, longue — descend par degrés.</li>
</ul>
${W.exo('Exercice', `<ol>
<li>Joue la marche en la mineur jusqu’à la savoir par cœur.</li>
<li>Transpose-la en mi mineur, puis en ré mineur.</li>
<li>Improvise une mélodie dessus (voir <a href="#/lecon/n2-im2">l’improvisation sur une marche</a>).</li>
</ol>`)}
`,
  },

  {
    id: 'n2-th5', minutes: 20,
    title: 'La sixte napolitaine et la sixte augmentée',
    summary: 'Deux accords de préparation de la dominante, très chargés en couleur, chers aux romantiques.',
    goals: ['Construire la sixte napolitaine et la conduire vers la dominante.', 'Construire les trois sixtes augmentées.', 'Les entendre dans une cadence.'],
    body: W => `
<h2>La sixte napolitaine</h2>
<p>C’est un accord majeur construit sur le <b>2e degré abaissé</b> (♭II), le plus souvent au premier renversement : la tierce est à la basse, d’où le nom de « sixte ». En fa mineur : sol♭ – si♭ – ré♭, avec si♭ à la basse. Elle remplace la sous-dominante pour préparer la dominante, avec une couleur sombre et dramatique.</p>
${W.score({ abc: NEAPOLITAN, title: 'i – N6 – V – i en fa mineur', bpm: 56, caption: 'Le sol♭ descend vers fa (dans l’accord de quarte et sixte de cadence), puis vers mi♮, la sensible. La basse si♭ monte vers do.' })}
<ul>
<li>Exemple célèbre : la mesure 3 du premier mouvement de la Sonate « Clair de lune » de Beethoven (ré majeur en do♯ mineur).</li>
<li>Elle se trouve surtout en mineur, mais aussi en majeur, empruntée au mineur.</li>
</ul>

<h2>La sixte augmentée</h2>
<p>Sa basse est le <b>6e degré du mode mineur</b> (ré♭ en fa mineur ; en majeur, un 6e degré abaissé) ; au-dessus, le <b>4e degré haussé</b> (si♮) forme avec elle une sixte augmentée. Les deux notes s’écartent d’un demi-ton chacune vers l’octave de la dominante (do – do) : c’est le geste le plus fort qui soit pour l’amener.</p>
${W.score({ abc: AUG6, title: 'i – sixte augmentée (française) – V – i en fa mineur', bpm: 56, caption: 'Ré♭ (basse) descend vers do, si♮ monte vers do : la sixte augmentée s’ouvre sur l’octave.' })}
<table>
<thead><tr><th>Type</th><th>En fa mineur</th><th>Particularité</th></tr></thead>
<tbody>
<tr><td>Italienne</td><td>ré♭ – fa – si♮</td><td>trois sons</td></tr>
<tr><td>Française</td><td>ré♭ – fa – sol – si♮</td><td>avec le 2e degré : une couleur plus acide</td></tr>
<tr><td>Allemande</td><td>ré♭ – fa – la♭ – si♮</td><td>sonne exactement comme ré♭ 7 : un pivot enharmonique pour moduler</td></tr>
</tbody></table>
${W.tip('À l’oreille', '<p>La sixte napolitaine sonne comme un brusque assombrissement juste avant la cadence ; la sixte augmentée, comme un étau qui s’ouvre sur la dominante. Joue les deux exemples plusieurs fois, puis improvise avec la grille ci-dessous.</p>')}
${W.improv({ preset: 'n2-napolitaine', presets: ['n2-napolitaine'] })}
`,
  },

  {
    id: 'n2-th6', minutes: 20,
    title: 'Les formes',
    summary: 'Du plan d’une phrase à celui d’une sonate : savoir où l’on est pour savoir où l’on va.',
    goals: ['Reconnaître les formes binaire, ternaire, rondo, sonate.', 'Distinguer période et phrase en trois temps.', 'Faire le plan de ses pièces et en tirer une stratégie d’interprétation.'],
    body: W => `
<h2>À l’échelle de la phrase</h2>
<ul>
<li><b>La période</b> (vue au niveau 1) : un antécédent qui finit en suspens, un conséquent qui conclut.</li>
<li><b>La phrase en trois temps</b> : une idée de deux mesures, répétée ou variée (présentation), puis une suite qui se fragmente et accélère (continuation), et enfin une cadence. Souvent 2 + 2 + 4 mesures.</li>
</ul>

<h2>Les grandes formes</h2>
<h3>Ternaire (ABA)</h3>
${W.diagram('form', { total: 48, noBars: true, sections: [
  { label: 'A', kind: 'A', from: 1, to: 16, key: 'tonalité principale', note: 'thème' },
  { label: 'B', kind: 'B', from: 17, to: 32, key: 'autre tonalité ou autre mode', note: 'contraste' },
  { label: 'A′', kind: 'A', from: 33, to: 48, key: 'tonalité principale', note: 'retour, souvent varié' },
] }, 'La forme de la plupart des nocturnes, des valses, des mazurkas… et de tes pièces de ces deux niveaux.')}
<h3>Rondo (ABACA)</h3>
${W.diagram('form', { total: 40, noBars: true, sections: [
  { label: 'A', kind: 'A', from: 1, to: 8, note: 'refrain' },
  { label: 'B', kind: 'B', from: 9, to: 16, note: 'couplet' },
  { label: 'A', kind: 'A', from: 17, to: 24, note: 'refrain' },
  { label: 'C', kind: 'C', from: 25, to: 32, note: 'couplet' },
  { label: 'A', kind: 'A', from: 33, to: 40, note: 'refrain' },
] }, 'Un refrain qui revient entre des couplets différents : fréquent dans les finales de sonates classiques.')}
<h3>Forme sonate</h3>
${W.diagram('form', { total: 112, noBars: true, sections: [
  { label: 'T1', kind: 'A', from: 1, to: 14, key: 'I', note: 'exposition' },
  { label: 'trans.', kind: 'C', from: 15, to: 20 },
  { label: 'T2', kind: 'B', from: 21, to: 40, key: 'V ou relatif' },
  { label: 'Développement', kind: 'D', from: 41, to: 64, key: 'tonalités éloignées', note: 'fragments, marches' },
  { label: 'T1', kind: 'A', from: 65, to: 78, key: 'I', note: 'réexposition' },
  { label: 'trans.', kind: 'C', from: 79, to: 84 },
  { label: 'T2', kind: 'B', from: 85, to: 104, key: 'I' },
  { label: 'Coda', kind: 'coda', from: 105, to: 112 },
] }, 'Exposition : deux thèmes dans deux tonalités. Développement : le conflit. Réexposition : les deux thèmes dans la tonalité principale.')}
<ul>
<li><b>Binaire (AB)</b> : deux parties, chacune reprise ; la première module, la seconde revient. La forme des danses baroques.</li>
<li><b>Thème et variations</b> : un thème, puis des transformations successives (ornements, mode, caractère).</li>
<li><b>Ballade</b> : chez Chopin, une forme libre et narrative, qui emprunte à la sonate ses deux thèmes contrastés et ses retours transformés. Ce sera l’objet du niveau 6.</li>
</ul>

<h2>Tes pièces</h2>
<table>
<thead><tr><th>Pièce</th><th>Forme</th><th>Repères (mesures)</th></tr></thead>
<tbody>
<tr><td>Nocturne op. 55 n° 1</td><td>A – B – A′ abrégé – coda</td><td>A 1-48, Più mosso 48-72, retour 73-76, coda 77-101</td></tr>
<tr><td>Nocturne op. 15 n° 1</td><td>A – B – A′</td><td>A 1-24, B 25-48, A′ 49-74</td></tr>
<tr><td>Clair de lune</td><td>A – B – A′ – coda</td><td>A 1-26, B 27-50, A′ 51-65, coda 66-72</td></tr>
</tbody></table>

<h2>Pourquoi c’est utile au piano</h2>
<ul>
<li><b>Doser l’énergie</b> : un seul vrai sommet par section, le plus fort dans la section la plus intense.</li>
<li><b>Varier les retours</b> : un thème qui revient ne se joue pas deux fois pareil ; le chemin parcouru l’a changé.</li>
<li><b>Mémoriser</b> : on retient beaucoup mieux une pièce dont on connaît le plan, et l’on sait repartir après un trou.</li>
</ul>
${W.checklist({ id: 'n2-th6-check', title: 'À faire', items: ['J’ai noté le plan de l’op. 15 n° 1 sur ma partition (A, B, A′ et les phrases).', 'J’ai noté le plan de Clair de lune, avec les indications de tempo de chaque section.', 'Pour chaque section, j’ai choisi où se trouve le sommet.'] })}
`,
  },
];
