import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    domains: [
      "cdn.jsdelivr.net",
      "raw.githubusercontent.com",
      "daisyui.com",
      "www.mongoosejs.net",
      "images.unsplash.com",
    ],
  },
};

export default nextConfig;
