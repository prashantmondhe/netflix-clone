// import React from 'react';
// import Home from './pages/Home/Home.jsx';
// const App = () => {
//   return (
//     <div>
//       <Home/>
//     </div>
//   );
// };

// export default App; 


// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// सर्व पेजेस Import करा
import Home from './pages/Home/Home';
//import Home from './pages/Home'; // तुम्ही आधी बनवलेला Home कंपोनंट
import Movies from './pages/Movies';
import TVSeries from './pages/TVSeries';
import Bookmarks from './pages/Bookmarks';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* राऊट्स (Routes) सेट करणे */}
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv-series" element={<TVSeries />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;