# Cheminées Philippe Évreux — Site vitrine

Site B2B vitrine construit avec **Astro 6 + Tailwind v4 + TypeScript**.
Concession Cheminées Philippe de Loisirs Habitat Diffusion (Normanville / Évreux — 27).

## Démarrer

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # build production -> dist/
pnpm preview  # preview du build
```

## Structure

```
src/
├── components/        # Header, Footer, Hero, estimateurs, galerie…
├── layouts/
│   └── BaseLayout.astro   # meta, OG, schema.org LocalBusiness, lang fr-FR
├── pages/
│   ├── index.astro
│   ├── cheminees-sur-mesure.astro
│   ├── inserts-foyers.astro
│   ├── poeles.astro
│   ├── galerie.astro
│   ├── about.astro
│   ├── contact.astro
│   ├── mentions-legales.astro
│   └── politique-de-confidentialite.astro
└── styles/
    └── global.css     # Tailwind v4 + tokens couleur (palette artisan)
```

## Configuration

1. Palette et typographie : `src/styles/global.css` (`--color-brand-*`, `--font-*`).
2. Données légales : `src/pages/mentions-legales.astro` (SIRET, RCS…).
3. `PUBLIC_WEB3FORMS_KEY` et `PUBLIC_SITE_URL` dans `.env.local` (voir `.env.example`).
4. `site:` dans `astro.config.mjs` (domaine cheminees-poeles-philippe.com).

## Standards

- Mobile-first, breakpoints sm/md/lg/xl.
- WCAG AA, contraste 4.5:1 minimum.
- HTML lang="fr-FR".
- Meta + OG + schema.org LocalBusiness câblés.
- Sitemap XML auto-généré via `@astrojs/sitemap`.
- Pas de cookies (CNIL-exempt), Plausible Analytics recommandé.

## Déploiement

Vercel (preview puis production).

```bash
vercel              # preview
vercel --prod       # production
```
