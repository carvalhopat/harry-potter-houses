/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: "build",
  assetPrefix: isProd ? 'https://harry-potter-houses.vercel.app/' : '',
  images: {
    unoptimized: true,
    path: '/'
  },
};

module.exports = nextConfig;
