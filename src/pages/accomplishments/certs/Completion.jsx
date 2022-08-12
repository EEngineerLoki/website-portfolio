import React from 'react'
import './completion.scss'
import completion from '../../../../src/assets/images/certs/completion.jpg'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';

const Completion = () => {

let history = useNavigate();

  return (
    <div className='completion'>
      <button onClick={() => history('/accomplishments/emergency')} className="button"><ArrowBackIosIcon/></button>
      <img src={completion} alt="completion" width="45%" height="95%"/>
      <button onClick={() => history('/accomplishments/dtr')} className="button"><ArrowForwardIosIcon/></button>
    </div>
  )
}

export default Completion