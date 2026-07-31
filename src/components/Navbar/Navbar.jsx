import react from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <img src={logo} alt='Netflix Logo' className='navbar-logo' />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>My List</li>
          <li>Latest</li>
          <li>Popular</li>
          <li>Categories</li>
        </ul>
      </div>
      <div className='navbar-right'></div>
      <img src={search_icon} alt='Search Icon' className='icon' />
      <p>Children</p>
      <img src={bell_icon} alt='Notification icon' className='icon' />
      <div className=" navbar-profile">
      <img src={profile_img} alt='Profile Icon' className='profile'/>
       <img src= {caret_icon} alt='Caret Icon' className='caret'/>
       <div className='dropdown' >
        <p>Sign Out</p>
        </div>
      </div>
    </div>
    
  
  )
}

export default Navbar
