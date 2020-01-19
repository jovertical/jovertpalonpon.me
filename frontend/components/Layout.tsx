import React from 'react'
import Header from '@frontend/components/Header'
import Footer from '@frontend/components/Footer'

const Layout: React.FC = ({ children, ...other }) => {
  return (
    <div {...other}>
      <Header />

      <main className="mb-5">{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
