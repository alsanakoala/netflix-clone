import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchSearchResults } from '../api';

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    const getResults = async () => {
      if (query) {
        const searchResults = await fetchSearchResults(query);
        setResults(searchResults);
      }
    };
    getResults();
  }, [query]);

  if (!results.length) return <p>No results found for "{query}"</p>;

  return (
    <div className="search-results">
      <h2>Results for "{query}"</h2>
      <div className="movie-cards">
        {results.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
