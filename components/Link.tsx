import React, { forwardRef, useRef } from 'react'
import NextLink from 'next/link'
import cx from 'classnames'

interface Props extends React.AnchorHTMLAttributes<{}> {
  href?: string
  variant?: 'primary' | 'secondary' | 'custom'
  className?: string
  children: React.ReactNode
}

interface LinkProps extends Props {
  as?: string
}

// eslint-disable-next-line
const RawLink: React.FC<Props> = forwardRef(
  ({ href, variant, className, children, ...other }, ref) => (
    <a
      title={href}
      href={href}
      className={cx(
        'tw-cursor-pointer',
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
  )
)

export const ExternalLink: React.FC<Props> = ({ ...other }) => (
  <RawLink target="_blank" rel="noopener noreferrer" {...other} />
)

const Link: React.FC<LinkProps> = ({
  href = '/',
  as = undefined,
  variant = 'primary',
  ...other
}) => {
  return (
    <NextLink href={href} as={as}>
      <RawLink href={undefined} variant={variant} {...other} />
    </NextLink>
  )
}

export default Link
