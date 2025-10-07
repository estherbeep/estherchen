/** @type {import('next').NextConfig} */
const nextConfig = {
  // App directory is now stable in Next.js 14
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react']
  }
}

module.exports = nextConfig

