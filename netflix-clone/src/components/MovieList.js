import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import './MovieList.css';
import { fetchMovies, fetchMoviesByGenre } from '../api';
import GenreFilter from './GenreFilter';

const MovieList = ({ title, category }) => {
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    const getMovies = async () => {
      if (selectedGenre) {
        const moviesData = await fetchMoviesByGenre(selectedGenre);
        setMovies(moviesData);
      } else {
        const moviesData = await fetchMovies(category);
        setMovies(moviesData);
      }
    };
    getMovies();
  }, [category, selectedGenre]);

  const openTrailer = async (movieId) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
    );
    const data = await response.json();
    const trailer = data.results.find(video => video.type === 'Trailer');
    if (trailer) {
      const trailerUrl = `https://www.youtube.com/watch?v=${trailer.key}`;
      window.open(trailerUrl, '_blank'); 
    } else {
      alert("Trailer not available.");
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="movie-list">
      <h2>{title}</h2>
      <GenreFilter onSelectGenre={setSelectedGenre} />
      <Slider {...settings}>
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <div
              key={movie.id}
              className="movie-card"
              onClick={() => openTrailer(movie.id)} // Fragmanı açmak için
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <p>{movie.title}</p>
            </div>
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </Slider>
    </div>
  );
};

export default MovieList;
