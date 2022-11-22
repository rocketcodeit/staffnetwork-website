/** @type {import('next').NextConfig} */
const nextConfig = {
  future: {
    webpack5: true, // by default, if you customize webpack config, they switch back to version 4.
    // Looks like backward compatibility approach.
  },
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
      // by next.js will be dropped. Doesn't make much sense, but how it is
      fs: false, // the solution
    };

    return config;
  },
  build: {
    extend(config, {}) {
      config.node = {
        fs: 'empty'
      }
    }
  },
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
