// import react from 'react'
// import './Navbar.css'
// import logo from '../../assets/logo.png'
// import search_icon from '../../assets/search_icon.svg'
// import bell_icon from '../../assets/bell_icon.svg'
// import profile_img from '../../assets/profile_img.png'
// import caret_icon from '../../assets/caret_icon.svg'
// const Navbar = () => {
//   return (
//     <div className='navbar'>
//       <div className='navbar-left'>
//         <img src={logo} alt='Netflix Logo' className='navbar-logo' />
//         <ul>
//           <li>Home</li>
//           <li>TV Shows</li>
//           <li>Movies</li>
//           <li>My List</li>
//           <li>Latest</li>
//           <li>Popular</li>
//           <li>Categories</li>
//         </ul>
//       </div>
//       <div className='navbar-right'></div>
//       <img src={search_icon} alt='Search Icon' className='icon' />
//       <p>Children</p>
//       <img src={bell_icon} alt='Notification icon' className='icon' />
//       <div className=" navbar-profile">
//       <img src={profile_img} alt='Profile Icon' className='profile'/>
//        <img src= {caret_icon} alt='Caret Icon' className='caret'/>
//        <div className='dropdown' >
//         <p>Sign Out</p>
//         </div>
//       </div>
//     </div>
    
  
//   )
// }

// export default Navbar


import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // जर तुमची CSS असेल तर

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <div className="text-2xl font-bold text-red-600">
        <Link to="/">EntertainmentApp</Link>
      </div>
      
      <ul className="flex space-x-6">
        <li><Link to="/" className="hover:text-red-500">Home</Link></li>
        <li><Link to="/movies" className="hover:text-red-500">Movies</Link></li>
        <li><Link to="/tv-series" className="hover:text-red-500">TV Series</Link></li>
        <li><Link to="/bookmarks" className="hover:text-red-500">Bookmarks</Link></li>
      </ul>

      <div className="flex space-x-4">
        <Link to="/login" className="bg-red-600 px-4 py-2 rounded hover:bg-red-700">Login</Link>
        <Link to="/signup" className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;