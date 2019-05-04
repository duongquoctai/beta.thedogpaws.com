const webpack = require('webpack')
const withImages = require("next-images")
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withPlugins = require("next-compose-plugins")
const withReactPress = require("./plugins/reactpress")

const nextConfig = {
  distDir: 'build',
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    })

    return config
  }
}

module.exports = withPlugins(
  [
    withCSS,
    withSass,
    withReactPress
  ],
  nextConfig
)
