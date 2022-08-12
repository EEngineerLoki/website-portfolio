import React from 'react'
import './companyletter.scss'
import companyletter from '../../../assets/images/company/Request for Extension.png'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { useNavigate } from 'react-router-dom';

const Companyletter = () => {

let history = useNavigate();

  return (
    <div className='companyletter'>
        <div className="container">
            <div className="left">
                <button onClick={() => history('/prelims/company/application')} className='button'><ArrowBackIosIcon/></button>
            </div>
            <div className="center">
                <img src={companyletter} alt="Companyletter" className='image' width="100%" height={660}/>
            </div>
            <div className="right">
                <button onClick={() => history('/prelims/company')} className='close'><HighlightOffRoundedIcon/></button>
                <button onClick={() => history('/prelims/company/resume')} className='button'><ArrowForwardIosIcon/></button>
            </div>
        </div>
    </div>
  )
}

export default Companyletter