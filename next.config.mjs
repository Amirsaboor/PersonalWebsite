import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx'],
  reactStrictMode: true,
  swcMinify: true,

  // GitHub Pages serves this project from /PersonalWebsite.
  output: 'export',
  basePath: '/PersonalWebsite',
  trailingSlash: true,

  // Static export cannot use Next.js' image optimization server.
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/Amirsaboor/Talar/**',
      },
    ],
  },
}

export default nextConfig
