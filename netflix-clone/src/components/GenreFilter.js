import React, { useEffect, useState } from 'react';
import { fetchGenres } from '../api';

const GenreFilter = ({ onSelectGenre }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getGenres = async () => {
      const genreData = await fetchGenres();
      setGenres(genreData);
    };
    getGenres();
  }, []);

  return (
    <div className="genre-filter">
      <select onChange={(e) => onSelectGenre(e.target.value)}>
        <option value="">All Genres</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreFilter;
