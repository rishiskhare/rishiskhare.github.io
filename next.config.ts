import type { NextConfig } from "next";

// GitHub Actions sets this from the Pages site. A user site on a custom domain has no base path.
const basePath = process.env.PAGES_BASE_PATH;

const nextConfig: NextConfig = {
  output: "export",
  ...(basePath ? { basePath } : {}),
  images: { unoptimized: true },
  experimental: {
    agentFeedback: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
