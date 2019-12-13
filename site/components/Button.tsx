import React from 'react'
import cx from 'classnames'

type Variant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'text'

interface Props extends React.ButtonHTMLAttributes<{}> {
  variant?: Variant
  children?: React.ReactNode
  className?: string
}

const Button: React.FC<Props> = ({
  variant = 'primary',
  children,
  className = '',
  ...other
}): React.ReactElement => (
  <button
    className={cx(
      'tw-inline-block tw-px-5 tw-py-2 tw-rounded-full tw-text-white tw-text-sm tw-tracking-wide tw-font-semibold focus:tw-outline-none',
      {
        'tw-bg-transparent hover:tw-bg-blue-500 tw-border-2 tw-border-blue-500 tw-text-blue-500 hover:tw-text-white focus:tw-shadow-outline':
          variant === 'primary'
      }
    )}
    {...other}
  >
    {children}
  </button>
)

export default Button
