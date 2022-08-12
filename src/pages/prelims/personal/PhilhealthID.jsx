import React from 'react'
import './philhealthID.scss'
import philhealthID from '../../../assets/images/personal/PhilhealthID.jpg'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { useNavigate } from 'react-router-dom';

const PhilhealthID = () => {

let history = useNavigate();

  return (
    <div className='philhealthID'>
        <div className="container">
            <div className="left">
                <button onClick={() => history('/prelims/personal/schoolID')} className='button'><ArrowBackIosIcon/></button>
            </div>
            <div className="center">
                <img src={philhealthID} alt="PhilhealthID" className='image' width="100%" height={660}/>
            </div>
            <div className="right">
                <button onClick={() => history('/prelims/personal')} className='close'><HighlightOffRoundedIcon/></button>
                <button onClick={() => history('/prelims/personal/vaxcard')} className='button'><ArrowForwardIosIcon/></button>
            </div>
        </div>
    </div>
  )
}

export default PhilhealthID