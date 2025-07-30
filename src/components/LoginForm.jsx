import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.password.trim()) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const savedUser = JSON.parse(localStorage.getItem('verifaUser'));
      if (
        savedUser &&
        formData.email === savedUser.email &&
        formData.password === savedUser.password
      ) {
        alert('Login successful!');
        navigate('/dashboard');
      } else {
        alert('Invalid credentials!');
      }
    }
  };

  const styles = {
     page: {
    minHeight: '100vh',
    backgroundImage: 'url("/assets/img.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  form: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    borderRadius: '16px',
    padding: '40px',
    maxWidth: '380px',
    width: '90%',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(15px)',
    WebkitBackdropFilter: 'blur(15px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  logo: {
    width: '120px',
    margin: '0 auto 20px',
    display: 'block',
  },
  heading: {
    fontSize: '26px',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '20px',
    color: '#ffffff',
  },
  label: {
    display: 'block',
    fontWeight: '500',
    fontSize: '14px',
    marginBottom: '6px',
    color: '#f1f5f9',
  },
  input: {
    width: '100%',
    padding: '12px 14px',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    fontSize: '15px',
    marginBottom: '10px',
    outline: 'none',
    background: 'rgba(255, 255, 255, 0.1)',
    color: '#fff',
  },
  errorText: {
    color: '#f87171',
    fontSize: '13px',
    marginBottom: '10px',
  },
  button: {
    width: '100%',
    padding: '14px',
    background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
    border: 'none',
    borderRadius: '8px',
    color: 'white',
    fontWeight: '600',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '12px',
  },
  toggle: {
    textAlign: 'center',
    marginTop: '16px',
    color: '#e2e8f0',
  },
  link: {
    color: '#38bdf8',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
  };

  return (
    <div style={styles.page}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <img src="/assets/abc.png" alt="VeriFa Logo" style={styles.logo} />
        <h2 style={styles.heading}>Verifacts IT Portal - Login</h2>

        <label style={styles.label} htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} style={styles.input} />
        {errors.email && <div style={styles.errorText}>⚠ {errors.email}</div>}

        <label style={styles.label} htmlFor="password">Password</label>
        <input id="password" name="password" type="password" value={formData.password} onChange={handleChange} style={styles.input} />
        {errors.password && <div style={styles.errorText}>⚠ {errors.password}</div>}

        <button type="submit" style={styles.button}>Login</button>

        <p style={styles.toggle}>
          Don't have an account?{' '}
          <span style={styles.link} onClick={() => navigate('/')}>Register now</span>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
