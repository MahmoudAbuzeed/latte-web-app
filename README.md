# Latte — Luxury Egyptian Chocolate

A bilingual (English ⇄ Egyptian Arabic) landing page for **Latte**, a fine-chocolate
house in Mansoura, Egypt that curates premium imported chocolate into gift boxes,
chocolate bouquets and bespoke creations, supplied to stores across Egypt.

Built with **Vite + React + TypeScript**, recreated from a Claude Design handoff.

## Develop

Requires **Node 18+** (see `.nvmrc` — run `nvm use`). Vite 5 fails on Node 16.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
npm run preview  # preview the production build
```

## Highlights

- **Dark-cocoa + gold** design system, Cormorant Garamond / Amiri (Arabic) serif.
- **One-click EN ⇄ Arabic toggle** that flips the whole layout to RTL and swaps
  typography; the choice persists in `localStorage`.
- Showpiece motion: gold-shimmer headline, floating cocoa particles, tilt-on-hover
  product cards, scroll reveals, count-up stats, a filling craft timeline, a marquee
  and an animated Mansoura delivery hub.

## Photography

The hero, six collection cards and the story column ship with real chocolate
photography in [`src/assets/`](src/assets/), imported relatively and rendered through
[`src/components/ImageSlot.tsx`](src/components/ImageSlot.tsx) (which falls back to a
designed placeholder if a `src` is ever missing). The bundled images are free-license
stock from [Pexels](https://www.pexels.com/license/) — fine for development; replace
them with your own brand photography for production by dropping files into `src/assets/`
and keeping the same import names in:

- [`src/sections/Hero.tsx`](src/sections/Hero.tsx) — `hero.jpg`.
- [`src/sections/Products.tsx`](src/sections/Products.tsx) — `product-1.jpg` … `product-6.jpg`.
- [`src/sections/Story.tsx`](src/sections/Story.tsx) — `story.jpg`.

## Content

All copy (EN + Egyptian Arabic) lives in
[`src/i18n/dictionary.ts`](src/i18n/dictionary.ts). Placeholder figures (store counts,
phone, address) are ready to be swapped for the real ones there.
