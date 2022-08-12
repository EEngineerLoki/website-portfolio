import React from 'react'
import './contacts.scss'
import me from '../../../src/assets/images/eng.png'
import tag from '../../../src/assets/images/tag.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="accounts">
        <div className="gmail">
          <MailOutlineIcon className='icon'/>
          <div className="label">Gmail</div>
          <a href="https://mail.google.com/mail/u/0/?hl=en/#inbox?compose=new" rel='noreferrer' target="_blank" className='link'>matthewloquinerioxx@gmail.com</a>
          <div className="line"></div>
        </div>
        <div className="facebook">
          <FacebookIcon className='icon'/>
          <div className="label">Facebook</div>
          <a href="https://web.facebook.com/matthew.loquinerio/" rel='noreferrer' target="_blank" className='link'>Matthew David M. Loquinerio</a>
          <div className="line"></div>
        </div>
        <div className="linkedin">
          <LinkedInIcon className='icon'/>
          <div className="label">LinkedIn</div>
          <a href="https://www.linkedin.com/in/matthew-loquinerio-b66907201/" rel='noreferrer' target="_blank" className='link'>Matthew David M. Loquinerio</a>
          <div className="line"></div>
        </div>
        <div className="instagram">
          <InstagramIcon className='icon'/>
          <div className="label">Instagram</div>
          <a href="https://www.instagram.com/localappdev/" rel='noreferrer' target="_blank" className='link'>Matthew David M. Loquinerio</a>
          <div className="line"></div>
        </div>
      </div>
      <div className="feedback">
        <div className="container">
          <div className="text">Feedback Form</div>
            <form className='form'>
                <div className="fname">Name:</div>
                <input type="text" placeholder='Enter your name here...' className='id'/>
                <div className="fname">Email:</div>
                <input type="email" placeholder='Enter your email here...' className='id'/>
                <div className="fname">Status:</div>
                <select name="status" className='drop'>
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                </select>
                <div className="fname">Satisfaction:</div>
                <input type="range" min="1" max="10" className='id'/>
                <div className="fname">Suggestions:</div>
                <input type="text" placeholder='Enter your suggestions here...' className='suggestions'/>
                <input type="reset" value="Submit" className='reset'/>
            </form>
          </div>
          <img src={tag} alt="tag" className="tag"/>
          <img src={me} alt="me" className="me"/>
      </div>
    </div>
  )
}

export default Contacts