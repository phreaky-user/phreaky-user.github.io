const nextConfig = {
  output: 'export',
  basePath: '',
  assetPrefix: '',
  images: { unoptimized: true },
  turbopack: { root: __dirname }  // explicitly set root
}

module.exports = nextConfig
