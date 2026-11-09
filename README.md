# Alex Morgan — Bilingual Portfolio Template

A responsive, static-export portfolio template for developers, designers, and independent makers. The sample identity and portfolio content are fictional and should be replaced before publishing.

## Product decisions

- No admin panel or database: content is edited in source data/config files.
- Projects open in an accessible modal; there is no standalone project-detail route.
- English and Persian language toggle with RTL/LTR document direction.
- Dark/light theme toggle.
- Responsive navigation, mobile menu, keyboard dismissal, and reduced-motion support.
- Static export compatible with GitHub Pages.

## Routes

- `/` — Home, project gallery, writing, experience, skills
- `/about` — Profile, capabilities, work history
- `/articles` — Editorial index
- `/speaking` — Education, certificates, courses
- `/uses` — Tools and setup
- `/contact` — Contact channels

Projects are intentionally not a route. Select any project card on the homepage to open its details modal.

## Tech stack

- Next.js 14 App Router / React 18
- Tailwind CSS 3
- React Icons
- Static HTML export

## Quick start

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

The repository is configured for GitHub Pages at `/PersonalWebsite`. The static export is written to `out/`.

## Customize the template

1. Edit `src/data/site-config.js` for the name, role, email, location, social URLs, and appearance defaults.
2. Edit `src/data/projects.js` to add, remove, or update project cards and modal content.
3. Edit `src/data/articles.js`, `src/data/experience.js`, and `src/data/skills.js` to update the shared content datasets.
4. Replace the sample profile image at `public/images/avatar.jpg`.
5. Replace the sample text in the About, Articles, Education, Uses, and Contact routes.
5. Replace sample Unsplash image URLs with properly licensed images. For a commercial release, prefer hosting optimized image assets locally and retain proof of each image's license.
7. Add a locally hosted Persian font (for example, a properly licensed Vazirmatn webfont) before shipping a polished Persian edition.

## GitHub Pages

The current `basePath` is `/PersonalWebsite`. If deploying to a user/organization root domain, remove the base path and update the deployment workflow accordingly.

## Commercial release checklist

- Replace all fictional names, contact details, logos, and project content.
- Confirm rights for every photo, icon, font, and third-party asset.
- Add a clear commercial license and define permitted client/end-product usage.
- Test both locales, mobile breakpoints, keyboard navigation, contrast, and reduced motion.
- Run `npm ci` and `npm run build` before publishing.
- Add real preview screenshots, a live demo, changelog, support policy, and versioned release notes.

This repository does not include a backend, CMS, contact-form service, analytics, or admin dashboard by design.
