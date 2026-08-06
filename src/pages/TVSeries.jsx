import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function TVSeries() {
  const [shows, setShows] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [bookmarks, setBookmarks] = useState([]);
  const navigate = useNavigate();

  const API_KEY = "c94b5daa72ba816c62bf91d73c35852b"; 

  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    setBookmarks(savedBookmarks);

    const fetchShows = async () => {
      try {
        const url = searchQuery 
          ? `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${searchQuery}` 
          : `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`;
          
        const response = await fetch(url);
        const data = await response.json();
        setShows(data.results || []);
      } catch (error) {
        console.error("Error fetching TV series:", error);
      }
    };
    
    const timeoutId = setTimeout(() => {
      fetchShows();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  const toggleBookmark = (e, show) => {
    e.stopPropagation(); 
    let updatedBookmarks = [...bookmarks];
    const isBookmarked = updatedBookmarks.find(b => b.id === show.id);
    
    if (isBookmarked) {
      updatedBookmarks = updatedBookmarks.filter(b => b.id !== show.id);
    } else {
      updatedBookmarks.push(show); 
    }
    
    setBookmarks(updatedBookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
  };

  return (
    <div className="bg-[#10141E] min-h-screen text-white">
      <Navbar />
      <div className="p-8">
        
        {/* Search Bar */}
        <div className="mb-8 flex items-center bg-[#161D2F] p-3 rounded-lg w-full md:w-1/2 mx-auto shadow-md">
          <span className="text-gray-400 text-xl mr-3">🔍</span>
          <input 
            type="text" 
            placeholder="Search for TV series..." 
            className="bg-transparent outline-none w-full text-white placeholder-gray-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <h1 className="text-3xl font-bold mb-6">
          {searchQuery ? `Search Results for "${searchQuery}"` : 'Popular TV Series'}
        </h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {shows.map((show) => (
            <div 
              key={show.id} 
              onClick={() => navigate(`/tv/${show.id}`)}
              className="relative bg-[#161D2F] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <img 
                src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} 
                alt={show.name} 
                className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity" 
              />
              
              <button 
                onClick={(e) => toggleBookmark(e, show)}
                className="absolute top-2 right-2 bg-black bg-opacity-70 text-white p-2 rounded-full hover:bg-red-600 transition"
                title="Bookmark"
              >
                {bookmarks.find(b => b.id === show.id) ? '🔖' : '📌'}
              </button>

              <div className="p-4">
                <h2 className="text-sm font-semibold truncate">{show.name}</h2>
                <div className="flex justify-between items-center text-gray-400 text-xs mt-2">
                  <span>{show.first_air_date?.split('-')[0]} • TV Series</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TVSeries;