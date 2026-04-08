# Notes

## Tailwind v4 setup
Using `@tailwindcss/vite` (NOT `@astrojs/tailwind`, which is v3 only).
Tailwind is imported in `src/styles/global.css` via `@import "tailwindcss"`.
Theme vars (accent color, font) are defined with `@theme {}` in that same file — no `tailwind.config.js`.

## Dark mode
- Strategy: class-based (add/remove `dark` class on `<html>`)
- Tailwind v4 defaults to `prefers-color-scheme`. Class mode requires `@variant dark (&:where(.dark, .dark *))` in `global.css` — already added.
- Inline script in `BaseLayout.astro` reads `localStorage` and sets the class before paint — prevents flash on load
- Toggle button lives in `Nav.astro`, writes to `localStorage` on click

## Accent color
Defined as `--color-accent: oklch(55% 0.18 250)` in `@theme {}`.
Used in Tailwind classes as `text-[var(--color-accent)]`, `border-[var(--color-accent)]`, etc.
Change the oklch value in `global.css` to retheme the whole site.

## Node version
Project requires Node 22+. Only Node 20 and 18 were installed initially.
Node 22 was installed via nvm: `nvm install 22`.
Always run `source ~/.nvm/nvm.sh && nvm use 22` before `npm run dev` or `npm run build` if shell doesn't auto-load nvm.

## GitHub Pages deployment
Branch `main` → production. Need to add a GitHub Actions workflow.
Standard Astro + GitHub Pages setup: use `withastro/action` in the workflow.
No `base` path needed since the site is on a custom domain (zwang.io), not a subdirectory.

## Project/Experience data
All content lives in `src/data/` as typed TypeScript arrays.
Pages import and render from these files — never hardcode content inline in `.astro` files.
Add new projects to `projects.ts`, set `featured: true` to show on the Home page.

## Mobile nav
Current nav renders all links inline — fine on desktop, gets cramped on small screens.
Plan: add a hamburger toggle (can be a small React component with `client:load`, or pure CSS checkbox hack).
Keep it simple — no animation library needed.

## Contact form options (if needed later)
- Simplest: `mailto:hello@zwang.io` link (already in place)
- No backend: Formspree (free tier) or Netlify Forms
- Avoid adding a server/API route just for a contact form
