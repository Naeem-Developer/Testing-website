import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Enable Next.js built-in image optimization (was disabled before!)
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache
  },
  // Compress responses
  compress: true,
  // Reduce bundle size by excluding source maps in production
  productionBrowserSourceMaps: false,
};

export default nextConfig;
