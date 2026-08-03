// import React from 'react';

// const Bookmarks = () => {
//   return (
//     <div className='bookmarks-page'>
//       <h1>My Bookmarks</h1>
//       <p>युजर्सनी सेव्ह केलेले चित्रपट आणि मालिका येथे दिसतील.</p>
//     </div>
//   );
// }

// export default Bookmarks;

import React from 'react';
// १. Redux चे हुक्स आणि Action import करणे
import { useSelector, useDispatch } from 'react-redux';
import { removeBookmark } from '../redux/bookmarkSlice';
import { TMDB_IMAGE_BASE_URL } from '../apiConfig';

const Bookmarks = () => {
  // २. useSelector वापरून Redux Store मधून savedShows चा डेटा आणणे
  const savedMovies = useSelector((state) => state.bookmarks.savedShows);
  
  const dispatch = useDispatch();

  // ३. बुकमार्क काढण्यासाठी फंक्शन
  const handleRemove = (movieId) => {
    dispatch(removeBookmark(movieId));
  };

  return (
    <div className="bg-gray-900 min-h-screen p-8 text-white">
      <h1 className="text-3xl font-bold mb-6">My Bookmarks</h1>
      
      {/* जर एकही चित्रपट सेव्ह केलेला नसेल तर हा मेसेज दिसेल */}
      {savedMovies.length === 0 ? (
        <p className="text-gray-400 text-lg">तुम्ही अजून कोणतेही चित्रपट बुकमार्क केलेले नाहीत.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {/* ४. savedMovies मधील डेटा मॅप (Map) करून दाखवणे */}
          {savedMovies.map((movie) => (
            <div key={movie.id} className="relative group cursor-pointer">
              <img 
                src={`${TMDB_IMAGE_BASE_URL}${movie.poster_path}`} 
                alt={movie.title} 
                className="rounded-lg w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="mt-2 text-sm font-semibold truncate">{movie.title}</div>
              
              {/* ५. बुकमार्क काढण्याचे (Remove) बटण */}
              <button 
                onClick={() => handleRemove(movie.id)}
                className="absolute top-2 right-2 bg-red-600/90 p-2 rounded-full hover:bg-red-800 text-white transition-colors"
                title="Remove from Bookmarks"
              >
                ❌
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Bookmarks;