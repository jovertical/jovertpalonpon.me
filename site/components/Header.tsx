import React, { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const Button = dynamic(() => import('@components/Button'))

const Header: React.FC = (): React.ReactElement => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
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
            <div
              className="tw-p-4"
              onClick={(): void => setMenuOpen(!menuOpen)}
            >
              <div
                className={`${
                  menuOpen ? 'menu-open' : ''
                } tw-inline-block tw-cursor-pointer`}
              >
                <div className="bar bar-1 tw-my-1 tw-bg-black"></div>
                <div className="bar bar-2 tw-my-1 tw-bg-black"></div>
                <div className="bar bar-3 tw-my-1 tw-bg-black"></div>
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

      <style jsx>{`
        .bar {
          height: 1px;
          width: 20px;
          transition: 0.5s;
        }

        .menu-open .bar-2 {
          display: none;
        }

        .menu-open .bar-1 {
          -webkit-transform: rotate(-45deg) translate(2px, 5px);
          transform: rotate(-45deg) translate(2px, 5px);
        }

        .menu-open .bar-3 {
          -webkit-transform: rotate(45deg) translate(2px, -5px);
          transform: rotate(45deg) translate(2px, -5px);
        }
      `}</style>
    </>
  )
}

export default Header
