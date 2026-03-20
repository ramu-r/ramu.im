# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start development server
npm run build      # Type-check (astro check) then build for production
npm run preview    # Preview production build
```

No separate lint or test commands. Type checking is part of `build`.

## Architecture

This is **Astro Micro** — a static blog/portfolio site built with Astro 5, TailwindCSS v4, and zero JS frameworks.

### Key configuration

- **`src/consts.ts`** — Central site config: title, description, email, how many posts/projects to show on homepage, social links. This is the primary customization point.
- **`src/content.config.ts`** — Defines two content collections: `blog` (title, description, date, draft, tags) and `projects` (title, description, date, draft, demoURL, repoURL).
- **`astro.config.mjs`** — Integrates sitemap, MDX, and Pagefind; uses TailwindCSS v4 via `@tailwindcss/vite`; Shiki syntax highlighting with CSS variables theme.
- **`src/styles/global.css`** — TailwindCSS v4 `@import`/`@plugin` directives, Geist font definitions, syntax highlight colors for light/dark mode.

### Content collections

- `src/content/blog/` — Markdown/MDX blog posts. `draft: true` hides posts from listings.
- `src/content/projects/` — Markdown/MDX project entries.

### Routing

Pages in `src/pages/` map directly to routes:
- `/` → `index.astro` (homepage with recent posts and projects)
- `/blog/` → blog listing grouped by year
- `/blog/[...id]` → individual post with TOC, post navigation, Giscus comments
- `/projects/` and `/projects/[...id]` → project listing and detail
- `/tags/` and `/tags/[...id]` → tag index and filtered posts
- `/rss.xml` → RSS feed

### Utilities

- **`src/lib/utils.ts`** — `cn()` (clsx + tailwind-merge), `formatDate()`, `readingTime()`.
- **`src/types.ts`** — `Site`, `Metadata`, `Socials` type definitions.
- Path alias `@/*` resolves to `src/*`.

### Styling approach

TailwindCSS v4 is configured entirely via CSS (`src/styles/global.css`) rather than a JS config file. Prose content uses `@tailwindcss/typography`. Theme switching (light/dark/system) is handled client-side without a JS framework.

### Search

Pagefind runs after `astro build` and generates a search index in `public/pagefind/`. The `PageFind.astro` component provides the search UI. Search does not work in `dev` mode.
