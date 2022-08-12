import React from 'react'
import './moa.scss'
import moa from '../../../assets/images/personal/MOA.png'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { useNavigate } from 'react-router-dom';

const MOA = () => {

let history = useNavigate();

  return (
    <div className='MOA'>
        <div className="container">
            <div className="left">
                <button onClick={() => history('/prelims/personal/workplan')} className='button'><ArrowBackIosIcon/></button>
            </div>
            <div className="center">
                <img src={moa} alt="MOA" className='image' width="100%" height={660}/>
            </div>
            <div className="right">
                <button onClick={() => history('/prelims/personal')} className='close'><HighlightOffRoundedIcon/></button>
                <button onClick={() => history('/prelims/personal/jurat')} className='button'><ArrowForwardIosIcon/></button>
            </div>
        </div>
    </div>
  )
}

export default MOA