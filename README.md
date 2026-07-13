# akrion-sim.github.io

Marketing / documentation site for the **Akrion Soccer Engine** — a Rust
reinforcement-learning + intelligent-control engine that simulates full 11-v-11
football, drives all 22 players with learned optimal control (POMDP belief,
formation LP/IPM, per-player MPC), and continually adapts via PPO self-play and
evolutionary search.

Built with [Astro](https://astro.build) and deployed to GitHub Pages at
<https://akrion-sim.github.io>.

## Develop

```sh
npm install
npm run dev        # http://localhost:4321
```

## Build

```sh
npm run build      # → dist/
npm run preview
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds with
Astro and publishes `dist/` to GitHub Pages. In the repo settings, set
**Settings → Pages → Build and deployment → Source = GitHub Actions**.

## Structure

```
src/
  layouts/Base.astro      shared shell: head, nav, footer, scroll-reveal
  components/             Hero, Nav, Footer
  pages/
    index.astro           overview — why, three pillars, decision stack, adaptation
    engine.astro          discrete-event core + intelligent control layers
    learning.astro        self-play, PPO, curriculum, evolution, adaptation
  styles/global.css       three-channel design system (blue/green/red)
public/                   favicon.svg, og.svg
```

The palette maps to the three pillars: **blue** = intelligent control,
**green** = learning/growth, **red** = adversary/pressure.
