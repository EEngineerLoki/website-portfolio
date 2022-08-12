import React from 'react'
import './fire.scss'
import emergency from '../../../../src/assets/images/certs/emergency.png'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';

const Emergency = () => {

let history = useNavigate();

  return (
    <div className='fire'>
      <button onClick={() => history('/accomplishments/fire')} className="button"><ArrowBackIosIcon/></button>
      <img src={emergency} alt="emergency" width="95%" height="95%"/>
      <button onClick={() => history('/accomplishments/completion')} className="button"><ArrowForwardIosIcon/></button>
    </div>
  )
}

export default Emergency