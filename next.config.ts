import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: ["./src"],
    prependData: `@import "@/styles/variables.scss";`,
  },
  images: {
    domains: ["cdn.dummyjson.com"],
  },
};

export default nextConfig;
