import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "UZ Clinic",
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#0f766e",
    lang: "en-GB",
    icons: [
      { src: "/icon", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
