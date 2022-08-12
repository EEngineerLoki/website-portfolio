import React from 'react'
import './prelims.scss'
import { Link, Outlet } from 'react-router-dom'

const Preliminaries = () => {
  return (
    <div className="prelims">
      <div className="tabs">
        <Link to="./personal" className='link'>School Requirements</Link>
        <Link to="./company" className='link'>Company Requirements</Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default Preliminaries