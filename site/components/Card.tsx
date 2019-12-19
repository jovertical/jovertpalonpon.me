import React from 'react'
import cx from 'classnames'

interface Props extends React.HtmlHTMLAttributes<{}> {
  expand?: boolean
}

const Card: React.FC<Props> = ({ expand = false, children, className }) => (
  <div
    className={cx(
      'tw-h-full tw-text-center tw-bg-white tw-rounded tw-border hover:tw-shadow-md',
      {
        'tw-p-8': !expand
      },
      className
    )}
  >
    {children}
  </div>
)

export default Card
