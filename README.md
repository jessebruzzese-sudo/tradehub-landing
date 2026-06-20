# TradeHub Landing Page

Marketing landing page for TradeHub — a single-page React site with signup/signin stubs.

**Design source:** [Hero landing page for TradeHub (Figma)](https://www.figma.com/make/l6QvJfdM8KqGgupPtqSWBc/Hero-landing-page-for-TradeHub)

## Stack

- React 18 + Vite 6 + TypeScript
- Tailwind CSS 4
- React Router (client-side routing)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Routes

| Path | Page |
|------|------|
| `/` | Home (navbar, hero, stats, features, footer) |
| `/signup` | Sign up stub form |
| `/signin` | Sign in stub form |
| `/privacy` | Privacy Policy placeholder |
| `/terms` | Terms of Service placeholder |

## Build

```bash
npm run build
npm run preview
```

## Notes

- CTAs are wired to `/signup` and `/signin` only; no backend integration.
- For production SPA hosting, configure fallback routing so `/signup`, `/signin`, etc. serve `index.html`.
