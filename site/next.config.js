const path = require('path')
const withCSS = require('@zeit/next-css')

const config = {
  webpack(config) {
    config.resolve.alias['@components'] = path.join(__dirname, 'components')
    config.resolve.alias['@constants'] = path.join(__dirname, 'constants')
    config.resolve.alias['@styles'] = path.join(__dirname, 'styles')
    return config
  },
  env: {
    API_URL: process.env.API_URL
  },
}

module.exports = withCSS(config)
