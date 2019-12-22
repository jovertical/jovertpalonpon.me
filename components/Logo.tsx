import React from 'react'
import Link from 'next/link'
import cx from 'classnames'

interface Props extends React.HtmlHTMLAttributes<{}> {
  variant?: 'primary' | 'secondary'
}

const Logo: React.FC<Props> = ({
  variant = 'primary',
  className,
  ...other
}) => (
  <Link href="/">
    <a title="home">
      <img
        alt="Logo"
        src={variant === 'secondary' ? '/png/logo-white.png' : '/png/logo.png'}
        className={cx('tw-w-24', className)}
        {...other}
      />
    </a>
  </Link>
)

export default Logo
