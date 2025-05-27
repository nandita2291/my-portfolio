/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  trailingSlash: true, // Required for static exports to work properly on GitHub Pages

  basePath: isProd ? '/my-portfolio' : '',
  assetPrefix: isProd ? '/my-portfolio/' : '',

  images: {
    unoptimized: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
