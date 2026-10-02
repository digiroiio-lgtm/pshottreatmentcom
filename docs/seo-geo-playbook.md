# SEO, GEO and AI-search playbook

Last reviewed: 2026-10-02. Companion to `medical-seo-audit-2026-09-22.md`.

## What the codebase now does

**Technical SEO**
- One `<main>` per page (layout-level), skip link, titles ≤ 60 characters (the brand suffix is dropped when it would overflow, see `brandedTitle` in `src/lib/site-config.ts`), unique descriptions, canonical URLs.
- Social previews: every page has `og:image` / `twitter:image` pointing to `/og.png?path=<route>` (generated in `src/app/og.png/route.tsx` from the route registry title). `summary_large_image` Twitter cards, `article` Open Graph type for content pages.
- Icons (`icon.tsx`, `apple-icon.tsx`), `manifest.ts`, custom noindex 404, security headers and `poweredByHeader: false` in `next.config.mjs`.
- `googleBot` robots hints (`max-snippet:-1`, `max-image-preview:large`).
- Optional verification meta via env vars `GOOGLE_SITE_VERIFICATION` and `BING_SITE_VERIFICATION`.

**Structured data** (`src/components/JsonLd.tsx`, one `@graph` per page)
- `Organization` (logo, `areaServed`, `knowsAbout`, optional `sameAs`), `WebSite`, `WebPage`/`MedicalWebPage` (plus `AboutPage`, `ContactPage`, `CollectionPage` where relevant) with `datePublished`, `dateModified`, `about` (MedicalCondition / MedicalProcedure), `citation` from `src/lib/evidence.ts`, and `speakable` on `[data-direct-answer]`.
- `Article` for the 20 long-form guides, `BreadcrumbList`, `FAQPage` (generated from the same data as the visible FAQ), `Service` + `Offer` on `/price` for the advertised fee, `ItemList` on `/how-it-works` and `/ed-knowledge-hub`.
- Deliberately absent: `AggregateRating` / `Review`, `MedicalBusiness` / `MedicalClinic`, `Person` author / reviewer, `lastReviewed`. These need verified facts (see below). `validate-site.mjs` fails if rating or review markup appears.

**GEO / AI search**
- `src/lib/geo-content.ts` holds per-page "Key takeaways" and FAQs. Every statement restates a claim already sourced in the page body. Add new FAQs there; the visible block and the JSON-LD update together.
- `/llms.txt` is generated from the route registry (every sitemap route, with descriptions) by `src/lib/llms.ts`; `/llms-full.txt` contains the full guide text, FAQs and sources in Markdown. The build throws if an article is missing from the llms sections.
- `robots.txt` explicitly allows AI search, assistant and training crawlers (OAI-SearchBot, ChatGPT-User, GPTBot, Claude-SearchBot, Claude-User, ClaudeBot, PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended, CCBot). To opt a crawler out, change its rule in `src/app/robots.ts`.
- Answer-friendly structure: direct-answer paragraph under every H1, evidence status box, key takeaways, a comparison table on the ED hub, FAQ section, sources, visible dates in `<time>`.

## Needs input from the site owner (cannot be invented)

These are the biggest remaining YMYL / E-E-A-T gaps and the main ceiling for rankings and AI citation:
1. Legal operator name, clinic licence or registration, full treatment address (enables `MedicalClinic`/`LocalBusiness`, NAP consistency, Google Business Profile).
2. Named treating clinician(s) with registration numbers; named medical reviewer with credentials (enables `Person`, `reviewedBy`, `lastReviewed`, and replaces "Medical reviewer: not currently published").
3. Verified external profiles for `SAME_AS` in `src/lib/site-config.ts` (Google Business Profile, LinkedIn, Doctify, etc.).
4. Verifiable patient outcome data and consented reviews before any review or results content is added.
5. A public telephone number or email shown on the page, if `telephone`/`email` should enter the schema.

## Operations checklist

1. Deploy, then add the property in Google Search Console and Bing Webmaster Tools (set the env vars above or use DNS verification) and submit `https://pshottreatment.com/sitemap.xml`.
2. Check Search Console > Enhancements for structured-data warnings. Google shows FAQ rich results only for a limited set of sites; the markup still helps other engines and AI systems parse the page.
3. Consider IndexNow after content changes, and update `modified` dates in `src/lib/site-config.ts` only for substantive changes (never from deploy time).
4. Track AI visibility: run a fixed prompt set (for example "is the P-Shot proven for ED", "P-Shot price Turkey") monthly in ChatGPT, Perplexity, Gemini, Claude and Google AI Overviews and record whether the site is cited.
5. After Search Console has data, review the five overlapping cost pages (`/price`, `/why-is-p-shot-expensive-london`, `/i-paid-1800-london-p-shot`, `/what-uk-clinics-dont-tell-you-p-shot-pricing`, `/p-shot-cost-reddit`) for cannibalisation and consolidate with 301s if needed.
6. Out of scope here: translations and hreflang (the site is English-only), image content and alt text (the site has no photographs), backlink and digital-PR work.

## Verification

`npm run build && npm start`, then `npm run validate:site` (also run in CI). For every sitemap URL it checks: single H1 and `<main>`, title and description lengths, canonical, Open Graph and Twitter tags, valid JSON-LD without rating or review types, and FAQ markup matching visible text. It also checks the robots AI rules, full llms.txt coverage, llms-full.txt, manifest/icons/OG image, and a 404 for unknown URLs.
