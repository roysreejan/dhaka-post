# ঢাকা পোস্ট (Dhaka Post)

A Bengali news reader built with the Next.js App Router. It renders a homepage
listing and full article pages from a public news JSON API, with server-side
rendering, SEO metadata, and Bengali-first typography.

## Tech Stack

- **[Next.js 16](https://nextjs.org)** (App Router, React Server Components)
- **[React 19](https://react.dev)**
- **[TypeScript 5](https://www.typescriptlang.org)**
- **[Tailwind CSS 4](https://tailwindcss.com)** (via `@tailwindcss/postcss`)
- **[lucide-react](https://lucide.dev)** for icons
- **Bengali fonts** via `next/font/google` — Noto Serif Bengali (headings) and
  Hind Siliguri (body)

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the development server         |
| `npm run build` | Build for production                 |
| `npm run start` | Serve the production build           |
| `npm run lint`  | Run ESLint                           |

## Environment Variables

| Variable               | Default                 | Purpose                                          |
| ---------------------- | ----------------------- | ------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL` | `http://localhost:3000` | Base URL for `metadataBase` (OpenGraph/canonical) |

## Data Source

Content is fetched from the external API at `https://news-json.vercel.app`:

- `GET /home.json` — the homepage news listing
- `GET /details/{id}.json` — a single article by id

Fetch logic lives in [`lib/api.ts`](lib/api.ts). Both endpoints use
`next: { revalidate: 300 }` (ISR, 5-minute cache). `getArticle` is wrapped in
React's `cache()` so `generateMetadata` and the page component share a single
fetch per request, and returns `null` on 404 so the page can call `notFound()`.

API response shapes are typed in [`lib/types.ts`](lib/types.ts).

## Project Structure

```
app/
  layout.tsx            Root layout: fonts, Header/Footer, global metadata (lang="bn")
  page.tsx              Homepage — hero + sidebar + feature grid (responsive)
  loading.tsx           Homepage loading skeleton
  error.tsx             Homepage error boundary
  globals.css           Tailwind theme tokens + .article-body content styles
  news/[id]/
    page.tsx            Article page + generateMetadata (SEO/OpenGraph/Twitter)
    loading.tsx         Article loading skeleton
    error.tsx           Article error boundary
    not-found.tsx       404 for missing articles

components/
  layout/               Header, Footer, Logo, MobileMenu, nav-links
  home/                 HeroCard, ListCard, FeatureCard
  article/              ArticleMeta, ArticleBody, TagList, ShareBar
  ui/                   Badge

lib/
  api.ts                Data fetching (cached, revalidated)
  types.ts              API response types
  format.ts             Formatting helpers
```

## Notes

- **Article content** is delivered as pre-rendered HTML and injected via
  `dangerouslySetInnerHTML` in [`ArticleBody`](components/article/ArticleBody.tsx),
  then styled by the `.article-body` rules in
  [`app/globals.css`](app/globals.css). The source is a trusted editorial API.
- **Rendering** is server-side by default (RSC); pages are statically generated
  and revalidated on the ISR interval above.

## Deploy

Deploy on the [Vercel Platform](https://vercel.com/new). Set
`NEXT_PUBLIC_SITE_URL` to your production URL so metadata resolves correctly.
See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).
