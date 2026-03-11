/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
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


