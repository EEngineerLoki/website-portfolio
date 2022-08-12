import React from 'react'
import './home.scss'
import pdf from '../../../src/assets/images/pdf/pdf.pdf'
import imagep from '../../assets/images/imagep.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {useTypewriter} from 'react-simple-typewriter'
import 'react-simple-typewriter/dist/index'
import { useNavigate } from 'react-router-dom';

const Home = () => {

let history = useNavigate();
const {text} = useTypewriter({
  words: [ " Student."," Learner."," <Coder/>."," Self-Believer.", "Developer."],
  loop: 0, 
  typeSpeed: 70,
  deleteSpeed: 100,
  delaySpeed: 1200
  })

  return (
    <div className='home'>
      <div className="profile">
        <img src={imagep} alt="profile" width={700} height={700} className='imagep'/>
      </div>
      <div className="documentation">
        <div className="box">
          <div className="text">
            <span className="topline">Hello,</span>
            <h1>I'm a <span className='write'>
              {text}
              </span></h1>
            <p>My name is Matthew David M. Loquinerio currently taking Bachelor of Science in 
              Electrical Engineering at Bicol University College of Engineering. This website 
              showcase my one month on the job training experience in Legazpi City Central Fire
              Station. It comprises of my preliminary requirements, accomplishments, and contact
              informations. You can directly download my Curriculum Vitae to know more about myself.
              Link is given under this texts.
            </p>
            <div className="buttons">
              <a href={pdf} target="_blank" rel="noreferrer" download>
                <button className='download'>Download CV</button>
              </a>
            </div>
            <div className="icons">
              <button onClick={() => history('/contacts')}><MailOutlineIcon className='c-icons'/></button>
              <button onClick={() => history('/contacts')}><FacebookIcon className='c-icons'/></button>
              <button onClick={() => history('/contacts')}><LinkedInIcon className='c-icons'/></button>
              <button onClick={() => history('/contacts')}><InstagramIcon className='c-icons'/></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home