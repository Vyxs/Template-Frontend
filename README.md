# React TypeScript Vite Template

Template de projet frontend structuré avec les dépendances suivantes :

- React 18
- TypeScript
- Vite
- Tailwind CSS 3
- Framer Motion
- Lucide Icons

## Installation

```bash
# Cloner le projet
git clone https://github.com/Vyxs/Template-Frontend.git myProject

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

## Structure du projet

```
├── public/                   # Ressources statiques
├── src/
│   ├── api/                  # Services et appels API
│   ├── components/           # Architecture Atomic Design
│   │   ├── atoms/            # Composants de base (boutons, inputs)
│   │   ├── molecules/        # Composants composés (formulaires, cards)
│   │   └── organisms/        # Composants complexes (header, sidebar)
│   ├── config/               # Configuration de l'application
│   ├── contexts/             # Définition des contextes React
│   ├── providers/            # Implémentation des providers de contexte
│   ├── hooks/                # Hooks personnalisés
│   ├── pages/                # Composants de page
│   ├── router/               # Configuration du routage
│   ├── App.tsx               # Composant principal (exemple avec glassmorphism)
│   ├── main.tsx              # Point d'entrée
│   └── index.css             # Styles Tailwind
├── index.html                # Template HTML
├── package.json              # Dépendances
├── postcss.config.js         # Configuration PostCSS
├── tailwind.config.js        # Configuration Tailwind
├── tsconfig.json             # Configuration TypeScript
└── vite.config.ts            # Configuration Vite
```

## Commandes

- `npm run dev` - Serveur de développement
- `npm run build` - Build de production
- `npm run preview` - Prévisualisation de la build

Le composant App.tsx inclut un exemple d'interface avec effet glassmorphism et animations via Framer Motion.