import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../api';
import './Hero.css';

const Hero = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getRandomMovie = async () => {
      try {
        const movies = await fetchMovies('popular');
        if (movies && movies.length > 0) {
          const randomIndex = Math.floor(Math.random() * movies.length);
          setMovie(movies[randomIndex]);
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    getRandomMovie();
  }, []);

  if (!movie) return null;

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <div className="hero-content">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <button>Watch Now</button>
        <button>My List</button>
      </div>
    </div>
  );
};

export default Hero;
