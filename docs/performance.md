# Performance and quality measurements

Lighthouse 12, mobile profile (simulated throttling), production build served locally, 2026-10-02. Lab data only; field Core Web Vitals need real traffic (Search Console, CrUX).

| Page | Performance | Accessibility | Best practices | SEO | LCP | CLS | TBT |
| --- | --- | --- | --- | --- | --- | --- | --- |
| / | 99 | 100 | 100 | 100 | 2.0 s | 0 | 70 ms |
| /p-shot | 99 | 100 | 100 | 100 | 2.0 s | 0 | 80 ms |
| /erectile-dysfunction-assessment | 98 | 100 | 100 | 100 | 2.1 s | 0 | 120 ms |

Earlier run on the same pages (before the changes below): performance 95-99, accessibility 92-93, TBT up to 230 ms.

Changes made from the first run:
- Accessibility: WhatsApp and Check Suitability buttons now use green-700 / teal-700 (contrast), the mobile-bar subtext is no longer faded, and footer links have a 24 px minimum touch target.
- JavaScript: the currency provider now loads only on `/price`, and the exit-intent prompt is code-split with `next/dynamic`.

Re-run: `npm run build && npx next start -p 3100`, then `npx lighthouse http://127.0.0.1:3100/ --form-factor=mobile` (Chrome required). With a GA4 measurement ID set, the Google tag adds third-party JavaScript; re-measure after enabling it.
