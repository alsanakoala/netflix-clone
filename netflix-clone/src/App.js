import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import SearchResults from './components/SearchResults';
import Auth from './components/Auth';
import Watchlist from './components/Watchlist';
import UserProfile from './components/UserProfile';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import { FaMoon, FaSun } from 'react-icons/fa'; 
import Recommendations from './components/Recommendations';


function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <div className={`App ${theme}`}>
        <Navbar />
        <div className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? <FaMoon /> : <FaSun />} {}
        </div>
        <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <h1>Welcome to Netflix Clone</h1>
              <MovieList title="Trending Now" category="popular" />
              <MovieList title="Top Rated" category="top_rated" />
              <MovieList title="Upcoming" category="upcoming" />
              <MovieList title="Now Playing" category="now_playing" />
              <Recommendations userId="USER_ID" /> {}
         </>
  }
/>
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
