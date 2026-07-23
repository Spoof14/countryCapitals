# React + TypeScript + Vite language learning app

**Madang (마당)** is a free Korean-first language learning app built around comprehensible input: short folklore and everyday stories in Korean, with English available on demand.

## Learn by reading

- Read simplified Korean folklore and daily-life scenes
- Tap a paragraph to reveal the English translation
- Tap underlined words for meanings, romanization, and audio
- Save words to a notebook and review them with light spacing

## Scripts

```bash
yarn
yarn dev
yarn build
yarn preview
```

## GitHub Pages

The app is configured for project Pages at:

`https://spoof14.github.io/countryCapitals/`

After merging to `main`, enable Pages once in the repo:

1. **Settings → Pages**
2. **Source:** GitHub Actions

Pushes to `main` run `.github/workflows/deploy-pages.yml`, which builds with Vite `base: '/countryCapitals/'` and deploys the `dist` folder.

Korean speech uses the browser's `speechSynthesis` API when a `ko-KR` voice is available.
