import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here, e.g. API call to authenticate user
    // For demonstration purposes, assume login is successful
    if (email === 'admin@example.com' && password === 'password') {
      navigate('/dashboard', { replace: true });
    } else {
      alert('Invalid email or password');
    }
  };
  
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
      }}
    >
      <div
        style={{
          width: 400,
          backgroundColor: '#fff',
          padding: 20,
          borderRadius: 10,
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 20,
            color: '#333',
          }}
        >
          Login to StayGuide
        </h2>
        <form onSubmit={handleSubmit}>
          <div
            style={{
              marginBottom: 20,
            }}
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              style={{
                width: '100%',
                padding: 10,
                fontSize: 16,
                border: 'none',
                borderRadius: 5,
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              }}
            />
          </div>
          <div
            style={{
              marginBottom: 20,
            }}
          >
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              style={{
                width: '100%',
                padding: 10,
                fontSize: 16,
                border: 'none',
                borderRadius: 5,
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              }}
            />
          </div>
          <div
            style={{
              marginBottom: 20,
            }}
          >
            <button
              type="submit"
              style={{
                width: '100%',
                padding: 10,
                fontSize: 16,
                backgroundColor: '#337ab7',
                color: '#fff',
                border: 'none',
                borderRadius: 5,
                cursor: 'pointer',
              }}
            >
              Login
            </button>
          </div>
          <div
            style={{
              fontSize: 14,
              color: '#666',
            }}
          >
            Don't have an account? <Link to="/SignUp" style={{ textDecoration: 'none', color: '#337ab7' }}>Signup</Link>
          </div>
        </form>
      </div>
    </div>
  );
};