import React from 'react'
import './resume.scss'
import resume from '../../../assets/images/company/Resume.png'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { useNavigate } from 'react-router-dom';

const Workplan = () => {

let history = useNavigate();

  return (
    <div className='resume'>
        <div className="container">
            <div className="left">
                <button onClick={() => history('/prelims/company/companyletter')} className='button'><ArrowBackIosIcon/></button>
            </div>
            <div className="center">
                <img src={resume} alt="Workplan" className='image' width="100%" height={660}/>
            </div>
            <div className="right">
                <button onClick={() => history('/prelims/company')} className='close'><HighlightOffRoundedIcon/></button>
                <button onClick={() => history('/prelims/company/application')} className='button'><ArrowForwardIosIcon/></button>
            </div>
        </div>
    </div>
  )
}

export default Workplan