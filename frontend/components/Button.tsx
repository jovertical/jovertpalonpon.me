import React, { forwardRef } from 'react'
import cx from 'classnames'

type Variant = 'primary' | 'secondary' | 'text'

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
}) => {
  return (
    <button
      className={cx(
        'inline-block rounded-full text-white text-sm tracking-wide font-semibold focus:outline-none',
        {
          'px-3 py-1 text-sm': size === 'sm',
          'px-5 py-2 text-base': size === 'md',
          'px-7 py-3 text-lg': size === 'lg'
        },
        {
          'bg-blue text-white hover:shadow-md focus:shadow-outline':
            variant === 'primary',
          'bg-white border-2 border-white text-gray-900 hover:text-blue focus:shadow-outline':
            variant === 'secondary'
        },
        className
      )}
      {...other}
    >
      {children}
    </button>
  )
}

// @TODO: remove `forwardRef` once Next.js' warning (when this component is used as child) is gone.
// eslint-disable-next-line
export default forwardRef((props: Props, ref) => <Button {...props} />)
