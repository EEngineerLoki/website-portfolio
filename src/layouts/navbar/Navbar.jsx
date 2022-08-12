import logo from '../../assets/images/ojt logo.png'
import './navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
          <img src={logo} alt="logo" height={100} width={135}/>
      </div>
      <div className="pages">
        <Link to='/' className='link'>Home</Link>
        <Link to='/prelims/personal' className='link'>Preliminaries</Link>
        <Link to='/accomplishments/week1' className='link'>Accomplishments</Link>
        <Link to='/contacts' className='link'>Contacts</Link>
      </div>
    </div>
    
  )
}

export default Navbar