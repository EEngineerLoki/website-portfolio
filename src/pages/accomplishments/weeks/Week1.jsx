import React from 'react'
import './week1.scss'
import first from '../../../../src/assets/images/week/week1/5.jpg'
import second from '../../../../src/assets/images/week/week1/1.jpg'
import third from '../../../../src/assets/images/week/week1/8.jpg'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';

const Week1 = () => {

let history = useNavigate();

  return (
    <div className='week1'>
      <button onClick={() => history('/accomplishments/rating')} className="button"><ArrowBackIosIcon/></button>
      <div className="center">
        <div className="tag">
          <h2 className='title'>Week 1</h2>
          <h3 className="date">June 27 - July 1 2022</h3>
        </div>
        <div className="contents">
          <div className="p1">
          On the 27th day of June year 2022 marked as the commencement of our first day internship at the Legazpi 
          City Central Fire Station. Alongside, our esteemed professor Professional Electrical Engineer Alwin M. 
          Lunas whom became our chaperone that morning. While, waiting for the flag ceremony to start we had a 
          small conversation with some of the employees and greeting them as they pass by. At around eight o’clock 
          we took part in the weekly Monday flag ceremony and was welcomed by the Acting City Fire Marshal SINSP 
          Eric A. Caramoan an alumnus of Bicol University College of Engineering a former student at the Mechanical 
          Engineering Department. Sharing with us his experience in engineering and eventually landing on Bureau 
          of Fire of the Philippines. It tells us the flexibility on the career path on the engineering field. 
          </div>
          <div className="p2">
          After a mild welcome the Administration Officer of the Legazpi City Central Fire Station SFO2 Anthony 
          Abainza designates us in the FSES (Fire Safety Enforcement Section). FSES handles the payments, engineering 
          tasks, inspection, and issuance of Fire Safety Inspection Certificate. On my first day I was already given 
          a task by F03 Shane Calleja officer in-charge on checking existing payment and establishments bound over 
          Legazpi City area. I was assigned for the months of April, June, August, October, November, and December in
           total of more than six thousand establishments to be verified. It wasn’t a walk in the park duty as I have 
           to check every business names and owners for having double entry on the excel master list, some establishments 
           cannot be verified fully by its name and owner since it is not specific as per input on the spreadsheet then 
           I have to double check its address to deemed its payment. For days one to three I already finished the task 
           and was praised by FSES employees on how fast and focus I am performing during those days. For the remaining 
           two days of the week I was then given another task, it was to list all inspection order number for the logbook 
           numbering from two thousand nine hundred ninety-eight to five thousand eight. During my idle time I borrowed 
           a book namely “The Fire Code of the Philippines”, it was then that I reviewed every necessary connection of 
           fire mitigation and apprehension concerning electrical engineering practices.  Under Section 10.5.6.4 it states 
           that it shall be unlawful to use and or install any electrical wiring appliances, apparatus or device in 
           violation of the Philippine Electrical Code and since 51% of fire incidents happens to be caused by faulty 
           electrical connections we as a future electrical engineer wants to lessen any possible electrical related fire 
           incidents under our supervision during and after the committed project.
          </div>
          <div className="pics">
            <img src={second} alt="second" className='image' width='30%'/>
            <img src={first} alt="first" className='image' width='30%'/>
            <img src={third} alt="third" className='image' width='30%' height='95%'/>
          </div>
        </div>
      </div>
      <button onClick={() => history('/accomplishments/week2')} className="button"><ArrowForwardIosIcon/></button>
    </div>
  )
}

export default Week1