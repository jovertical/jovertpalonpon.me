const path = require('path')
const withCss = require('@zeit/next-css')
const withPurgeCss = require('next-purgecss')

const config = {
  env: {
    APP_URL: process.env.APP_URL,
    DATABASE_URL: process.env.DATABASE_URL,
    MAIL_USERNAME: process.env.MAIL_USERNAME,
    MAIL_PASSWORD: process.env.MAIL_PASSWORD,
  },
  webpack(config) {
    config.resolve.alias['@backend'] = path.join(__dirname, 'backend')
    config.resolve.alias['@frontend'] = path.join(__dirname, 'frontend')
    config.resolve.alias['@pages'] = path.join(__dirname, 'pages')
    return config
  },
}

module.exports = withCss(withPurgeCss({
  purgeCssEnabled: ({ dev, isServer }) => (!dev && !isServer),
  purgeCssPaths: [
    'pages/**/*',
    'frontend/components/**/*',
  ],
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
