import React from 'react'
import './company.scss'
import Resume from '../../../src/assets/images/company/Resume.png'
import Application from '../../../src/assets/images/company/Application.png'
import Companyletter from '../../../src/assets/images/company/Request for Extension.png'
import { Link, Outlet } from 'react-router-dom'

const Company = () => {
  return (
    <div className='company-reqs'>
        <div className="top">
            <div className="file">
                <div className="container">
                    <Link to='./Resume' className='link'>
                        <img src={Resume} alt="Resume" width='100%' height='100%'/>
                        <div className="label">Resume</div>
                    </Link>
                </div>
            </div>
            <div className="file">
                <div className="container">
                    <Link to='./Application' className='link'>
                        <img src={Application} alt="Application" width='100%' height='100%'/>
                        <div className="label">Application Letter</div>
                    </Link>
                </div>
            </div>
            <div className="file">
                <div className="container">
                    <Link to='./Companyletter' className='link'>
                        <img src={Companyletter} alt="Company Letter" width='100%' height='100%'/>
                        <div className="label">Request for Extension</div>
                    </Link>
                </div>
            </div>
        </div>
        <Outlet/>
    </div>
  )
}

export default Company