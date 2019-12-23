import React, { useState } from 'react'
import { useRouter } from 'next/router'
import cx from 'classnames'
import Button from '@components/Button'
import Link from '@components/Link'
import Logo from '@components/Logo'
import { range } from '@helpers/utils'

const Header: React.FC = (): React.ReactElement => {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="tw-py-5 tw-bg-white">
      <div className="tw-hidden lg:tw-flex tw-items-center tw-w-4/5 tw-mx-auto">
        <div className="tw-flex-grow">
          <Logo size="sm" />
        </div>

        <div className="tw-px-4">
          <Link
            href="/projects"
            className={cx({
              'tw-text-blue': router.asPath === '/projects'
            })}
            variant="primary"
          >
            Projects
          </Link>
        </div>

        <div className="tw-px-4">
          <Link href="/" variant="primary">
            Blog
          </Link>
        </div>

        <div className="tw-px-4">
          <Button variant="primary">Contact</Button>
        </div>
      </div>

      <div className="lg:tw-hidden">
        <div className="tw-flex tw-justify-end">
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
            <div className="tw-inline-block tw-mx-auto">
              <Logo />
            </div>

            <div className="tw-py-2">
              <Link href="/projects">Projects</Link>
            </div>

            <div className="tw-py-2">
              <Link href="/">Blog</Link>
            </div>

            <div className="tw-py-2">
              <Link href="/" variant="custom">
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
