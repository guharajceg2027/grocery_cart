import React, { useState } from 'react';
import './Page.css';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showLink, setShowLink] = useState(false);
  const navigate = useNavigate();

  const handleForgotPassword = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = storedUsers.find(user => user.email === email);

    if (userExists) {
      setMessage('✅ A reset link has been generated below.');
      setShowLink(true);
    } else {
      setMessage('❌ No account found with that email.');
      setShowLink(false);
    }
  };

  return (
    <div className="page">
      <h2>Forgot Password</h2>
      <form className="form" onSubmit={handleForgotPassword}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>

      {message && <p style={{ marginTop: '15px', color: '#4CAF50' }}>{message}</p>}

      {showLink && (
        <p style={{ marginTop: '10px' }}>
          🔗 <span style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
            onClick={() => navigate('/reset-password', { state: { email } })}
          >
            Click here to reset your password
          </span>
        </p>
      )}
    </div>
  );
};

export default ForgotPassword;
