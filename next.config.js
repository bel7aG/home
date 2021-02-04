const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([], {
  webpack(config) {
    config.resolve.modules.push(`${__dirname}/src`)

    return config
  }
})
