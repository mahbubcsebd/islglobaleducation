/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  allowedDevOrigins: ['127.0.0.1', 'localhost'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
    ],
  },
  experimental: {
    agentFeedback: false,
  },
  // cacheComponents and partialPrefetching require Vercel Edge streaming infrastructure.
  // In cPanel / Apache / Passenger environments, proxy buffering corrupts RSC streams
  // resulting in 'TypeError: t.reason.enqueueModel is not a function'.
  cacheComponents: false,
  partialPrefetching: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Accel-Buffering',
            value: 'no',
          },
        ],
      },
    ];
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

// Next config recompiled: yellow bg + black text/icons
export default nextConfig;
