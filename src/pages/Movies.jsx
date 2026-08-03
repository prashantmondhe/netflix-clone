
import React, { useState, useEffect } from 'react';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // येथे तुमची खरी TMDB API Key टाका
  const API_KEY = "c94b5daa72ba816c62bf91d73c35852b"; 
  const API_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Network response was not ok. API might be blocked.");
        }
        const data = await response.json();
        setMovies(data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Trending Movies on TMDB</h1>
      
      {loading ? (
        <p className="text-center text-xl text-yellow-400">Loading TMDB movies...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <div key={movie.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
              {/* TMDB च्या खऱ्या इमेजेस */}
              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title || movie.name} 
                className="w-full h-auto object-cover" 
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold truncate">{movie.title || movie.name}</h2>
                <p className="text-yellow-400 text-sm mt-1">⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"} / 10</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Movies;