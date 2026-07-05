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

## Deployment

- **`git push` to `origin` (kurikurikun/movement-website) is the ONLY deploy path** — Vercel auto-builds production from every push to main (integration confirmed working 2026-07-05).
- Never use `vercel` CLI (uninstalled machine-wide 2026-07-05) — dirty-tree CLI deploys caused live sites to silently diverge from git.
- All assets referenced by pages must be committed to git.
