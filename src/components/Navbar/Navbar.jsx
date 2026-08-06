


import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

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