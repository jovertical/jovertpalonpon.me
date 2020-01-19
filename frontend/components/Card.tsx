import React from 'react'
import cx from 'classnames'

interface Props extends React.HtmlHTMLAttributes<{}> {
  expand?: boolean
}

const Card: React.FC<Props> = ({ expand = false, children, className }) => {
  return (
    <div
      className={cx(
        'h-full text-center bg-white rounded border hover:shadow-md',
        {
          'p-8': !expand
        },
        className
      )}
    >
      {children}
    </div>
  )
}

export default Card
