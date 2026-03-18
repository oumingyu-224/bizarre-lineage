/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:all*(js|css)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/soflo-wheelie-life.embed',
        destination: '/game/soFlowheelielife/index.html',
      },
      {
        source: '/street-wheelie.embed',
        destination: '/game/streetWheelie/index.html',
      },
      {
        source: '/stickman-bike.embed',
        destination: '/game/stickmanbike/index.html',
      },
      {
        source: '/wheelie-life.embed',
        destination: '/game/wheelielife/index.html',
      },
    ]
  }
};

module.exports = nextConfig;


