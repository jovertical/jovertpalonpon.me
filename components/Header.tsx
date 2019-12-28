import React, { useState } from 'react'
import { useRouter } from 'next/router'
import cx from 'classnames'
import Button from '@components/Button'
import Link, { ExternalLink, Props as LinkProps } from '@components/Link'
import Logo from '@components/Logo'
import { social } from '@constants/links'
import { range } from '@helpers/utils'

interface MenuLink extends LinkProps {
  external?: boolean
  active?: boolean
  className?: string
}

const MenuLinkItem: React.FC<MenuLink> = ({
  active,
  external,
  children,
  className,
  ...link
}) => (
  <div className={className}>
    {external ? (
      <ExternalLink {...link}>{children}</ExternalLink>
    ) : (
      <Link
        {...link}
        className={cx({
          'tw-text-blue': active
        })}
      >
        {children}
      </Link>
    )}
  </div>
)

const Header: React.FC = (): React.ReactElement => {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)

  const links: MenuLink[] = [
    {
      href: '/projects',
      variant: 'primary',
      children: 'Projects',
      active: router.asPath === '/projects'
    },

    {
      href: '/',
      variant: 'primary',
      children: 'Blog'
    },

    {
      href: social.cv,
      variant: 'primary',
      children: 'Resumé',
      external: true
    },

    {
      href: '/',
      variant: 'custom',
      children: <Button>Contact</Button>
    }
  ]

  return (
    <nav className="tw-py-5 tw-bg-white">
      <div className="tw-hidden lg:tw-flex tw-items-center tw-w-4/5 tw-mx-auto">
        <div className="tw-flex-grow">
          <Logo size="sm" />
        </div>

        {links.map((link, i) => (
          <MenuLinkItem key={i} className="tw-px-4" {...link} />
        ))}
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

            {links.map((link, i) => (
              <MenuLinkItem key={i} className="tw-py-2" {...link} />
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header
