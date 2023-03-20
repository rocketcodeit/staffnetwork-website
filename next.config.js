/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
      // by next.js will be dropped. Doesn't make much sense, but how it is
      fs: false, // the solution
    };

    return config;
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
        },
        {
          source: '/aree',
          destination: '/area'
        },
        {
          source: '/aree/:path*',
          destination: '/area/:path*'
        },
        {
          source: '/bandi',
          destination: '/announcement'
        },
        {
          source: '/bandi/:path*',
          destination: '/announcement/:path*'
        },
        {
          source: '/servizi',
          destination: '/service'
        },
        {
          source: '/servizi/:path*',
          destination: '/service/:path*'
        }
      ]

    }
  },

  async redirects() {
    return [
      {
        source: '/lo-studio',
        destination: '/chi-siamo',
        permanent: true
      },
      {
        source: '/area',
        destination: '/aree',
        permanent: true
      },
      {
        source: '/post',
        destination: '/blog',
        permanent: true
      },
      {
        source: '/post/:path*',
        destination: '/blog/:path*',
        permanent: true
      },
      {
        source: '/announcement',
        destination: '/bandi',
        permanent: true
      },
      {
        source: '/announcement/:path*',
        destination: '/bandi/:path*',
        permanent: true
      },
      {
        source: '/service',
        destination: '/servizi',
        permanent: true
      },
      {
        source: '/service/:path*',
        destination: '/servizi/:path*',
        permanent: true
      }
    ]

  },
  output: 'standalone',

  publicRuntimeConfig: {
    // Will be available on both server and client
    backendUrl: process.env.BACKEND_URL,
  },
}

module.exports = nextConfig
