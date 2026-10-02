import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";

// Explicit allow rules document the policy for AI search and assistant crawlers (retrieval, user-triggered and training).
// Remove an entry or switch it to `disallow` to opt a crawler out.
const aiCrawlers = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "Claude-SearchBot",
  "Claude-User",
  "ClaudeBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: aiCrawlers, allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
