import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/'; // लॉगआउट केल्यावर पुन्हा Login पेजवर जाणे
  };

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-lg sticky top-0 z-50">
      <Link to="/home" className="text-red-600 text-3xl font-bold tracking-wider">NETFLIX</Link>
      <div className="flex gap-6 text-sm font-semibold">
        <Link to="/home" className="hover:text-gray-400 transition">Home</Link>
        <Link to="/tv-series" className="hover:text-gray-400 transition">TV Series</Link>
        <Link to="/movies" className="hover:text-gray-400 transition">Movies</Link>
        <Link to="/bookmarks" className="hover:text-gray-400 transition">Bookmarks</Link>
      </div>
      <button 
        onClick={handleLogout} 
        className="bg-red-600 px-4 py-2 rounded font-bold hover:bg-red-700 transition">
        Logout
      </button>
    </nav>
  );
}

export default Navbar;