import React from 'react'
import './jurat.scss'
import jurat from '../../../assets/images/personal/Jurat.jpg'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { useNavigate } from 'react-router-dom';

const Jurat = () => {

let history = useNavigate();

  return (
    <div className='jurat'>
        <div className="container">
            <div className="left">
                <button onClick={() => history('/prelims/personal/MOA')} className='button'><ArrowBackIosIcon/></button>
            </div>
            <div className="center">
                <img src={jurat} alt="Jurat" className='image' width="100%" height={660}/>
            </div>
            <div className="right">
                <button onClick={() => history('/prelims/personal')} className='close'><HighlightOffRoundedIcon/></button>
                <button onClick={() => history('/prelims/personal/MDR')} className='button'><ArrowForwardIosIcon/></button>
            </div>
        </div>
    </div>
  )
}

export default Jurat