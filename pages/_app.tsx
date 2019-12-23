import React from 'react'
import Next from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import '@styles/app.css'
import '@styles/nprogress.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default class App extends Next {
  render(): React.ReactElement {
    const { Component, pageProps } = this.props

    return (
      <>
        <style global jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap');

          html {
            box-sizing: border-box;
          }

          body {
            font-family: 'Open Sans', sans-serif;
            background-color: #edf2f7;
          }
        `}</style>

        <Component {...pageProps} />
      </>
    )
  }
}
