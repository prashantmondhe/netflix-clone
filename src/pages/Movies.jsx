import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'; 

function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [bookmarks, setBookmarks] = useState([]);
  const navigate = useNavigate();

  const API_KEY = "c94b5daa72ba816c62bf91d73c35852b"; 

  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    setBookmarks(savedBookmarks);

    const fetchMovies = async () => {
      try {
        
        const url = searchQuery 
          ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}` 
          : `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
          
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results || []);
      } catch (error) {
        console.error(error);
      }
    };
    
   
    const timeoutId = setTimeout(() => {
      fetchMovies();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  const toggleBookmark = (e, movie) => {
    e.stopPropagation(); 
    let updatedBookmarks = [...bookmarks];
    const isBookmarked = updatedBookmarks.find(b => b.id === movie.id);
    
    if (isBookmarked) {
      updatedBookmarks = updatedBookmarks.filter(b => b.id !== movie.id);
    } else {
      updatedBookmarks.push(movie);
    }
    
    setBookmarks(updatedBookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
  };

  return (
    <div className="bg-[#10141E] min-h-screen text-white">
      <Navbar />
      <div className="p-8">
        
        
        <div className="mb-8 flex items-center bg-[#161D2F] p-3 rounded-lg w-full md:w-1/2 mx-auto">
          <span className="text-gray-400 text-xl mr-3">🔍</span>
          <input 
            type="text" 
            placeholder="Search for movies..." 
            className="bg-transparent outline-none w-full text-white placeholder-gray-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <h1 className="text-3xl font-bold mb-6">
          {searchQuery ? `Search Results for "${searchQuery}"` : 'Trending Movies'}
        </h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {movies.map((movie) => (
           
            <div 
              key={movie.id} 
              onClick={() => navigate(`/movie/${movie.id}`)}
              className="relative bg-[#161D2F] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title} 
                className="w-full h-auto object-cover opacity-90 hover:opacity-100" 
              />
              
             
              <button 
                onClick={(e) => toggleBookmark(e, movie)}
                className="absolute top-2 right-2 bg-black bg-opacity-70 text-white p-2 rounded-full hover:bg-gray-700 transition"
                title="Bookmark"
              >
                {bookmarks.find(b => b.id === movie.id) ? '🔖' : '📌'}
              </button>

              <div className="p-4">
                <h2 className="text-sm font-semibold truncate">{movie.title}</h2>
                <div className="flex justify-between items-center text-gray-400 text-xs mt-2">
                  <span>{movie.release_date?.split('-')[0]} • Movie</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Movies;