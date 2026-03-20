# CLAUDE.md

Move-ment Company — bilingual (JP/EN) video production website.

## Tech Stack

- Next.js 14 (App Router) + TypeScript + Tailwind CSS v3
- Node v20 installed at `~/.local/node/bin` (add to PATH)

## Commands

```bash
export PATH="$HOME/.local/node/bin:$PATH"
npm run dev      # Dev server
npm run build    # Production build
```

## Structure

- `src/app/` — Pages (/, /about, /contact, /blog, /programme-content, /japan-drone-video-photo, /vr-360-tours-japan)
- `src/components/` — Navigation, Footer, HeroSlideshow, FadeInSection
- Dark cinematic aesthetic, accent color `#c4a882`, bilingual JP+EN content
- Placeholder images via picsum.photos
