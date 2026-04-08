# Todo

## Content (fill in real data first)
- [ ] `src/data/projects.ts` — replace placeholder projects with real ones (title, description, tags, url)
- [ ] `src/data/experience.ts` — replace placeholder with real work history (company, role, dates, bullets)

## Pages to build out
- [ ] `/about` — full content: bio, skills, background, maybe a photo
- [ ] `/experience` — timeline or list layout using `experience.ts` data
- [ ] `/contact` — decide: email link only, or add a contact form (no library needed, use Netlify/Formspree or mailto)
- [ ] `/projects` — already renders cards from data; just needs real data filled in

## Components
- [ ] Mobile nav — current nav shows all links inline; add hamburger menu for small screens
- [ ] `ExperienceItem.astro` — reusable component for the experience timeline (needed for `/experience`)

## Deployment
- [ ] Set up GitHub Actions workflow for GitHub Pages deploy (`.github/workflows/deploy.yml`)
- [ ] Configure Cloudflare DNS to point zwang.io → GitHub Pages
- [ ] Verify custom domain (zwang.io) is set in GitHub Pages settings — no `base` path needed

## Optional / later
- [ ] Blog (Astro Content Collections)
- [ ] Resume page (PDF embed or styled HTML)
- [ ] Photography / Notes section
- [ ] OG image (social share preview)
- [ ] Sitemap (`@astrojs/sitemap` integration)
