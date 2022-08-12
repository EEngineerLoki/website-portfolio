import React from 'react'
import './waiver.scss'
import waiver from '../../../assets/images/personal/Waiver.png'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { useNavigate } from 'react-router-dom';

const Waiver = () => {

let history = useNavigate();

  return (
    <div className='waiver'>
        <div className="container">
            <div className="left">
                <button onClick={() => history('/prelims/personal/COR')} className='button'><ArrowBackIosIcon/></button>
            </div>
            <div className="center">
                <img src={waiver} alt="COR" className='image' width="100%" height={660}/>
            </div>
            <div className="right">
                <button onClick={() => history('/prelims/personal')} className='close'><HighlightOffRoundedIcon/></button>
                <button onClick={() => history('/prelims/personal/workplan')} className='button'><ArrowForwardIosIcon/></button>
            </div>
        </div>
    </div>
  )
}

export default Waiver