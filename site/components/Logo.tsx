import React from 'react'
import Link from 'next/link'
import cx from 'classnames'

interface Props extends React.HtmlHTMLAttributes<{}> {
  variant?: 'default' | 'white'
}

const Logo: React.FC<Props> = ({
  variant = 'default',
  className,
  ...other
}) => (
  <Link href="/">
    <a title="home">
      <img
        alt="Logo"
        src={variant === 'white' ? '/png/logo-white.png' : '/png/logo.png'}
        className={cx('tw-w-24', className)}
        {...other}
      />
    </a>
  </Link>
)

export default Logo
