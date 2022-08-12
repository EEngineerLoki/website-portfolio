import React from 'react'
import './cv.scss'
import cv from '../../../assets/images/personal/CV.png'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { useNavigate } from 'react-router-dom';

const CV = () => {

let history = useNavigate();

  return (
    <div className='CV'>
        <div className="container">
            <div className="left">
                <button onClick={() => history('/prelims/personal/vaxcard')} className='button'><ArrowBackIosIcon/></button>
            </div>
            <div className="center">
                <img src={cv} alt="CV" className='image' width="100%" height={660}/>
            </div>
            <div className="right">
                <button onClick={() => history('/prelims/personal')} className='close'><HighlightOffRoundedIcon/></button>
                <button onClick={() => history('/prelims/personal/COR')} className='button'><ArrowForwardIosIcon/></button>
            </div>
        </div>
    </div>
  )
}

export default CV