/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/blog',
          destination: '/post'
        },
        {
          source: '/blog/:path*',
          destination: '/post/:path*'
        }
      ]

    }
  },

  async redirects() {
    return [
      {
        source: '/post',
        destination: '/blog',
        permanent: true
      },
      {
        source: '/post/:path*',
        destination: '/blog/:path*',
        permanent: true
      }
    ]

  }
}

module.exports = nextConfig
