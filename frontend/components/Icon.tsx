import React from 'react'
import cx from 'classnames'

type Size = 'sm' | 'md' | 'lg'
type Variant = 'primary' | 'secondary' | 'custom'

interface Props extends React.HTMLAttributes<{}> {
  size?: Size
  variant?: Variant
}

const Icon: React.FC<Props> = ({
  size = 'md',
  variant = 'primary',
  className,
  ...other
}) =>
  React.createElement('span', {
    className: cx(
      'inline-block cursor-pointer h-auto',
      {
        'w-4': size === 'sm',
        'w-6': size === 'md',
        'w-8': size === 'lg',
        'text-blue hover:text-blue-darker': variant === 'primary',
        'text-gray-500 hover:text-gray-700': variant === 'secondary'
      },
      className
    ),
    ...other
  })

export default Icon
