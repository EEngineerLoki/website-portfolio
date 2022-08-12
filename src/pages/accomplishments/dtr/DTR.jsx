import React from 'react'
import './dtr.scss'
import dtr from '../../../../src/assets/images/dtr/dtr.png'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';

const DTR = () => {

let history = useNavigate();

  return (
    <div className='dtr'>
      <button onClick={() => history('/accomplishments/completion')} className="button"><ArrowBackIosIcon/></button>
      <img src={dtr} alt="dtr" width="55%" height="95%"/>
      <button onClick={() => history('/accomplishments/rating')} className="button"><ArrowForwardIosIcon/></button>
    </div>
  )
}

export default DTR