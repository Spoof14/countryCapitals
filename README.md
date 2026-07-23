# React + TypeScript + Vite language learning app

**Madang (마당)** is a free Korean-first language learning app built around comprehensible input: short folklore and everyday stories in Korean, with English available on demand.

## Learn by reading

- Read simplified Korean folklore and daily-life scenes
- Every paragraph has a folk-art style illustration, so meaning connects without English
- Tap a paragraph to reveal the English translation
- Tap underlined words for meanings, romanization, and audio
- Save words to a notebook and review them with light spacing
- Listen to any paragraph (or the whole story) with Korean text-to-speech
- Practice story vocabulary with a matching game or fill-in-the-blank quiz after reading
- Learn the alphabet on the Hangul page, with tap-to-hear letters
- Filter the library by level (A1 beginner, A2 elementary)
- Track streaks, days practiced, and reviews on the Progress page
- Export and import your progress as a JSON backup
- Installable PWA with offline support (stories, fonts, and assets are cached)

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
