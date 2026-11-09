# Content model

The template intentionally has no admin panel. Content is stored as source-controlled data so the site remains static, fast, and easy to host.

## Global settings

Edit `src/data/site-config.js` to change:
- Display name and professional role
- Site description and contact email
- Location and social profile URLs
- Profile image path
- Default color theme and supported languages

## Projects

Edit `src/data/projects.js`. Each project supports:
- Stable `id` used as its React key
- English and Persian name, category, role, and overview
- Challenge, approach, and outcome copy in both languages
- Image URL, image alt text, and technology tags
- Optional `url` for an external live project link

The project carousel reads this array and opens the selected record in the accessible project modal. There is no project detail route.

## Articles

Edit `src/data/articles.js`. The homepage shows the first three records; the Articles page shows all records. Each record includes English and Persian title, category, excerpt, and reading-time labels.

## Experience and skills

- `src/data/experience.js` is shared by the homepage and About page.
- `src/data/skills.js` contains skill groups and their brand icons.

## Locale behavior

The language preference is stored in local storage. The provider updates the document's `lang` and `dir` attributes and provides shared labels through `useLocale()`.

Page copy should use the same `isFa` conditional pattern as the existing pages. Add both translations whenever adding visible copy. Technology and brand names can remain in their original form.

## Images and fonts

Use optimized, locally hosted assets for production. Verify the redistribution rights of all photographs, icons, and fonts. Add a locally bundled Persian font with a suitable license before selling the template as a polished bilingual product.
