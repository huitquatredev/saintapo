# Domaine Saint Apollinaire

Refonte éditoriale de la page d’accueil de [domaine-st-apollinaire.com](https://domaine-st-apollinaire.com/), construite avec Astro et prête pour Vercel.

Le contenu (textes, coordonnées, cuvées, actualités) provient de la page d’origine et n’a pas été réécrit. La direction artistique s’inspire du thème **Aubergine** de Lexington Themes : grandes typographies, photographies pleine page, beaucoup d’espace, sections sombres et détails éditoriaux.

## Stack

- **Astro 7** — sortie 100 % statique
- CSS sur mesure (aucun framework UI)
- Polices auto-hébergées : **Instrument Serif** et **Inter Tight**
- Images WebP optimisées dans `public/images`
- JavaScript minimal : menu mobile, header au scroll, apparitions au scroll

## Démarrage local

```bash
npm install
npm run dev
```

Le site est servi sur `http://localhost:4321`.

```bash
npm run build    # génère dist/
npm run preview  # prévisualise le build de production
```

Node.js **22.23.4 ou supérieur** est requis (voir `.nvmrc`).

## Structure

```text
src/
├── components/
│   ├── Header.astro      # topbar, navigation, menu mobile plein écran
│   └── Footer.astro      # contact, navigation secondaire, mentions
├── layouts/
│   └── Layout.astro      # métadonnées SEO, JSON-LD, polices, scripts
├── pages/
│   └── index.astro       # page d’accueil complète
└── styles/
    └── global.css        # design system, responsive, animations
public/
├── fonts/                # woff2 auto-hébergés
├── images/               # photos du domaine, bouteilles, logo Demeter, OG image
├── favicon.svg
├── robots.txt
└── sitemap.xml
```

## Déploiement sur Vercel

### Via GitHub

1. Pousser le projet sur un dépôt GitHub.
2. Dans Vercel, cliquer sur **Add New → Project**, importer le dépôt.
3. Vercel détecte Astro automatiquement. Laisser les réglages par défaut :
   - **Build command** : `npm run build`
   - **Output directory** : `dist`
4. Déployer.

### Via la CLI

```bash
npx vercel
```

Le fichier `vercel.json` fixe le framework, le dossier de sortie, les URL propres et le cache long des images et des polices. Aucun adaptateur serveur n’est nécessaire : le site est entièrement statique.

## Avant mise en ligne

- Remplacer `site` dans `astro.config.mjs`, l’URL canonique et le `sitemap.xml` si le domaine change.
- Vérifier les liens externes (Google Maps, Facebook, Vitisphère, Le Dauphiné, page « L’été à Saint Apo »).
- Mettre à jour les salons 2026 dans `src/pages/index.astro` lorsqu’il y a de nouvelles dates.
- Remplacer `public/images/og.jpg` si une autre image de partage est souhaitée.
- Les photos du site d’origine sont en basse résolution (environ 300 px de large) et ont été agrandies. Si le Domaine dispose des fichiers originaux, remplacer les images dans `public/images` pour gagner en netteté.

## Crédits

- Textes et photographies : Domaine Saint Apollinaire.
- Typographies : Instrument Serif et Inter Tight, sous SIL Open Font License.
- Inspiration de mise en page : [Aubergine — Lexington Themes](https://lexingtonthemes.com/viewports/aubergine).
