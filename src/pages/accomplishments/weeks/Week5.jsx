import React from 'react'
import './week5.scss'
import first from '../../../../src/assets/images/week/week5/3.jpg'
import second from '../../../../src/assets/images/week/week5/1.jpg'
import third from '../../../../src/assets/images/week/week5/2.jpg'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';

const Week5 = () => {

let history = useNavigate();

  return (
    <div className='week5'>
      <button onClick={() => history('/accomplishments/week4')} className="button"><ArrowBackIosIcon/></button>
      <div className="center">
      <div className="tag">
          <h2 className='title'>Week 5</h2>
          <h3 className="date">July 25 - July 29 2022</h3>
        </div>
        <div className="contents">
          <div className="text">
            <div className="p1">
            For our last week in BFP Legazpi, I had minor task unlike for the recent weeks. I was only given a working load in excel worksheet. The task was to link all the existing business establishments to the list of legitimate payments. It includes using excel outlook and indexing method. At first, they wanted me to try the simpler version of merging two excel files into different excel sheets by then I will only be using excel outlook to compare two different sheets. With simple inputting of functions in excel tab I was able to verify the list of payments and also update the existing bin of the establishments. The more complex method was to use the index function, it is a little bit more complicated to handle as it requires lengthy input on excel tab and requires more logic to perform. The index function updates a specific row of cells based on the data that was inputted under its row unlike using excel outlook which only compares data by checking its existence based on typography, so you are needed to be more specific by using the outlook function. It took me two days to study both methods and was able to carry out results. I also suggested to make a simpler UI tabs like search bars and icons tab for ease in navigation on sheets and different documents. I was praised by my supervisor on how quick I was to learn both methods and to have two different outputs with the same in functionality. This contributes to significantly reduce the hassle in validating each payment one by one on two different documents making to perform faster and more working output. It was the only task I had done on my last week and was then prepared to bid my farewell to the agency.
            </div>
            <div className="p2">
              <br/>
              On our last day we prepared a simple thanksgiving on the employees of BFP Legazpi. Thanking them on accepting us for more than a month and was able to share sentiments during our stay. Both field and office works taught us to be more adaptive, decisive, flexible, and be more inept in taking and giving working inputs most especially with regards to electrical engineering practice. 
            </div>
          </div>
          <div className="pics">
            <img src={second} alt="second" className='image' width='90%' height="55%"/>
            <img src={first} alt="first" className='image' width='90%' height="55%"/>
            <img src={third} alt="third" className='image' width='90%' height='55%'/>
          </div>
        </div>
      </div>
      <button onClick={() => history('/accomplishments/fire')} className="button"><ArrowForwardIosIcon/></button>
    </div>
  )
}

export default Week5