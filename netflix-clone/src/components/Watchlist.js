import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom'; 
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

const Watchlist = () => {
  const [user, setUser] = useState(null);
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState('');
  const navigate = useNavigate(); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate('/auth'); 
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (user) {
      const fetchMovies = async () => {
        const querySnapshot = await getDocs(collection(db, `watchlist-${user.uid}`));
        setMovies(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      };
      fetchMovies();
    }
  }, [user]);

  const addMovie = async () => {
    if (newMovie && user) {
      await addDoc(collection(db, `watchlist-${user.uid}`), { title: newMovie });
      setNewMovie('');
      window.location.reload(); 
    }
  };

  const removeMovie = async (id) => {
    if (user) {
      await deleteDoc(doc(db, `watchlist-${user.uid}`, id));
      window.location.reload(); 
    }
  };

  return (
    <div className="watchlist">
      <h2>My Watchlist</h2>
      {user ? (
        <div>
          <input
            type="text"
            placeholder="Add a new movie"
            value={newMovie}
            onChange={(e) => setNewMovie(e.target.value)}
          />
          <button onClick={addMovie}>Add</button>
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                {movie.title}
                <button onClick={() => removeMovie(movie.id)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Please sign in to manage your watchlist.</p>
      )}
    </div>
  );
};

export default Watchlist;
