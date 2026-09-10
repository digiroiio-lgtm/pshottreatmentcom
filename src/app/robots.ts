import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-config";

/**
 * AI crawlers are named explicitly rather than left to the wildcard rule.
 *
 * Several generative-search crawlers treat an absent or ambiguous directive
 * conservatively and skip the site; an explicit `Allow` removes that ambiguity
 * and is the single cheapest lever for being cited in AI answers. Google-Extended
 * in particular is a separate opt-in from Googlebot — without it the site can be
 * indexed for search yet excluded from AI Overviews grounding.
 *
 * `/_next/` is intentionally NOT blocked: search engines need the JS and CSS to
 * render the page, and blocking it degrades both indexing and Core Web Vitals
 * assessment.
 */

const aiCrawlers = [
  // OpenAI
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  // Anthropic
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Google generative surfaces (separate opt-in from Googlebot)
  "Google-Extended",
  // Apple
  "Applebot",
  "Applebot-Extended",
  // Microsoft / Bing
  "Bingbot",
  "BingPreview",
  // Others
  "Amazonbot",
  "meta-externalagent",
  "meta-externalfetcher",
  "DuckAssistBot",
  "cohere-ai",
  "cohere-training-data-crawler",
  "YouBot",
  "Diffbot",
  "CCBot",
  "Timpibot",
  "ImagesiftBot",
  "omgili",
  "MistralAI-User",
  "Kangaroo Bot",
  "PetalBot",
  "Bytespider",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
