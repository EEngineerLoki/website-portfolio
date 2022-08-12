import React from 'react'
import './workplan.scss'
import workplan from '../../../assets/images/personal/training.jpg'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { useNavigate } from 'react-router-dom';

const Workplan = () => {

let history = useNavigate();

  return (
    <div className='Workplan'>
        <div className="container">
            <div className="left">
                <button onClick={() => history('/prelims/personal/waiver')} className='button'><ArrowBackIosIcon/></button>
            </div>
            <div className="center">
                <img src={workplan} alt="Workplan" className='image' width="100%" height={660}/>
            </div>
            <div className="right">
                <button onClick={() => history('/prelims/personal')} className='close'><HighlightOffRoundedIcon/></button>
                <button onClick={() => history('/prelims/personal/MOA')} className='button'><ArrowForwardIosIcon/></button>
            </div>
        </div>
    </div>
  )
}

export default Workplan