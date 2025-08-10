import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx'],
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      { source: '/home', destination: '/', permanent: false },
    ]
  },
}


export default (nextConfig)
