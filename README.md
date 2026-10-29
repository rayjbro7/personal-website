# Personal SEO website

Astro 7 · Tailwind CSS v4 · TypeScript. Static output, ready for Cloudflare Pages.

## Preview locally

```bash
npm install
npm run dev        # http://localhost:4321 (live reload)
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
```

Requires Node 22+.

## Where things live

| Path | What it is |
| --- | --- |
| `src/config/site.ts` | Name, role, employer, email, LinkedIn/other profiles, SEO defaults, placeholder switch |
| `src/styles/global.css` | Design tokens (colours, fonts, type scale, spacing, radii) and dark-mode values |
| `src/data/expertise.ts` | Areas of expertise |
| `src/data/experience.ts` | Employment history |
| `src/content/projects/` | Project / case study Markdown files |
| `src/content/articles/` | Article Markdown files |
| `src/content.config.ts` | Content collection schemas |
| `src/pages/index.astro` | Homepage (assembles the sections) |
| `src/pages/robots.txt.ts` | robots.txt (points to the sitemap) |
| `src/layouts/BaseLayout.astro` | HTML shell, fonts, header/footer |
| `src/components/layout/` | `SeoHead`, `SiteHeader`, `SiteFooter` |
| `src/components/sections/` | `Hero`, `About`, `Expertise`, `Experience`, `Projects`, `Articles`, `Contact` |
| `src/components/ui/` | `SectionHeader`, `ButtonLink`, `ProjectCard`, `ArticleCard`, `Placeholder` |
| `src/lib/schema.ts` | Person / WebSite / ProfilePage JSON-LD |
| `public/` | Favicon, OG image, Cloudflare `_headers` |
| `scripts/generate-og.mjs` | Regenerates `public/og-default.png` |

## Change colours and typography

Edit the `@theme` block in `src/styles/global.css`:

- `--color-accent` / `--color-accent-strong` / `--color-accent-soft` — the single accent colour.
- `--color-paper`, `--color-surface`, `--color-ink`, `--color-ink-muted`, `--color-line` — neutrals.
- The `@media (prefers-color-scheme: dark)` block holds the dark-mode values for the same tokens.
- `--font-display` (headings, Fraunces) and `--font-sans` (body, Instrument Sans).
  To swap a font: `npm i @fontsource-variable/<font>`, update the imports and preload paths at the
  top of `src/layouts/BaseLayout.astro`, then change the token.
- `--text-display`, `--text-headline`, `--text-title`, `--text-lead` — the fluid type scale.

## Replace placeholder content

1. `src/config/site.ts` — set `contact.email`, `social.linkedin.url`, any `social.others`, and
   `employer.url` if you want it linked. Empty values stay hidden and out of the structured data.
2. `astro.config.mjs` — set `SITE_URL` to your real domain (canonical, sitemap, robots, OG).
3. Portrait — save a photo as `src/assets/portrait.jpg` (or .png/.webp). It is detected
   automatically and served as responsive AVIF/WebP.
4. `src/data/experience.ts` — add your start date, summary, responsibilities and previous roles.
5. `src/components/sections/About.astro` — replace the dashed personal-background note.
6. Delete `src/content/projects/demo-project-*.md` once you have real projects.
7. Run `node scripts/generate-og.mjs` if you change your name or title.
8. Before launch set `showPlaceholders: false` in `site.ts` — every dashed note and demo project
   disappears.

## Add projects and articles

Copy `src/content/projects/_template.md` or `src/content/articles/_template.md`, rename it without
the underscore (the filename becomes the URL slug) and fill in the frontmatter. Set `draft: true` to
hide an entry. The homepage shows all projects (ordered by `order`) and the three latest articles.

When you build the individual pages:

- **Case studies:** create `src/pages/projects/[id].astro` using `getCollection('projects')`, then add
  `caseStudyUrl: "/projects/<slug>/"` to each project to show the link.
- **Articles:** create `src/pages/articles/[id].astro`, then set `features.articlePages: true` in
  `site.ts` to switch on the “Read more” links.
- New pages pick up SEO tags by passing `title`, `description` and optional `schema` to `BaseLayout`;
  they are added to the sitemap automatically.
