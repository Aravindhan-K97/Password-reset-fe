import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleSignUp = async () => {
    if (password !== repeatPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      await axios.post('http://localhost:3000/auth/signup', { username, email, password, repeatPassword });
      alert('Sign-up successful');
      setUsername('');
      setEmail('');
      setPassword('');
      setRepeatPassword('');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        alert(`Error: ${error.response.data.message}`);
      } else {
        alert('Error signing up');
      }
    }
  };

  return (
    <div className="container-fluid">
       <div className='row d-flext justify-content-center'>
            <div className='col-sm-12 col-md-8 col-lg-6 col-xl-6'>
                <div className='container mt-5 py-4 sign-up-page'>
                <h3 className='text-center'>Register</h3>
                    <div className='row d-flext justify-content-center'>
                        <div className='col-sm-10 col-md-8 col-lg-8 col-xl-8'>
                        <form>
                            <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control name-input" value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control email-input" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control password-input" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="mb-3">
                            <label className="form-label">Repeat Password</label>
                            <input type="password" className="form-control repeat-password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
                            </div>
                            <div className='d-flex justify-content-center gap-3'>
                                <button type="button" className="btn btn-primary mt-2" onClick={handleSignUp}>Sign Up</button>
                                <Link to={'/login'}> 
                                  <button type="button" className="btn btn-secondary mt-2">Back to Login</button>
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

export default SignUpPage;
