import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './Navbar.css';

const Navbar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate(); 

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${query}`); 
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">Netflix Clone</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li> {}
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li><Link to="/watchlist">My List</Link></li> {}
        <li><Link to="/profile">Profile</Link></li> {}
      </ul>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;
