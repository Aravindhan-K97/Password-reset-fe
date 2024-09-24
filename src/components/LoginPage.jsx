import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://password-reset-be-1-cw65.onrender.com/auth/login', { email, password });
      // Debugging line to check response
      console.log('Server Response:', response.data); 

      // Store token in local storage
      const { token, username } = response.data;
      if (token) {
        // Ensure this matches the key used when removing the token
        localStorage.setItem('token', token);
        // Debugging line to confirm storage 
        // console.log('Token stored in local storage:', token); 
        // Navigate to home page
        navigate('/home', { state: { username } });
      } else {
        // Error log if token is not found
        console.error('No token found in response'); 
      }

    } catch (error) {
      // Debugging line to check error
      console.error('Error during login:', error.response ? error.response.data : error.message); 
      alert('Invalid credentials');
    }
  };


  return (
    <div className="container mt-5 px-2 py-4">
      <div className='row d-flex justify-content-center align-items-center'>
        <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6'>
          <div className='container mt-5 py-4 login-form'>
            <div className='row d-flex justify-content-center align-items-center'>
              <div className='col-sm-12 col-md-10 col-lg-8 col-xl-8'>
                <h1 className='text-center'><i className="bi bi-person-circle"></i></h1>
                <form >
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control email-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control password-input"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="btn btn-link p-0 mt-2"
                      onClick={() => navigate('/forgot-password')}
                      style={{ textDecoration: 'none' }}
                    >
                      Forgot Password
                    </button>
                  </div>
                  <div className='d-flex justify-content-center gap-4'>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => navigate('/signup')}
                    >
                      SignUp
                    </button>
                  </div>
                </form>
                <p className='text-center mt-3'>Or</p>
                <p className='text-center'>Login With</p>
                <div className='d-flex justify-content-center gap-2'>
                  <button className='btn btn-outline-danger'><i className="bi bi-google"></i></button>
                  <button className='btn btn-outline-danger'><i className="bi bi-linkedin"></i></button>
                  <button className='btn btn-outline-danger'><i className="bi bi-github"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;