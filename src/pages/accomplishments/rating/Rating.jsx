import React from 'react'
import './rating.scss'
import rating from '../../../../src/assets/images/rating/rating.png'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';

const Rating = () => {

let history = useNavigate();

  return (
    <div className='rating'>
      <button onClick={() => history('/accomplishments/dtr')} className="button"><ArrowBackIosIcon/></button>
      <img src={rating} alt="rating" width="45%" height="95%"/>
      <button onClick={() => history('/accomplishments/week1')} className="button"><ArrowForwardIosIcon/></button>
    </div>
  )
}

export default Rating