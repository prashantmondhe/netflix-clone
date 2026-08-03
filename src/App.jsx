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
// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// // सर्व पेजेस Import करा
// import Home from './pages/Home/Home';
// //import Home from './pages/Home'; // तुम्ही आधी बनवलेला Home कंपोनंट
// import Movies from './pages/Movies';
// import TVSeries from './pages/TVSeries';
// import Bookmarks from './pages/Bookmarks';
// import Login from './pages/Login';
// import SignUp from './pages/SignUp';

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Routes>
//           {/* राऊट्स (Routes) सेट करणे */}
//           <Route path="/" element={<Home />} />
//           <Route path="/movies" element={<Movies />} />
//           <Route path="/tv-series" element={<TVSeries />} />
//           <Route path="/bookmarks" element={<Bookmarks />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<SignUp />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

// import React from 'react';

// function App() {
//   return (
    
//       Hello, Entertainment App is Working! 🎉
    
//   );
// }

// export default App;


// import React from 'react';

// function App() {
//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-900 text-white text-3xl font-bold">
//       <h1>Hello, Entertainment App is Working! 🎉</h1>
//     </div>
//   );
// }

// export default App;

// import React from 'react';

// function App() {
//   return (
//     <div>
//       <h1>Hello, Entertainment App is Working! 🎉</h1>
//     </div>
//   );
// }

// export default App;

// import React from 'react';

// function App() {
//   return (
    
      
//        <h2> Hello, Entertainment App is Working! 🎉</h2>
      
    
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// // तुमचे पेजेस इथे import करा (तुमच्या फोल्डरनुसार पाथ तपासा)
// // import Login from './pages/Login';
// // import SignUp from './pages/SignUp';
// // import Movies from './pages/Movies';

// function App() {
//   return (
    
      
        
//           {/* जेव्हा तुम्ही पेजेस बनवाल, तेव्हा हे कंमेंट्स (//) काढून टाका */}
//           {/* } /> */}
//           {/* } /> */}
//           {/* } /> */}
          
//           Router is Working! Now add pages.} />
        
      
    
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//       <div className="bg-gray-900 min-h-screen text-white">
//         <Routes>
//           <Route path="/" element={<h1 className="text-center mt-10 text-3xl font-bold">Router is Working! Now add pages.</h1>} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// // तुमचे पेजेस इथे import करा
// import Login from './pages/Login'; 
// import SignUp from './pages/SignUp';
// import Movies from './pages/Movies';

// function App() {
//   return (
    
      
        
//           {/* आता आपण डमी मेसेज काढून आपले खरे पेजेस जोडले आहेत */}
//           } />
//           } />
//           } />
        
      
    
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// तुमचे पेजेस import करत आहोत
import Login from './pages/Login'; 
import SignUp from './pages/SignUp';
import Movies from './pages/Movies';

function App() {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-white">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;