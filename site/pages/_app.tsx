import React from 'react'
import Next from 'next/app'
import '@styles/app.css'

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
          }
        `}</style>

        <Component {...pageProps} />
      </>
    )
  }
}
