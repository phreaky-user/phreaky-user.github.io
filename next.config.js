/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',       // enable static export
  basePath: '/phreaks',   // set this to your GitHub repo name
  assetPrefix: '/phreaks/',

  images: {
    unoptimized: true     // required for static export
  }
}

module.exports = nextConfig
