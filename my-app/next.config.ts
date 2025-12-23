import type { NextConfig } from "next";

// GitHub Pages project sites are served from a sub-path:
//   https://<username>.github.io/<repo>/
// Change this if you rename the repository.
const repo = "supervapebro2";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Required for GitHub Pages (static hosting)
  output: "export",

  // Emits /about/index.html instead of /about.html
  trailingSlash: true,

  // Ensure all routes/assets include the repo sub-path in production
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",

  // next/image optimization requires a server; disable for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
