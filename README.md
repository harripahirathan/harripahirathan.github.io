# Harri Pahirathan - Personal Portfolio

My personal resume site. Dark theme, animated hero with a 3D portrait video, scroll-driven photo marquees, sticky stacking project cards, and a click-to-view photo lightbox.

**Live site:** (add your deploy link here)

## Tech

React 18, TypeScript, Vite, Tailwind CSS, Framer Motion. Font is Archivo from Google Fonts.

## Run locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

`npm run build` outputs a static `dist/` folder you can host anywhere.

## Structure

```
src/
  App.tsx            Section order + the places ticker
  sections/          Hero, Marquee, About, Experience, Projects, Contact
  components/        FadeIn, Magnet, AnimatedText, Ticker, ContactButton, GhostButton
public/
  images/            Photos, logos, portrait still + animated loop
  favicon.svg
```

## How the hero portrait works

The hero tries `public/images/portrait-loop.webm` first (VP8 with an alpha channel, so the head floats transparently over the page). If the video can't load or play, it falls back to `portrait.png`, and past that, an emoji. Alpha video renders in Chrome, Edge, and Firefox. Safari falls back gracefully.

## Notable bits

- Typewriter hero heading on first load
- Scroll-position-driven photo marquee (two rows, opposite directions)
- Character-by-character scroll reveal on the About text
- Clickable polaroids in About that open a lightbox
- Sticky stacking project cards with scale falloff
- Two infinite tickers (skills and countries) scrolling opposite directions

## Deploy

Any static host works. Quickest options:

- **Vercel**: import the repo, framework preset Vite, done
- **Netlify**: build command `npm run build`, publish directory `dist`
- **GitHub Pages**: build, then push `dist/` with an action or `gh-pages`

