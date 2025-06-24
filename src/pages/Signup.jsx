import React, { useState, useContext } from 'react';
import './Page.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Form, Button, Container } from 'react-bootstrap';

const Signup = () => {
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.password !== userData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    signup(userData);
    alert("Signup successful! Please login.");
    navigate('/login');
  };

  return (
    <Container className="page py-5" style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h2 className="text-center mb-4 fw-bold">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Full Name"
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            value={userData.name}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Control
            type="email"
            placeholder="Email"
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            value={userData.email}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
            value={userData.password}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setUserData({ ...userData, confirmPassword: e.target.value })}
            value={userData.confirmPassword}
          />
        </Form.Group>

        {error && <div className="text-danger mb-3">{error}</div>}

        <Button variant="success" type="submit" className="w-100">
          Create Account
        </Button>
      </form>
    </Container>
  );
};

export default Signup;
