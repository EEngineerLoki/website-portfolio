import React from 'react'
import './mdr.scss'
import mdr from '../../../assets/images/personal/MDR.jpg'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { useNavigate } from 'react-router-dom';

const MDR = () => {

let history = useNavigate();

  return (
    <div className='mdr'>
        <div className="container">
            <div className="left">
                <button onClick={() => history('/prelims/personal/jurat')} className='button'><ArrowBackIosIcon/></button>
            </div>
            <div className="center">
                <img src={mdr} alt="MDR" className='image' width="100%" height={660}/>
            </div>
            <div className="right">
                <button onClick={() => history('/prelims/personal')} className='close'><HighlightOffRoundedIcon/></button>
                <button onClick={() => history('/prelims/personal/SchoolID')} className='button'><ArrowForwardIosIcon/></button>
            </div>
        </div>
    </div>
  )
}

export default MDR