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
      'tw-inline-block tw-cursor-pointer tw-h-auto',
      {
        'tw-w-4': size === 'sm',
        'tw-w-6': size === 'md',
        'tw-w-10': size === 'lg',
        'tw-text-blue-500 hover:tw-text-blue-700': variant === 'primary',
        'tw-text-gray-500 hover:tw-text-gray-700': variant === 'secondary'
      },
      className
    ),
    ...other
  })

export default Icon
