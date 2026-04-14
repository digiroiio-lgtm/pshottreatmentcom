/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/price", destination: "/p-shot-price", permanent: true },
      { source: "/reviews", destination: "/p-shot-reviews", permanent: true },
      { source: "/side-effects", destination: "/p-shot-side-effects", permanent: true },
      { source: "/before-after", destination: "/p-shot-before-after", permanent: true },
    ];
  },
};

export default nextConfig;
