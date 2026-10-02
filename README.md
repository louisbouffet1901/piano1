# Parcours piano

Application web installable (PWA) pour apprendre le piano classique sur tablette, avec un piano numérique branché en MIDI (Yamaha P-145, câble USB-C ↔ USB-B).

- **Fil rouge** : six niveaux, une pièce phare par niveau. Niveaux 1 et 2 rédigés : Nocturne op. 55 n° 1, puis Nocturne op. 15 n° 1 et Clair de lune.
- **Modules** : technique, interprétation, théorie, lecture à vue, improvisation.
- **Outils** : partitions jouables (mode attente, mode en rythme), analyseurs de jeu MIDI (régularité, legato, pédale, équilibre, voix supérieure, nuances), lecture à vue générée, oreille et théorie, accompagnateur d’improvisation, métronome.
- **Plan hebdomadaire** et **grille de validation** pour chaque niveau.

La progression est enregistrée localement dans le navigateur (Réglages → Exporter pour la sauvegarder).

## Installer sur la tablette

1. Ouvrir l’adresse du site dans Chrome.
2. Menu ⋮ → « Ajouter à l’écran d’accueil » (ou « Installer l’application »).
3. Brancher le piano, puis toucher « Connecter le piano » et autoriser l’accès MIDI.

Une fois installée, l’application fonctionne hors connexion.

## Structure

- `index.html`, `css/`, `js/` : l’application (modules JavaScript, sans étape de compilation).
- `js/content/` : le contenu pédagogique (niveaux, leçons, pièces, extraits).
- `audio/piano/` : échantillons de piano. `fonts/`, `vendor/` : polices et abcjs.
- `sw.js` : cache hors connexion, régénéré par `node tools/build-sw.mjs` après toute modification.

## Crédits et licences

- Extraits de Chopin d’après les éditions LilyPond de Knute Snortum (CC BY-SA 4.0) ; Debussy d’après le Mutopia Project (domaine public).
- Échantillons : Salamander Grand Piano, Alexander Holm (CC BY 3.0).
- Rendu des partitions : abcjs (licence MIT). Polices Inter et Literata (SIL Open Font License).
- Les liens vers l’Online Academy d’Informance et vers des enregistrements renvoient à des contenus externes, non reproduits ici.
