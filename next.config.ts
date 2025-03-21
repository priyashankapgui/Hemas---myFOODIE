import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "1mb",
      allowedOrigins: ["*"],
    },
  },
  devIndicators: {
    buildActivity: false, 
    buildActivityPosition: "bottom-right", 
  },
};

export default nextConfig;
