import React from 'react'

const ArrowRight: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className,
  ...other
}) => (
  <svg
    className={`tw-fill-current ${className}`}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...other}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"
    />
  </svg>
)

export default ArrowRight
