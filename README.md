### AppReact.JS_DND

Gestionnaire Donjons & Dragons (React + Vite) pour explorer des personnages et groupes. L'API doit tourner sur http://localhost:8000.

#### Prerequis
- Node.js 18+ (npm inclus)
- API backend accessible sur http://localhost:8000

#### Installation
1) Cloner le projet puis placer-vous dans le dossier
2) Installer les dependances du frontend: `npm install`

#### Lancement
- Dev (avec HMR): `npm run dev`
- Build de production: `npm run build`
- Preview du build: `npm run preview`
- Lint: `npm run lint`

#### Fonctionnalites
- Liste des personnages avec recherche par nom, race et classe
- Tri croissant/decroissant des personnages
- Fiche detaillee par personnage (statistiques, competences)
- Liste des groupes sous forme de cartes
- Filtre pour n'afficher que les groupes avec des places disponibles
- Fiche detaillee de groupe avec membres

#### Conseils
- En cas d'alertes de vulnerabilite npm: `npm audit fix`
- Si le frontend ne trouve pas les donnees, verifier que l'API repond sur le port 8000