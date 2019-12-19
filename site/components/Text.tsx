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
      return '6xl'
    case 'h2':
      return '5xl'
    case 'h3':
      return '4xl'
    case 'h4':
      return '3xl'
    case 'h5':
      return '2xl'
    case 'h6':
      return 'xl'
    case 'sub':
      return 'sm'
    default:
      return 'base'
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
      `tw-text-${getFontSize(variant)}`,
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
