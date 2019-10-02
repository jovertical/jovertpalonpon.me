import '../styles/app.css'

import * as React from 'react'
import Next from 'next/app'

export default class App extends Next {
    render(): React.ReactElement {
        const { Component, pageProps } = this.props

        return <Component {...pageProps} />
    }
}
