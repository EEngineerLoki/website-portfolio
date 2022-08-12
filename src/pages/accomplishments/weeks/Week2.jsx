import React from 'react'
import './week2.scss'
import first from '../../../../src/assets/images/week/week2/3.jpg'
import second from '../../../../src/assets/images/week/week2/4.jpg'
import third from '../../../../src/assets/images/week/week2/1.jpg'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';

const Week2 = () => {

let history = useNavigate();

  return (
    <div className='week2'>
      <button onClick={() => history('/accomplishments/week1')} className="button"><ArrowBackIosIcon/></button>
      <div className="center">
      <div className="tag">
          <h2 className='title'>Week 2</h2>
          <h3 className="date">July 4 - July 8 2022</h3>
        </div>
        <div className="contents">
          <div className="text">
            <div className="p1">
            For my second week of my internship program, I had lighter tasks given. This week I was accompanied by one of 
            the FSES inspector to visit two establishments. The first establishment is a residential building passed by 
            and architect to be inspected for renovation. We left the main office at around 10am and arrived at the destination 
            near Cabangan. The caretakers of the house met us at the front as I greeted them “Good morning”. Me and the inspector 
            thoroughly inspected the residential area, it was and old mansion house dated at around early 2000’s the owner of the 
            house was currently in Manila and one of the siblings decided to make the house look modern. Our first issue that was 
            encountered was that the secondary stairs from the kitchen leading to one of the rooms in the second floor was to steep 
            and has no lighting or what so ever. It is prone for accident since the flooring is a polished narra it will be quite 
            slippery in cases of emergency most commonly fire. We now then headed towards our second inspection visit near the old 
            airport it is the Anchorage Apartelle. The owner and its employees were expecting us to paved visit to their business 
            apartment. For a bit time of delay the owner arrived as we then started our inspection. We plan to go first to the upper 
            most part of the building going all the way down to the main fire panel at the entrance of the building. Located at the 
            rooftop of the building is the water pump system, we advised the owner and its employees to demonstrate opening the pump 
            to check if the water pump system is in good condition. At first the pressure gauge reading is at 70psi the inspector 
            insisted to calibrate the pressure to at least 100psi considering the area of the building and the number of floors. 
            Water spurts out of the testing tube after a while it decreases in force signifying a certain drop in pressure. That means 
            that the water pump is not regulated and is advised to be fixed until the next inspection visit. At the first part of 
            inspection the building already failed one of the procured safety standards implemented by the agency. We now headed one 
            floor below to inspect the fire alarm system, whether the detectors and sprinklers are operational and not tampered, and 
            if the fire exit is spacious enough to accommodate urging tenants during the incident of fire. For second and third floors 
            the building passed the stated requirements. At the very first floor of the building we tested if the fire panel delivers 
            the right information during cases of fire. We tested to create smoke near one of the smoke detectors, surprisingly the 
            smoke detector signifies the presence of smoke in that area and alarms the fire panel inside the building. With that little 
            smoke the inspector advised that it is not sanctioned for emergency right away. He also mentioned to me the type of smoke 
            detector and the types of sprinklers that are commonly used in buildings residing legazpi area.
            </div>
            <div className="p2">
              <br/>
            After finishing the inspection, the owner is advised to regulate the issue found in their water pump system until the next 
            inspection visit. Until then the issuance of Fire Safety Inspection Certificate will not be awarded to the building. 
            </div>
          </div>
          <div className="pics">
            <img src={second} alt="second" className='image' width='90%'/>
            <img src={first} alt="first" className='image' width='90%' height="55%"/>
            <img src={third} alt="third" className='image' width='90%' height='55%'/>
          </div>
        </div>
      </div>
      <button onClick={() => history('/accomplishments/week3')} className="button"><ArrowForwardIosIcon/></button>
    </div>
  )
}

export default Week2