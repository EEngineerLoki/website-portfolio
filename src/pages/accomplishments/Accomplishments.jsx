import React from 'react'
import './accomplishments.scss'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Accomplishments = () => {
  return (
    <div className="accomplishments">
      <div className="sidebar"><Sidebar/></div>
      <div className="narrative">
        <Outlet/>
      </div>
    </div>
  )
}

export default Accomplishments