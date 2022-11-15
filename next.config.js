/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source:'/post',
        destination: '/blog',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
