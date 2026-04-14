import { MetadataRoute } from "next";
import { locations } from "@/data/locations";
import { blogPosts } from "@/data/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://pshottreatment.com";
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/p-shot-price`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/p-shot-before-after`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/p-shot-reviews`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/p-shot-side-effects`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/how-it-works`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/locations`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/locations/turkey`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/locations/uk`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/locations/usa`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/locations/canada`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/locations/australia`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/locations/germany`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/locations/ireland`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const locationPages: MetadataRoute.Sitemap = locations.map((loc) => ({
    url: `${base}/locations/${loc.countrySlug}/${loc.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: loc.isConversionFocused ? 0.9 : 0.7,
  }));

  return [...staticPages, ...blogPages, ...locationPages];
}
