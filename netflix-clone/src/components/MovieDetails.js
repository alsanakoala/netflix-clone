import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from 'react-modal'; 
import { fetchMovieDetails } from '../api'; 
import './MovieDetails.css';


Modal.setAppElement('#root'); 


const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); 

  useEffect(() => {
    const getMovieDetails = async () => {
      const movieData = await fetchMovieDetails(id);
      setMovie(movieData);

      if (movieData) {
        const videosResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
        );
        const videosData = await videosResponse.json();
        const trailer = videosData.results.find(video => video.type === 'Trailer');
        if (trailer) {
          setTrailerUrl(`https://www.youtube.com/watch?v=${trailer.key}`);
        }
      }
    };
    getMovieDetails();
  }, [id]);
  

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
      {trailerUrl && (
        <button onClick={openModal}>Watch Trailer</button> // Fragmanı izlemek için buton
      )}
      
      {}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Movie Trailer"
        className="modal"
        overlayClassName="overlay"
      >
        <button onClick={closeModal} className="close-modal">Close</button>
        <iframe
          width="100%"
          height="400px"
          src={trailerUrl}
          title="Movie Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Modal>
    </div>
  );
};

export default MovieDetails;
