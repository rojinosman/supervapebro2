import type { NextConfig } from "next";

const repo = "supervapebro2"; // <-- your GitHub repo name (case-sensitive)
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Required for GitHub Pages (static hosting)
  output: "export",
  trailingSlash: true,

  // Required for https://<user>.github.io/<repo>/
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",

  // next/image optimization requires a server; disable for static export
  images: { unoptimized: true },

  // Expose base path to the client for <img> and CSS background URLs
  env: {
    NEXT_PUBLIC_BASEPATH: isProd ? `/${repo}` : "",
  },
};

export default nextConfig;
