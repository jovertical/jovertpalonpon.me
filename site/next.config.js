const path = require('path')
const withCss = require('@zeit/next-css')
const withPurgeCss = require('next-purgecss')

const config = {
  webpack(config) {
    config.resolve.alias['@components'] = path.join(__dirname, 'components')
    config.resolve.alias['@constants'] = path.join(__dirname, 'constants')
    config.resolve.alias['@helpers'] = path.join(__dirname, 'helpers')
    config.resolve.alias['@styles'] = path.join(__dirname, 'styles')
    return config
  },
  env: {
    API_URL: process.env.API_URL
  },
}

module.exports = withCss(withPurgeCss({
  purgeCssEnabled: ({ dev, isServer }) => (!dev && !isServer),
  purgeCss: {
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  },
  ...config
}))
