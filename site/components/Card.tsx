import React from 'react'

const Card: React.FC = ({ children }) => (
  <div className="tw-h-full tw-text-center tw-p-8 tw-bg-white tw-rounded tw-border hover:tw-shadow-lg">
    {children}
  </div>
)

export default Card