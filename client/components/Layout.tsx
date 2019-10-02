import * as React from 'react'
import Header from '../components/Header'

interface Props {
    children?: React.ReactNode
}

const Layout: React.FC = (props: Props): React.ReactElement => (
    <div>
        <Header />

        <main>{props.children}</main>
    </div>
)

export default Layout
