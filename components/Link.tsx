import React from 'react'
import NextLink from 'next/link'
import cx from 'classnames'
import { UrlObject } from 'url'

interface Props {
  href?: string
  as?: string | UrlObject
  variant?: 'primary' | 'secondary'
  className?: string
  children: React.ReactNode
}

const Link: React.FC<Props> = ({
  href = '/',
  as = undefined,
  variant = 'primary',
  children,
  className,
  ...other
}) => (
  <NextLink href={href} as={as}>
    <a
      className={cx(
        {
          'hover:tw-text-blue': variant === 'primary',
          'tw-text-white hover:tw-underline': variant === 'secondary'
        },
        className
      )}
      {...other}
    >
      {children}
    </a>
  </NextLink>
)

export default Link
