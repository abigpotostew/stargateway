module.exports = {
  reactStrictMode: true,
  transpilePackages: ['@microcosmbot/ui', '@microcosms/bot', '@microcosms/db'],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      use: ['@svgr/webpack'],
    })
    return config
  },
}
