const path = require('path')
const fetch = require('isomorphic-unfetch')
const withCss = require('@zeit/next-css')
const withPurgeCss = require('next-purgecss')

const API_URL = process.env.API_URL || 'https://jovertpalonpon.herokuapp.com'
const isProduction = process.env.NODE_ENV === 'production'
const config = {
  env: {
    API_URL
  },
  webpack(config) {
    config.resolve.alias['@components'] = path.join(__dirname, 'components')
    config.resolve.alias['@constants'] = path.join(__dirname, 'constants')
    config.resolve.alias['@helpers'] = path.join(__dirname, 'helpers')
    config.resolve.alias['@styles'] = path.join(__dirname, 'styles')
    return config
  },
}

if (isProduction) {
  config.exportTrailingSlash = true
  config.exportPathMap = async function () {
    const paths = {
      '/': { page: '/' },
      '/projects': { page: '/projects' },
    }

    const res = await fetch(API_URL + '/projects')
    const projects = await res.json()

    projects.forEach(({ slug }) => {
      paths[`/projects/${slug}`] = {
        page: '/projects/[slug]', query: { slug }
      }
    })

    return paths
  }
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
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  },
  ...config
}))
