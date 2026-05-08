import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://pshottreatment.com";
  const pages = [
    "/",
    "/price",
    "/before-after",
    "/reviews",
    "/side-effects",
    "/how-it-works",
    "/contact",
    "/best-p-shot-clinic-turkey",
    "/is-p-shot-worth-it",
    "/p-shot-scam-or-legit",
    "/why-is-p-shot-expensive-london",
    "/p-shot-vs-viagra",
    "/p-shot-venous-leak-ed",
    "/prp-fix-erectile-dysfunction-naturally",
    "/prp-vs-stem-cell-erectile-dysfunction",
    "/p-shot-cost-reddit",
    "/flying-to-turkey-ed-treatment",
    "/i-paid-1800-london-p-shot",
    "/what-uk-clinics-dont-tell-you-p-shot-pricing",
    "/flew-to-turkey-for-ed-treatment-reality",
  ];
  return pages.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));
}
