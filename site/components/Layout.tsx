import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

interface Props {
    children?: React.ReactNode
}

const Layout: React.FC = (props: Props): React.ReactElement => (
    <div>
        <Header />

        <main className="tw-mb-5">{props.children}</main>

        <Footer />
    </div>
)

export default Layout
