import React from 'react'
import Next from 'next/app'
import Router from 'next/router'
import ReactGA from 'react-ga'
import NProgress from 'nprogress'
import '@frontend/styles/app.css'
import '@frontend/styles/nprogress.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default class App extends Next {
  componentDidMount(): void {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize('UA-155139374-1')
      ReactGA.pageview(window.location.pathname + window.location.search)
    }
  }

  render(): React.ReactElement {
    const { Component, pageProps } = this.props

    return (
      <React.Fragment>
        <style global jsx>
          {' '}
          {`
            @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap');

            html {
              box-sizing: border-box;
            }

            body {
              font-family: 'Open Sans', sans-serif;
              background-color: #edf2f7;
            }
          `}
        </style>

        <Component {...pageProps} />
      </React.Fragment>
    )
  }
}
