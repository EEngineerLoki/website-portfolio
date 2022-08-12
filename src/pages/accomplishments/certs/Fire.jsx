import React from 'react'
import './fire.scss'
import fire from '../../../../src/assets/images/certs/fire.png'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';

const Fire = () => {

let history = useNavigate();

  return (
    <div className='fire'>
      <button onClick={() => history('/accomplishments/week5')} className="button"><ArrowBackIosIcon/></button>
      <img src={fire} alt="fire" width="95%" height="95%"/>
      <button onClick={() => history('/accomplishments/emergency')} className="button"><ArrowForwardIosIcon/></button>
    </div>
  )
}

export default Fire