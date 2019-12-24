import React, { forwardRef } from 'react'
import cx from 'classnames'

type Variant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'text'

type Size = 'sm' | 'md' | 'lg'

interface Props extends React.ButtonHTMLAttributes<{}> {
  variant?: Variant
  size?: Size
  children?: React.ReactNode
  className?: string
}

const Button: React.FC<Props> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...other
}): React.ReactElement => (
  <button
    className={cx(
      'tw-inline-block tw-rounded-full tw-text-white tw-text-sm tw-tracking-wide tw-font-semibold focus:tw-outline-none',
      {
        'tw-px-3 tw-py-1 tw-text-sm': size === 'sm',
        'tw-px-5 tw-py-2 tw-text-base': size === 'md',
        'tw-px-7 tw-py-3 tw-text-lg': size === 'lg'
      },
      {
        'tw-bg-blue tw-text-white hover:tw-shadow-md focus:tw-shadow-outline':
          variant === 'primary',
        'tw-bg-white tw-border-2 tw-border-white tw-text-gray-900 hover:tw-text-blue focus:tw-shadow-outline':
          variant === 'secondary'
      },
      className
    )}
    {...other}
  >
    {children}
  </button>
)

// @TODO: remove `forwardRef` once Next.js' warning (when this component is used as child) is gone.
// eslint-disable-next-line
export default forwardRef((props: Props, ref) => <Button {...props} />)
