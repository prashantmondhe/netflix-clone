import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Bookmarks() {
  const [bookmarkedItems, setBookmarkedItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('bookmarks')) || [];
    setBookmarkedItems(saved);
  }, []);

  const removeBookmark = (e, id) => {
    e.stopPropagation(); 
    const updatedBookmarks = bookmarkedItems.filter(item => item.id !== id);
    setBookmarkedItems(updatedBookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
  };

  
  const handleCardClick = (item) => {
    if (item.title) {
      navigate(`/movie/${item.id}`);
    } else {
      navigate(`/tv/${item.id}`);
    }
  };

  return (
    <div className="bg-[#10141E] min-h-screen text-white">
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8 text-white">My Bookmarks</h1>
        
        {bookmarkedItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <p className="text-2xl text-gray-400 mb-4">You haven't bookmarked anything yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {bookmarkedItems.map((item) => (
              <div 
                key={item.id} 
                onClick={() => handleCardClick(item)}
                className="relative bg-[#161D2F] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <img 
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} 
                  alt={item.title || item.name} 
                  className="w-full h-auto object-cover opacity-90 hover:opacity-100" 
                />
                
                <button 
                  onClick={(e) => removeBookmark(e, item.id)}
                  className="absolute top-2 right-2 bg-black bg-opacity-70 text-white p-2 rounded-full hover:bg-red-600 transition"
                  title="Remove from bookmarks"
                >
                  ❌
                </button>

                <div className="p-4">
                  <h2 className="text-sm font-semibold truncate">{item.title || item.name}</h2>
                  <div className="flex justify-between items-center text-gray-400 text-xs mt-2">
                    <span>{item.title ? 'Movie' : 'TV Series'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Bookmarks;