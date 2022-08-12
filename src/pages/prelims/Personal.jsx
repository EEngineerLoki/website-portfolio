import React from 'react'
import './personal.scss'
import COR from '../../../src/assets/images/personal/COR.png'
import CV1 from '../../../src/assets/images/personal/CV1.png'
import Waiver from '../../../src/assets/images/personal/Waiver.png'
import Workplan from '../../../src/assets/images/personal/training.jpg'
import MOA from '../../../src/assets/images/personal/MOA.png'
import Jurat from '../../../src/assets/images/personal/Jurat.jpg'
import MDR from '../../../src/assets/images/personal/MDR.jpg'
import SchoolID from '../../../src/assets/images/personal/SchoolID.jpg'
import PhilhealthID from '../../../src/assets/images/personal/PhilhealthID.jpg'
import Vaxcard from '../../../src/assets/images/personal/Vaxcard.jpg'
import { Link, Outlet } from 'react-router-dom'

const Personal = () => {
  return (
    <div className="personal-reqs">
        <div className="top">
            <div className="file">
                <div className="container">
                    <Link to='./CV' className='link'>
                        <img src={CV1} alt="CV" width='100%' height='100%'/>
                        <div className="label">Curriculum Vitae</div>
                    </Link>
                </div>
            </div>
            <div className="file">
                <div className="container">
                    <Link to='./COR' className='link'>
                        <img src={COR} alt="COR" width='100%' height='100%'/>
                        <div className="label">Certificate of Registration</div>
                    </Link>
                </div>
            </div>
            <div className="file">
                <div className="container">
                    <Link to='./waiver' className='link'>
                        <img src={Waiver} alt="Waiver" width='100%' height='100%'/>
                        <div className="label">Training Waiver</div>
                    </Link>
                </div>
            </div>
            <div className="file">
                <div className="container">
                    <Link to='./workplan' className='link'>
                        <img src={Workplan} alt="Workplan" width='100%' height='100%'/>
                        <div className="label">Training Workplan</div>
                    </Link>
                </div>
            </div>
            <div className="file">
                <div className="container">
                    <Link to='./MOA' className='link'>
                        <img src={MOA} alt="MOA" width='100%' height='100%'/>
                        <div className="label">Memorandum of Agreement</div>
                    </Link>
                </div>
            </div>
        </div>
        <div className="bottom">
            <div className="file">
                <div className="container">
                    <Link to='./jurat' className='link'>
                        <img src={Jurat} alt="MOA" width='100%' height='100%'/>
                        <div className="label">Jurat</div>
                    </Link>
                </div>
            </div>
            <div className="file">
                <div className="container">
                    <Link to='./MDR' className='link'>
                        <img src={MDR} alt="MDR" width='100%' height='100%'/>
                        <div className="label">Medical Data Record</div>
                    </Link>
                </div>
            </div>
            <div className="file">
                <div className="container">
                    <Link to='./SchoolID' className='link'>
                        <img src={SchoolID} alt="School ID" width='100%' height='100%'/>
                        <div className="label">School ID</div>
                    </Link>
                </div>
            </div>
            <div className="file">
                <div className="container">
                    <Link to='./philhealthID' className='link'>
                        <img src={PhilhealthID} alt="Philhealth ID" width='100%' height='100%'/>
                        <div className="label">Philhealth ID</div>
                    </Link>
                </div>
            </div>
            <div className="file">
                <div className="container">
                    <Link to='./vaxcard' className='link'>
                        <img src={Vaxcard} alt="Vax Card" width='100%' height='100%'/>
                        <div className="label">Vaccination Card</div>
                    </Link>
                </div>
            </div>
        </div>
        <Outlet/>
    </div>
  )
}

export default Personal