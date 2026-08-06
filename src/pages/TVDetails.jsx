import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

function TVDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = "c94b5daa72ba816c62bf91d73c35852b"; 
  const API_URL = `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&append_to_response=credits`;

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setDetails(data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, [id]);

  if (loading) return <div className="text-white text-center mt-20 text-2xl">Loading TV Series Details... ⏳</div>;
  if (!details || details.success === false) return <div className="text-white text-center mt-20 text-2xl">TV Series not found!</div>;

  return (
    <div className="bg-[#10141E] min-h-screen text-white">
      <Navbar />
      <div className="p-10 flex flex-col md:flex-row gap-10 max-w-6xl mx-auto mt-8">
        <div className="w-full md:w-1/3">
          <img 
            src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} 
            alt={details.name} 
            className="w-full rounded-xl shadow-2xl"
          />
        </div>
        <div className="w-full md:w-2/3 flex flex-col gap-4">
          <h1 className="text-4xl font-bold">{details.name}</h1>
          <p className="text-xl text-yellow-400">⭐ {details.vote_average?.toFixed(1)} / 10</p>
          
          <div className="flex gap-8 text-gray-400 text-sm mt-2">
            <div>
              <p className="font-semibold text-white">Seasons</p>
              <p>{details.number_of_seasons}</p>
            </div>
            <div>
              <p className="font-semibold text-white">Language</p>
              <p>{details.original_language?.toUpperCase()}</p>
            </div>
            <div>
              <p className="font-semibold text-white">First Aired</p>
              <p>{details.first_air_date?.split('-')[0]}</p>
            </div>
          </div>

          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Genres</h2>
            <div className="flex gap-2 flex-wrap">
              {details.genres?.map(genre => (
                <span key={genre.id} className="bg-white text-black px-3 py-1 rounded-full text-xs font-bold">
                  {genre.name}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Synopsis</h2>
            <p className="text-gray-300 leading-relaxed">{details.overview}</p>
          </div>

          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Casts</h2>
            <div className="flex gap-2 flex-wrap">
              {details.credits?.cast?.slice(0, 10).map(actor => (
                <span key={actor.id} className="border border-gray-600 px-3 py-1 rounded text-xs text-gray-300">
                  {actor.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TVDetails;