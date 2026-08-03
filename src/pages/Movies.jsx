// import React from 'react';

// const Movies = () => {
//   return (
//     <div className='movies-page'>
//       <h1>Movies</h1>
//       <p>येथे चित्रपटांची (Movies) यादी दिसेल.</p>
//     </div>
//   );
// }

// export default Movies;

// import React, { useState, useEffect } from 'react';
// // API लिंक्स आपण आधी बनवलेल्या फाईलमधून घेत आहोत
// import { TMDB_BASE_URL, TMDB_IMAGE_BASE_URL } from '../apiConfig'; 

// const API_KEY = "YOUR_TMDB_API_KEY"; // तुमची API Key इथे टाका

// const Movies = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     // API मधून चित्रपटांची माहिती आणणे
//     const fetchMovies = async () => {
//       try {
//         const response = await fetch(`${TMDB_BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
//         const data = await response.json();
//         setMovies(data.results); // आलेला डेटा स्टेटमध्ये सेव्ह करणे
//       } catch (error) {
//         console.error("Error fetching movies:", error);
//       }
//     };
//     fetchMovies();
//   }, []);

//   return (
//     <div className="bg-gray-900 min-h-screen p-8 text-white">
//       <h1 className="text-3xl font-bold mb-6">Popular Movies</h1>
      
//       {/* Grid Layout मध्ये चित्रपट दाखवणे */}
//       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
//         {movies.map((movie) => (
//           <div key={movie.id} className="relative group cursor-pointer">
//             <img 
//               src={`${TMDB_IMAGE_BASE_URL}${movie.poster_path}`} 
//               alt={movie.title} 
//               className="rounded-lg w-full h-auto transition-transform duration-300 group-hover:scale-105"
//             />
//             <div className="mt-2 text-sm font-semibold truncate">{movie.title}</div>
            
//             {/* Bookmark बटण (सध्या फक्त डिझाईन) */}
//             <button className="absolute top-2 right-2 bg-black/50 p-2 rounded-full hover:bg-white hover:text-black">
//               🔖
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Movies;

import React, { useState, useEffect } from 'react';
import { TMDB_BASE_URL, TMDB_IMAGE_BASE_URL } from '../apiConfig'; 
// १. Redux चे हुक्स आणि Action import करणे
import { useDispatch } from 'react-redux';
import { addBookmark } from '../redux/bookmarkSlice';

const API_KEY = "YOUR_TMDB_API_KEY"; // तुमची API Key इथे टाका

const Movies = () => {
  const [movies, setMovies] = useState([]);
  
  // २. dispatch ला इनिशियलाईझ (Initialize) करणे
  const dispatch = useDispatch(); 

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`${TMDB_BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, []);

  // ३. बुकमार्क बटण क्लिक केल्यावर कॉल होणारे फंक्शन
  const handleBookmark = (movie) => {
    dispatch(addBookmark(movie)); // चित्रपट Redux मध्ये सेव्ह करणे
    alert(`"${movie.title}" तुमच्या बुकमार्क्समध्ये जोडला गेला आहे!`); // युजरला समजण्यासाठी मेसेज
  };

  return (
    <div className="bg-gray-900 min-h-screen p-8 text-white">
      <h1 className="text-3xl font-bold mb-6">Popular Movies</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="relative group cursor-pointer">
            <img 
              src={`${TMDB_IMAGE_BASE_URL}${movie.poster_path}`} 
              alt={movie.title} 
              className="rounded-lg w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="mt-2 text-sm font-semibold truncate">{movie.title}</div>
            
            {/* ४. बटणावर onClick इव्हेंट लावणे */}
            <button 
              onClick={() => handleBookmark(movie)}
              className="absolute top-2 right-2 bg-black/70 p-2 rounded-full hover:bg-red-600 hover:text-white transition-colors"
            >
              🔖
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;