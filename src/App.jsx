import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Movies from './pages/Movies';
import Home from './pages/Home';
import TVSeries from './pages/TVSeries';
import Bookmarks from './pages/Bookmarks';
import MovieDetails from './pages/MovieDetails';
import TVDetails from './pages/TVDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv-series" element={<TVSeries />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/tv/:id" element={<TVDetails />} />
      </Routes>
    </Router>
  );
}

export default App;