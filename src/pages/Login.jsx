import React, { useState, useContext } from 'react';
import './Page.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Form, Button, Container } from 'react-bootstrap';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [data, setData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(data.email, data.password);
    if (success) {
      navigate('/purchase'); // Redirect to purchase after successful login
    } else {
      setError('❌ Invalid login credentials');
    }
  };

  return (
    <Container 
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh' }}
    >
      <div className="bg-light p-4 rounded shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="text-center mb-4 fw-bold">Login</h2>
        {error && <p className="text-danger text-center">{error}</p>}
        
        <Form onSubmit={handleSubmit}>
          {/* Email Field */}
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={(e) => setData({ ...data, email: e.target.value })}
              value={data.email}
              style={{ fontSize: '1.1rem' }}
            />
          </Form.Group>

          {/* Password Field */}
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setData({ ...data, password: e.target.value })}
              value={data.password}
              style={{ fontSize: '1.1rem' }}
            />
          </Form.Group>

          <Button variant="success" type="submit" className="w-100 py-2" style={{ fontSize: '1.1rem' }}>
            Login
          </Button>
        </Form>

        <p className="text-center mt-3">
          <span
            style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
            onClick={() => navigate('/forgot-password')}
          >
            Forgot Password?
          </span>
        </p>
      </div>
    </Container>
  );
};

export default Login;
