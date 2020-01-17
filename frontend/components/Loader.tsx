import React from 'react'
import '@frontend/styles/loader.css'

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <div className="one"></div>
      <div className="two"></div>
      <div className="three"></div>
      <div className="four"></div>
      <div className="five"></div>
    </div>
  )
}

export default Loader
