import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const { username } = state || { username: 'User' };

  const handleLogout = () => {
    console.log('Logging out...');
    // Ensure this matches the key used when storing the token
    localStorage.removeItem('token'); 
    console.log('Token removed from local storage');
    navigate('/login');
  };

  return (
    <div className="container home-page py-5 mt-5">
      <h3 className='text-center mt-4'>Welcome {username}</h3>
      <div className="text-center mt-4">
        <button className="btn btn-danger" onClick={handleLogout}>Logout <i className="bi bi-box-arrow-right"></i></button>
      </div>
    </div>
  );
};

export default HomePage;
