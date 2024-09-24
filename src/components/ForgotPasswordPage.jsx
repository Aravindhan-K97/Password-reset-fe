import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = async () => {
    try {
      await axios.post('http://localhost:3000/auth/forgot-password', { email });
      alert('Password reset link sent to your email');
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert('User not registered');
      } else {
        alert('Error sending password reset link');
      }
    }
  };

  return (
    <div className="container-fluid">
      <div className='row d-flext justify-content-center'>
        <div className='col-sm-12 col-md-8 col-lg-6 col-xl-6'>
          <div className='container mt-5 px-4 py-4 forgot-password-form'>
          <h3 className='text-center'>Forgot Password</h3>
          <p className='text-center mb-1'>Enter your email address and we'll send you an email with instructions to reset your password.</p>
          <div className='row d-flext justify-content-center'>
           <div className='col-sm-10 col-md-8 col-lg-8 col-xl-8'>
            <form>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control email-input" placeholder='Enter your Email...' value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className='d-flex justify-content-center gap-3'>
                <button type="button" className="btn btn-primary" onClick={handleForgotPassword}>Send Reset Link</button>
                <Link to={'/login'}>
                  <button type="button" className="btn btn-secondary">Back to Login</button>
                </Link>
              </div>
            </form>
           </div>
          </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default ForgotPasswordPage;
