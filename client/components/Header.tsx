import * as React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const Button = dynamic(() => import('../components/Button'))

const Header: React.FC = (): React.ReactElement => (
    <ul>
        <li>
            <Link href="/">
                <a>Home</a>
            </Link>
        </li>
        <li>
            <Link href="/projects">
                <a>Projects</a>
            </Link>
        </li>
        <li>
            <Link href="/contact">
                <Button>Contact</Button>
            </Link>
        </li>
    </ul>
)

export default Header
