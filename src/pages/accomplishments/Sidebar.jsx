import React from 'react'
import './sidebar.scss'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import NotesIcon from '@mui/icons-material/Notes';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='box'>
        <div className="line"></div>
        <div className="container">
            <div className="report">
                <NotesIcon className='icon'/>
                Weekly Narrative
            </div>
            <div className="week">
                <ArrowRightIcon/>
                <Link to='./week1' className='link'>
                    Week 1 
                </Link>
            </div>
            <div className="week">
                <ArrowRightIcon/>
                <Link to='./week2' className='link'>
                    Week 2 
                </Link>
            </div>
            <div className="week">
                <ArrowRightIcon/>
                <Link to='./week3' className='link'>
                    Week 3
                </Link>
            </div>
            <div className="week">
                <ArrowRightIcon/>
                <Link to='./week4' className='link'>
                    Week 4
                </Link>
            </div>
            <div className="week">
                <ArrowRightIcon/>
                <Link to='./week5' className='link'>
                    Week 5
                </Link>
            </div>
            <div className="certificates">
                <InsertDriveFileIcon className='icon'/>
                Certificates
            </div>
            <div className="certs">
                <ArrowRightIcon/>
                <Link to='./fire' className='link'>
                    Fire Detection and <br/> Alarm System
                </Link>
            </div>
            <div className="certs">
                <ArrowRightIcon/>
                <Link to='./emergency' className='link'>
                    Emergency Lighting <br/>System
                </Link>
            </div>
            <div className="certs">
                <ArrowRightIcon/>
                <Link to='./completion' className='link'>
                    Certificate of <br/>Completion
                </Link>
            </div>
            <div className="time-record">
                <AccessTimeIcon className='icon'/>
                Daily Time Record
            </div>
            <div className="certs">
                <ArrowRightIcon/>
                <Link to='./DTR' className='link'>
                    DTR Copy
                </Link>
            </div>
            <div className="rating">
                <AssessmentIcon className='icon'/>
                Rating Sheet
            </div>
            <div className="certs">
                <ArrowRightIcon/>
                <Link to='./rating' className='link'>
                    Rating Sheet
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Sidebar