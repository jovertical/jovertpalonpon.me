import React from 'react'
import Link from 'next/link'
import cx from 'classnames'

interface Props extends React.HtmlHTMLAttributes<{}> {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

const Logo: React.FC<Props> = ({
  variant = 'primary',
  size = 'md',
  className,
  ...other
}) => (
  <Link href="/">
    <img
      alt="Logo"
      src={variant === 'secondary' ? '/png/logo-white.png' : '/png/logo.png'}
      className={cx(
        'cursor-pointer',
        {
          'w-16': size === 'sm',
          'w-20': size === 'md',
          'w-24': size === 'lg'
        },
        className
      )}
      {...other}
    />
  </Link>
)

export default Logo
