import React from 'react'
import './cor.scss'
import cor from '../../../assets/images/personal/COR.png'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { useNavigate } from 'react-router-dom';

const COR = () => {

let history = useNavigate();

  return (
    <div className='COR'>
        <div className="container">
            <div className="left">
                <button onClick={() => history('/prelims/personal/CV')} className='button'><ArrowBackIosIcon/></button>
            </div>
            <div className="center">
                <img src={cor} alt="COR" className='image' width="100%" height={660}/>
            </div>
            <div className="right">
                <button onClick={() => history('/prelims/personal')} className='close'><HighlightOffRoundedIcon/></button>
                <button onClick={() => history('/prelims/personal/waiver')} className='button'><ArrowForwardIosIcon/></button>
            </div>
        </div>
    </div>
  )
}

export default COR