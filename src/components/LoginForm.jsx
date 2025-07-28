import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function LoginForm() {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (
      storedUser &&
      storedUser.email === loginData.email &&
      storedUser.password === loginData.password
    ) {
      alert('Login successful!');
      navigate('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  const styles = {
    page: {
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: 'url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '20px',
    },
    form: {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      padding: '30px',
      borderRadius: '10px',
      width: '100%',
      maxWidth: '400px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
      boxSizing: 'border-box',
    },
    heading: {
      marginBottom: '20px',
      textAlign: 'center',
      color: '#333',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    label: {
      display: 'block',
      marginBottom: '6px',
      fontWeight: '600',
      color: '#444',
      fontSize: '14px',
    },
    input: {
      width: '100%',
      padding: '10px 12px',
      marginBottom: '18px',
      borderRadius: '6px',
      border: '1.5px solid #ccc',
      fontSize: '16px',
      boxSizing: 'border-box',
      outline: 'none',
      transition: 'border-color 0.3s',
    },
    inputFocus: {
      borderColor: '#007bff',
    },
    errorText: {
      color: 'red',
      marginBottom: '15px',
      fontWeight: '600',
      textAlign: 'center',
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#007bff',
      border: 'none',
      borderRadius: '6px',
      color: 'white',
      fontWeight: '700',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    registerText: {
      marginTop: '20px',
      textAlign: 'center',
      fontSize: '14px',
      color: '#555',
    },
    link: {
      color: '#007bff',
      textDecoration: 'none',
      fontWeight: '600',
    },
  };

  return (
    <div style={styles.page}>
      <form
        onSubmit={handleSubmit}
        style={styles.form}
        onFocus={(e) => e.target.style.borderColor = '#007bff'}
        onBlur={(e) => e.target.style.borderColor = '#ccc'}
      >
        <h2 style={styles.heading}>Login</h2>

        <label style={styles.label} htmlFor="email">
          Email:
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={loginData.email}
          onChange={handleChange}
          style={styles.input}
          required
          autoComplete="username"
        />

        <label style={styles.label} htmlFor="password">
          Password:
        </label>
        <input
          id="password"
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
          style={styles.input}
          required
          autoComplete="current-password"
        />

        {error && <p style={styles.errorText}>{error}</p>}

        <button type="submit" style={styles.button}>
          Login
        </button>

        <p style={styles.registerText}>
          Don't have an account?{' '}
          <Link to="/register" style={styles.link}>
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
