# React + TypeScript + Vite language learning app

**Madang (마당)** is a free Korean-first language learning app built around comprehensible input: short folklore and everyday stories in Korean, with English available on demand.

## Learn by reading

The design follows second-language-acquisition research: comprehensible input through
easy stories, dual coding with per-paragraph illustrations, audio-paced reading-while-
listening, spaced retrieval of vocabulary, light comprehension accountability, and
pushed output through sentence reconstruction.

- Ten stories across A1–B1: folklore, fables, and daily-life scenes, with later stories
  deliberately reusing earlier vocabulary
- Every paragraph has a folk-art style illustration, so meaning connects without English
- Tap a paragraph to reveal the English translation
- Tap underlined words for meanings, romanization, and audio
- Read-along audio: the paragraph being spoken is highlighted and the view follows
- Three comprehension questions after each story
- Practice modes after reading: word matching, fill-in-the-blank, and sentence building
- Save words to a notebook; spaced review uses expanding intervals (1 → 75 days)
- Learn the alphabet on the Hangul page, with tap-to-hear letters
- Filter the library by level (A1 / A2 / B1)
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
