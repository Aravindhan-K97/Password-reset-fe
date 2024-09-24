import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const ResetPasswordPage = () => {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleResetPassword = async () => {
    if (password !== repeatPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      await axios.post(`http://localhost:3000/auth/reset-password/${token}`, { password, repeatPassword });
      alert('Password reset completed');
    } catch (error) {
      alert('Error resetting password');
      console.error('Error resetting password:', error);
    }
  };

  return (
    <div className="container-fluid">
      <div className='row d-flex justify-content-center'>
        <div className='col-sm-12 col-md-8 col-lg-6 col-xl-6'>
          <div className="container reset-page mt-5 px-4 py-4">
            <div className='row d-flex justify-content-center'>
              <div className='col-sm-10 col-md-8 col-lg-8 col-xl-8'>
                <h3 className="text-center">Reset Password</h3>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="mb-3">
                    <label className="form-label">New Password</label>
                    <input
                      type="password"
                      className="form-control newpassword"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Confirm New Password</label>
                    <input
                      type="password"
                      className="form-control confirm-password"
                      value={repeatPassword}
                      onChange={(e) => setRepeatPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className='d-flex justify-content-center'>
                    <button type="button" className="btn btn-primary" onClick={handleResetPassword}>
                      Reset Password
                    </button>
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

export default ResetPasswordPage;
