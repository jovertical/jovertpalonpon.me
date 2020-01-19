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
      return 'text-5xl lg:text-6xl'
    case 'h2':
      return 'text-4xl lg:text-5xl'
    case 'h3':
      return 'text-3xl lg:text-4xl'
    case 'h4':
      return 'text-2xl lg:text-3xl'
    case 'h5':
      return 'text-xl lg:text-2xl'
    case 'h6':
      return 'text-lg lg:text-xl'
    case 'sub':
      return 'text-sm'
    default:
      return 'text-base'
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
        [`font-${weight}`]: weight !== undefined,
        [`${transform}`]: transform !== undefined,
        italic: italic
      },
      className
    ),
    children,
    ...other
  })

export default Text
