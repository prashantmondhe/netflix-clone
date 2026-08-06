import React, { useState, useEffect } from 'react';

import Navbar from "../components/Navbar";

function Home() {
  const [trending, setTrending] = useState([]);
  const API_KEY = "c94b5daa72ba816c62bf91d73c35852b"; 
  const API_URL = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`;

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setTrending(data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Trending Now</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {trending.map((item) => (
            <div key={item.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
              <img 
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} 
                alt={item.title || item.name} 
                className="w-full h-auto object-cover"
              />
              <div className="p-3">
                <h2 className="text-sm font-semibold truncate">{item.title || item.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;