import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export: GitHub Pages serves files, it does not run Node.
  output: "export",
  // Pages has no image optimizer, so ship the images as they are.
  images: { unoptimized: true },
};

export default nextConfig;
