# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Personal Info
- Name: [Zedong Wang]
- Title: Frontend Engineer / Full-Stack Developer
- Email: [hello@zwang.io]
- GitHub: [https://github.com/ZedWang1874]
- LinkedIn: [https://www.linkedin.com/in/zedong-wang-760397192/]
- Brief bio: [Frontend engineer focused on React, TypeScript, and building things that actually work. Wandering through the world of AI, chasing what's next.]

## Project Goal
Build a clean, modern personal website for a software developer.

The site should feel:
- natural
- modern
- lightweight
- professional but not overly corporate
- suitable for portfolio, personal introduction, and contact

The website should prioritize:
1. simplicity
2. good visual hierarchy
3. fast loading
4. responsive design
5. easy future content updates

## Current Status
- Project is in initial setup
- Completed: scaffold, BaseLayout, Nav, Footer, Home page, stub pages (About, Projects, Experience, Contact)
- In Progress:
- Not started: About content, Experience content, Contact form, blog, resume page

## Deployment
- Platform: Github pages with cloudflare domain
- Domain: zwang.io
- Branch: main → production

## Commands

```bash
npm run dev      # start dev server at localhost:4321
npm run build    # production build → dist/
npm run preview  # preview the built site
claude --resume "personal-website-setup" # resume claude session
```

**Node:** requires Node 22+ (`nvm use 22`). Run `source ~/.nvm/nvm.sh && nvm use 22` if node version is wrong.

## Tech Stack
- Astro 6 (static output)
- Tailwind CSS v4 via `@tailwindcss/vite` (no config file — configured in `src/styles/global.css` using `@theme` and `@variant`)
- React (for interactive components only, hydrated via Astro's `client:*` directives)
- TypeScript (strict)
- Inter font via `@fontsource/inter`

**Note:** Do NOT use `@astrojs/tailwind` — it's for Tailwind v3. Tailwind v4 is wired through Vite directly.

## Architecture

```
src/
  layouts/BaseLayout.astro   ← wraps every page: html, head, Nav, slot, Footer
  components/
    Nav.astro                ← sticky header with dark mode toggle
    Footer.astro             ← minimal footer
    HeroSection.astro        ← home hero (name, bio, CTAs)
    ProjectCard.astro        ← reusable card for project listings
  pages/                     ← one file = one route (Astro file-based routing)
  data/
    projects.ts              ← typed Project[] array, source of truth for project content
    experience.ts            ← typed Experience[] array
  styles/global.css          ← Tailwind v4 entry: @import "tailwindcss", @theme vars
public/
  favicon.svg
```

### Key patterns
- All pages use `<BaseLayout title="...">` as the outer wrapper.
- Dark mode uses Tailwind's `class` strategy. An inline script in `BaseLayout` sets the class before paint to avoid flash. The toggle button is in `Nav.astro`.
- CSS custom properties `--color-accent` and `--font-sans` are defined in `@theme {}` inside `global.css` and used as `text-[var(--color-accent)]` in Tailwind classes.
- Project and experience data lives in `src/data/` as typed TypeScript — import and render in `.astro` files. Never hardcode repeated content inline.
- Use React only where interactivity is actually needed (`client:load` / `client:visible`). Default to `.astro` components.

## Site Structure
- `/` — Home: Hero, featured projects, about blurb
- `/about` — About (stub)
- `/projects` — Full project grid
- `/experience` — Work history (stub)
- `/contact` — Contact (stub)

Optional later: Blog, Resume page, Photography/Notes

## Design Direction
- Clean, relaxed, modern — not corporate or startup-marketing
- Soft colors, strong readability, good whitespace
- Accent color: `--color-accent` (blue-ish oklch) — used sparingly
- Light/dark mode enabled
- Polished desktop-first, responsive on mobile

## Engineering Rules
- Use TypeScript strictly — avoid `any`
- Keep components small and readable
- Prefer reusable components for repeated UI blocks
- Keep styling consistent with existing Tailwind patterns
- Do not introduce state management libraries unless truly needed
- Do not over-engineer simple pages

## Astro / React Rules
- Prefer Astro for static content and page composition
- Use React only where interactivity is actually needed
- Keep hydration minimal — prioritize low JS payload

## Safe Change Policy
- Make the smallest effective change
- Follow existing local patterns
- Do not rewrite large files without strong reason
- Do not add dependencies for trivial problems

## When Generating UI
Prefer:
- clean hero section
- clear project cards
- readable timeline or experience section
- simple contact section
- polished but restrained animations (subtle hover states only)

Avoid:
- excessive motion or flashy gimmicks
- giant blocks of text
- overly dense layouts
- colorful gradients (unless very subtle)

## Content Style
- Concise, capable, practical — not exaggerated or self-promotional
- Avoid buzzwords and marketing language
- Keep paragraphs short and scannable

## Before Finishing Any Task
1. Check for unnecessary complexity
2. Keep the output visually clean
3. Keep the code easy to maintain
4. Ensure responsive behavior
5. Summarize what changed
