import React, { HtmlHTMLAttributes } from 'react'
import cx from 'classnames'

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'sub' | 'body'
type Weight = 'light' | 'regular' | 'bold'
type Transform = 'capitalize' | 'lowercase' | 'underline' | 'uppercase'

interface Props extends HtmlHTMLAttributes<{}> {
  variant?: Variant
  weight?: Weight
  transform?: Transform
  italic?: boolean
  className?: string
  children: React.ReactNode
}

const getElement = (variant: Variant): string => {
  if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].indexOf(variant) > 0) {
    return variant
  }

  return 'p'
}

const getFontSize = (variant: Variant): string => {
  switch (variant) {
    case 'h1':
      return 'tw-text-5xl lg:tw-text-6xl'
    case 'h2':
      return 'tw-text-4xl lg:tw-text-5xl'
    case 'h3':
      return 'tw-text-3xl lg:tw-text-4xl'
    case 'h4':
      return 'tw-text-2xl lg:tw-text-3xl'
    case 'h5':
      return 'tw-text-xl lg:tw-text-2xl'
    case 'h6':
      return 'tw-text-lg lg:tw-text-xl'
    case 'sub':
      return 'tw-text-sm'
    default:
      return 'tw-text-base'
  }
}

const Text: React.FC<Props> = ({
  variant = 'body',
  weight,
  transform,
  italic = false,
  className = '',
  children,
  ...other
}) =>
  React.createElement(getElement(variant), {
    className: cx(
      getFontSize(variant),
      {
        [`tw-font-${weight}`]: weight !== undefined,
        [`tw-${transform}`]: transform !== undefined,
        'tw-italic': italic
      },
      className
    ),
    children,
    ...other
  })

export default Text
