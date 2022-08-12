import React from 'react'
import './week4.scss'
import first from '../../../../src/assets/images/week/week4/3.jpg'
import second from '../../../../src/assets/images/week/week4/1.jpg'
import third from '../../../../src/assets/images/week/week4/2.jpg'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';

const Week4 = () => {

let history = useNavigate();

  return (
    <div className='week4'>
      <button onClick={() => history('/accomplishments/week3')} className="button"><ArrowBackIosIcon/></button>
      <div className="center">
      <div className="tag">
          <h2 className='title'>Week 4</h2>
          <h3 className="date">July 18 - July 22 2022</h3>
        </div>
        <div className="contents">
          <div className="text">
            <div className="p1">
            At the start of the week we attended our second Monday flag ceremony. Four weeks in BFP Legazpi, it was a mixed task within the FSES department and seminar workshops. At the start of the week I was tasked to find the records of all businesses indicated as fully paid. For more than six thousand folders of business establishments I sorted out from the start of the year up to November for issuance of FSIS permit. It took me two days to scan all the folders and delivered the certain establishments to the FSES in-charge officer SFO2 Blesslyn Diane Balquin. After verifying the payments of each establishments, I was tasked to arranged the folders by its corresponding month and must be alphabetically arranged. Arranging the folders by month was the trickiest for this task I assume as I am only limited in space and so I move all the boxes of folders outside and form seats around indicating the month of order. In order to simplify my task and avoid redundancy I bought sticky notes to mark folders by its corresponding month. It was a hectic workload with very limited space to work with and only a number of boxes to store the folders I was forced to improvise and make decisions on how to improve the arrangement of the files. After I arrange all the files by month I handed them over Ma’am Joan for the placement in the stock room. 
            </div>
            <div className="p2">
              <br/>
              With tasks finished I loiter myself outside and stand at the back of group of BFP personnel having their seminar workshop during that week and also the welcoming of the new Acting City Fire Marshall SINSP Dan Romulo Caceres. We were advised by SFO3 Bernick Batas to attend the seminar. I was braced by the topics discussed and reflects on the matter that connects electrical engineering practices with the certain standards of the agency for the mitigation of fire incidents involving electrical faults and overload. 
            </div>
          </div>
          <div className="pics">
            <img src={second} alt="second" className='image' width='90%' height="55%"/>
            <img src={first} alt="first" className='image' width='90%' height="55%"/>
            <img src={third} alt="third" className='image' width='90%' height='55%'/>
          </div>
        </div>
      </div>
      <button onClick={() => history('/accomplishments/week5')} className="button"><ArrowForwardIosIcon/></button>
    </div>
  )
}

export default Week4