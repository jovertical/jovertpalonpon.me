import React, { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import cx from 'classnames'
import { range } from '@helpers/utils'
const Button = dynamic(() => import('@components/Button'))

const Header: React.FC = (): React.ReactElement => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="tw-py-5">
      <div className="tw-hidden lg:tw-flex tw-items-center tw-w-4/5 tw-mx-auto">
        <div className="tw-p-4 tw-flex-grow tw-font-bold">
          <Link href="/">
            <a title="home">Jovert P.</a>
          </Link>
        </div>

        <div className="tw-px-4">
          <Link href="/projects">
            <a className="hover:tw-text-blue-500">Projects</a>
          </Link>
        </div>

        <div className="tw-px-4">
          <Link href="/blog">
            <a className="hover:tw-text-blue-500">Blog</a>
          </Link>
        </div>

        <div className="tw-px-4">
          <Link href="/contact">
            <Button>Contact</Button>
          </Link>
        </div>
      </div>

      <div className="lg:tw-hidden">
        <div className="tw-flex tw-justify-between">
          <div className="tw-p-4 tw-font-bold">
            <Link href="/">
              <a title="home">Jovert P.</a>
            </Link>
          </div>
          <div className="tw-p-4" onClick={(): void => setMenuOpen(!menuOpen)}>
            <div className={cx({ 'tw-mt-2': menuOpen })}>
              {Array.from(range(1, 3)).map(item => (
                <div
                  className={cx(
                    'tw-w-4 tw-h-px tw-my-1 tw-bg-black tw-transition-500',
                    {
                      'tw--rotate-45 tw-w-5': menuOpen && item === 1,
                      'tw-hidden': menuOpen && item === 2,
                      'tw-rotate-45 tw-w-5 tw--mt-1': menuOpen && item === 3
                    }
                  )}
                  key={item}
                />
              ))}
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="tw-flex tw-flex-col tw-text-center tw-border-b tw-pb-6">
            <div className="tw-py-2">
              <Link href="/projects">
                <a className="hover:tw-text-blue-500">Projects</a>
              </Link>
            </div>

            <div className="tw-py-2">
              <Link href="/blog">
                <a className="hover:tw-text-blue-500">Blog</a>
              </Link>
            </div>

            <div className="tw-py-2">
              <Link href="/contact">
                <Button>Contact</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header
