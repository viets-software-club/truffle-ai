const withPWA = require('next-pwa')({
  dest: 'public'
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com'
      }
    ]
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = withPWA(nextConfig)
