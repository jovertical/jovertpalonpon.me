import React from 'react'

const AngleRight: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
      d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"
    />
  </svg>
)

export default AngleRight
