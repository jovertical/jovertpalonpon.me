import React, { useState } from 'react'
import { useRouter } from 'next/router'
import cx from 'classnames'
import Link, {
  ExternalLink,
  Props as LinkProps
} from '@frontend/components/Link'
import Logo from '@frontend/components/Logo'
import Contact from '@frontend/components/Modals/Contact'
import { social } from '@frontend/constants/links'
import { range } from '@frontend/helpers/utils'

interface MenuLink extends LinkProps {
  external?: boolean
  active?: boolean
  className?: string
}

const MenuLink: React.FC<MenuLink> = ({
  active,
  external,
  children,
  className,
  ...link
}) => {
  return (
    <div className={className}>
      {!link.href ? (
        children
      ) : external ? (
        <ExternalLink {...link}>{children}</ExternalLink>
      ) : (
            <Link
              {...link}
              className={cx({
                'text-blue': active
              })}
            >
              {children}
            </Link>
          )}
    </div>
  )
}

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
      variant: 'custom',
      children: <Contact />
    }
  ]

  return (
    <nav className="py-5 bg-white">
      <div className="hidden lg:flex items-center w-4/5 mx-auto">
        <div className="flex-grow">
          <Logo size="sm" />
        </div>

        {links.map((link, i) => (
          <MenuLink key={i} className="px-4" {...link} />
        ))}
      </div>

      <div className="lg:hidden">
        <div className="flex justify-end">
          <div className="p-4" onClick={(): void => setMenuOpen(!menuOpen)}>
            <div className={cx({ 'mt-2': menuOpen })}>
              {Array.from(range(1, 3)).map(item => (
                <div
                  className={cx(
                    'w-4 h-px my-1 bg-black transition-500',
                    {
                      '-rotate-45 w-5': menuOpen && item === 1,
                      'hidden': menuOpen && item === 2,
                      'rotate-45 w-5 -mt-1': menuOpen && item === 3
                    }
                  )}
                  key={item}
                />
              ))}
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="flex flex-col text-center border-b pb-6">
            <div className="inline-block mx-auto">
              <Logo />
            </div>

            {links.map((link, i) => (
              <MenuLink key={i} className="py-2" {...link} />
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header
