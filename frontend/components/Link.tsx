import React, { forwardRef } from 'react'
import NextLink from 'next/link'
import cx from 'classnames'

export interface Props extends React.AnchorHTMLAttributes<{}> {
  href?: string
  variant?: 'default' | 'primary' | 'secondary' | 'custom'
  className?: string
  children: React.ReactNode
}

interface LinkProps extends Props {
  as?: string
}

// eslint-disable-next-line
const RawLink: React.FC<Props> = forwardRef(
  ({ href, variant, className, children, ...other }, ref) => {
    return (
      <a
        title={href}
        href={href}
        className={cx(
          'cursor-pointer',
          {
            'hover:underline': variant === 'default',
            'hover:text-blue': variant === 'primary',
            'text-white hover:underline': variant === 'secondary'
          },
          className
        )}
        {...other}
      >
        {children}
      </a>
    )
  }
)

export const ExternalLink: React.FC<Props> = ({ ...other }) => (
  <RawLink target="_blank" rel="noopener noreferrer" {...other} />
)

const Link: React.FC<LinkProps> = ({
  href = '/',
  as = undefined,
  variant = 'default',
  ...other
}) => {
  return (
    <NextLink href={href} as={as}>
      <RawLink href={undefined} variant={variant} {...other} />
    </NextLink>
  )
}

export default Link
