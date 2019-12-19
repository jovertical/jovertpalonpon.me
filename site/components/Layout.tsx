import React from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'

const Layout: React.FC<React.HtmlHTMLAttributes<{}>> = ({
  children,
  ...other
}) => (
  <div {...other}>
    <Header />

    <main className="tw-mb-5">{children}</main>

    <Footer />
  </div>
)

export default Layout
