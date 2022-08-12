import React from 'react'
import './vaxcard.scss'
import vaxcard from '../../../assets/images/personal/Vaxcard.jpg'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { useNavigate } from 'react-router-dom';

const Vaxcard = () => {

let history = useNavigate();

  return (
    <div className='vaxcard'>
        <div className="container">
            <div className="left">
                <button onClick={() => history('/prelims/personal/philhealthID')} className='button'><ArrowBackIosIcon/></button>
            </div>
            <div className="center">
                <img src={vaxcard} alt="Vaxcard" className='image' width="100%" height={660}/>
            </div>
            <div className="right">
                <button onClick={() => history('/prelims/personal')} className='close'><HighlightOffRoundedIcon/></button>
                <button onClick={() => history('/prelims/personal/CV')} className='button'><ArrowForwardIosIcon/></button>
            </div>
        </div>
    </div>
  )
}

export default Vaxcard