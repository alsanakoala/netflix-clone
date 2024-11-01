import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import './Recommendations.css';

const Recommendations = ({ userId }) => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      const moviesCollection = collection(db, `recommendations-${userId}`);
      const snapshot = await getDocs(moviesCollection);
      const movies = snapshot.docs.map(doc => doc.data());
      setRecommendedMovies(movies);
    };

    if (userId) {
      fetchRecommendations();
    }
  }, [userId]);

  return (
    <div className="recommendations">
      <h2>Recommended for You</h2>
      <div className="movie-cards">
        {recommendedMovies && recommendedMovies.length > 0 ? (
          recommendedMovies.map((movie, index) => (
            <div key={index} className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <p>{movie.title}</p>
            </div>
          ))
        ) : (
          <p>No recommendations available.</p>
        )}
      </div>
    </div>
  );
};

export default Recommendations;
