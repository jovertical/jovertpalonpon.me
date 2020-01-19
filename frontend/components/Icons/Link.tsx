import React from 'react'

const Link: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className,
  ...other
}) => (
    <svg
      className={`fill-current ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...other}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M8,12a1,1,0,0,0,1,1h6a1,1,0,0,0,0-2H9A1,1,0,0,0,8,12Zm2,3H7A3,3,0,0,1,7,9h3a1,1,0,0,0,0-2H7A5,5,0,0,0,7,17h3a1,1,0,0,0,0-2Zm7-8H14a1,1,0,0,0,0,2h3a3,3,0,0,1,0,6H14a1,1,0,0,0,0,2h3A5,5,0,0,0,17,7Z"
      />
    </svg>
  )

export default Link
