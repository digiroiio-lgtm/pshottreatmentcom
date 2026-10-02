import { redirects } from "./src/content/redirects.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async redirects() {
    // 301 so rankings and inbound links carry over from the previous URL structure.
    return Object.entries(redirects).map(([source, destination]) => ({ source, destination, statusCode: 301 }));
  },
  async rewrites() {
    // IndexNow ownership file: /<INDEXNOW_KEY>.txt. Only registered when the key is set at build time.
    const key = process.env.INDEXNOW_KEY;
    return key ? [{ source: `/${key}.txt`, destination: "/api/indexnow-key" }] : [];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
