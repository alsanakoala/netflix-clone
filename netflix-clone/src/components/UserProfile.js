import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom'; 
import { onAuthStateChanged, signOut } from 'firebase/auth';

const UserProfile = () => {
  const [user, setUser] = useState(null);
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

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/auth'); 
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="user-profile">
      {user ? (
        <div>
          <h2>Welcome, {user.email}</h2>
          <p>User ID: {user.uid}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <p>Please sign in to view your profile.</p>
      )}
    </div>
  );
};

export default UserProfile;
