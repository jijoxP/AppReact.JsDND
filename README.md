<div align="center">

# 🎲 D&D Hero Manager (React)

*Une application web moderne développée avec React et Vite pour explorer et filtrer des personnages et des groupes d'aventure Donjons & Dragons.*  
*A modern web application built with React and Vite to explore and filter Dungeons & Dragons characters and adventuring parties.*

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

[🌐 Version Française](#-version-française) • [🇬🇧 English Version](#-english-version)

</div>

---

## 🇫🇷 Version Française

### 📌 À propos

**AppReact.JS_DND** est une interface frontend monopage (SPA) conçue avec **React 18** et **Vite**. Elle s'interface avec une API REST backend (telle que celle du projet *Forge de Héros*) pour offrir une navigation fluide et réactive parmi les personnages, leurs statistiques et leurs groupes d'aventure.

> ⚠️ **Note Backend** : L'application nécessite qu'une API compatible soit en cours d'exécution sur `http://localhost:8000`.

---

### ✨ Fonctionnalités clés

- 🧙‍♂️ **Exploration des Personnages** :
  - Liste interactive et dynamique des personnages.
  - Recherche et filtrage multi-critères (par nom, race et classe).
  - Tri croissant et décroissant.
  - Fiche détaillée par personnage (statistiques complets et compétences).
- 🛡️ **Gestion des Groupes (Parties)** :
  - Affichage des groupes d'aventuriers sous forme de cartes synthétiques.
  - Filtre rapide pour n'afficher que les groupes disposant de places libres.
  - Fiche détaillée de groupe listant tous les membres inscrits.

---

### 🛠️ Stack Technique

- **Framework Frontend** : React 18
- **Outillage & Bundler** : Vite (avec Hot Module Replacement / HMR)
- **Qualité de code** : ESLint
- **Gestionnaire de paquets** : npm

---

### 🚀 Installation & Lancement

#### 1. Prérequis
- [Node.js](https://nodejs.org/) (`v18` ou supérieure)
- Un serveur API backend actif sur `http://localhost:8000`

#### 2. Cloner le projet
```bash
git clone https://github.com/jijoxP/AppReact.JsDND.git
cd AppReact.JsDND
```

#### 3. Installer les dépendances
```bash
npm install
```

#### 4. Commandes disponibles
- **Mode Développement** (avec HMR) :
  ```bash
  npm run dev
  ```
- **Build de Production** :
  ```bash
  npm run build
  ```
- **Prévisualiser le build de production** :
  ```bash
  npm run preview
  ```
- **Analyse du code (Linter)** :
  ```bash
  npm run lint
  ```

---

### 💡 Dépannage & Conseils

- **Données non affichées** : Assurez-vous que l'API backend réponde correctement sur `http://localhost:8000`.
- **Alertes de vulnérabilité `npm`** : Si nécessaire, vous pouvez lancer `npm audit fix` pour mettre à jour les sous-dépendances non critiques.

---

### 👥 Auteurs
- **Jordan PASQUALINI** ([@jijoxP](https://github.com/jijoxP))
- **Lucas BRUN** ([@lucbr1](https://github.com/lucbr1))

---

<br/>

## 🇬🇧 English Version

### 📌 About

**AppReact.JS_DND** is a single-page frontend application (SPA) built using **React 18** and **Vite**. It consumes a REST API (such as the *Forge de Héros* backend) to provide a fast and responsive interface for browsing D&D characters, detailed stats, and party compositions.

> ⚠️ **Backend Requirement**: Requires an API running at `http://localhost:8000`.

---

### ✨ Key Features

- 🧙‍♂️ **Character Directory**:
  - Interactive character list.
  - Multi-criteria filtering (by name, race, and class).
  - Ascending & descending sorting options.
  - Detailed character view displaying attributes and skills.
- 🛡️ **Party Directory**:
  - Card-based layout for adventuring parties.
  - Quick filter to display only open/available parties.
  - Detailed party profile listing all member heroes.

---

### 🛠️ Tech Stack

- **Frontend Library**: React 18
- **Build Tool**: Vite (HMR enabled)
- **Code Quality**: ESLint
- **Package Manager**: npm

---

### 🚀 Quickstart

```bash
# 1. Clone the repository
git clone https://github.com/jijoxP/AppReact.JsDND.git
cd AppReact.JsDND

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

---

### 👥 Authors
- **Jordan PASQUALINI** ([@jijoxP](https://github.com/jijoxP))
- **Lucas BRUN** ([@lucbr1](https://github.com/lucbr1))

---
*Academic Project.*
