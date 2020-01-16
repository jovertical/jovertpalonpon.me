const path = require('path')
const withCss = require('@zeit/next-css')
const withPurgeCss = require('next-purgecss')

const config = {
  env: {
    APP_URL: process.env.APP_URL,
    DATABASE_URL: process.env.DATABASE_URL
  },
  webpack(config) {
    config.resolve.alias['@backend'] = path.join(__dirname, 'backend')
    config.resolve.alias['@components'] = path.join(__dirname, 'components')
    config.resolve.alias['@constants'] = path.join(__dirname, 'constants')
    config.resolve.alias['@helpers'] = path.join(__dirname, 'helpers')
    config.resolve.alias['@pages'] = path.join(__dirname, 'pages')
    config.resolve.alias['@styles'] = path.join(__dirname, 'styles')
    return config
  },
}

module.exports = withCss(withPurgeCss({
  purgeCssEnabled: ({ dev, isServer }) => (!dev && !isServer),
  purgeCss: {
    whitelist: () => [
      'spinner',
      'bar',
      'peg',
      'loader',
      'one',
      'two',
      'three',
      'four',
      'five'
    ],
    whitelistPatterns: [
      /nprogress/,
      /ril/,
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  },
  ...config
}))
