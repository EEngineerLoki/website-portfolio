import React from 'react'
import './week3.scss'
import first from '../../../../src/assets/images/week/week3/3.jpg'
import second from '../../../../src/assets/images/week/week3/1.jpg'
import third from '../../../../src/assets/images/week/week3/2.jpg'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';

const Week3 = () => {

let history = useNavigate();

  return (
    <div className='week3'>
      <button onClick={() => history('/accomplishments/week2')} className="button"><ArrowBackIosIcon/></button>
      <div className="center">
      <div className="tag">
          <h2 className='title'>Week 3</h2>
          <h3 className="date">July 11 - July 15 2022</h3>
        </div>
        <div className="contents">
          <div className="text">
            <div className="p1">
            At my third week in BFP my tasks mainly focus at the FSES department. On the first days of my third week I assisted my other 
            student trainees at their task whether to accommodate business owners or to scan the office for the hard copy of business 
            records for issuance of IO and FSIC permits. I also handled the duplication of files inside the BFP main office and participated 
            in the liquidation of budget for service fire trucks oil and gas usage. We tallied the budget from different gas stations and inspects 
            the increase in fuel budget needs for series of gas hikes for the first quarter of the year. For the months of May, June, and July we 
            recorded the total expenses of the agency. The next days I was assigned by SFO1 Joan Mendenilla Nuyda to handle the certification of inspection order for the expected business establishments by the month of July. For only this month the total number of issuances was about six hundred in number. SFO1 Nuyda advised me to check the master list and if the numbering corresponds to the logbook. Upon checking if the numbering is correct I will now then fill out the inspection order form with the company name, owner, address, date of inspection, and respective IO number. Since I started on Wednesday my projected completion of this task was on Friday. I divided the businesses to more than two hundred each day. As I completed two hundred inspection orders in a day I then printed out the forms two copies each and handed over to the Chief Officer of FSES SFO3 Bernick Batas for signature.
            </div>
            <div className="p2">
              <br/>
              Throughout this week I learnt the system of the FSES department regarding the issuance of permit and inspection order to business expected to be inspected in that month. The arrangement of files and records inside the stock room. I also became close with the employees responsible with the task I was given with. Alleviating the tension and stress with tons of workload given, it makes my task to flow smoothly without even thinking of the numbers and eventually finished at my projected time of completion.
            </div>
          </div>
          <div className="pics">
            <img src={second} alt="second" className='image' width='90%' height="55%"/>
            <img src={first} alt="first" className='image' width='90%' height="55%"/>
            <img src={third} alt="third" className='image' width='90%' height='55%'/>
          </div>
        </div>
      </div>
      <button onClick={() => history('/accomplishments/week4')} className="button"><ArrowForwardIosIcon/></button>
    </div>
  )
}

export default Week3