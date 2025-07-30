// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';

// function RegisterForm() {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = 'Name is required';
//     if (!formData.email.trim()) newErrors.email = 'Email is required';
//     else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
//     if (!formData.password) newErrors.password = 'Password is required';
//     else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       localStorage.setItem('user', JSON.stringify(formData));
//       alert('Registration successful!');
//       navigate('/login');
//     }
//   };

//   const styles = {
//     page: {
//       minHeight: '100vh',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//      backgroundImage: 'url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80")',
//       padding: '20px',
//     },
//     form: {
//       backgroundColor: '#fff',
//       padding: '30px',
//       borderRadius: '12px',
//       boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
//       maxWidth: '400px',
//       width: '100%',
//       boxSizing: 'border-box',
//       fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//     },
//     heading: {
//       textAlign: 'center',
//       marginBottom: '20px',
//       color: '#333',
//       fontWeight: '700',
//       fontSize: '28px',
//     },
//     label: {
//       display: 'block',
//       marginBottom: '8px',
//       fontWeight: '600',
//       color: '#444',
//       fontSize: '15px',
//     },
//     input: {
//       width: '100%',
//       padding: '10px 12px',
//       marginBottom: '18px',
//       borderRadius: '6px',
//       border: '1.5px solid #ccc',
//       fontSize: '16px',
//       boxSizing: 'border-box',
//       outline: 'none',
//       transition: 'border-color 0.3s',
//     },
//     errorText: {
//       color: 'red',
//       marginTop: '-12px',
//       marginBottom: '12px',
//       fontWeight: '600',
//       fontSize: '14px',
//     },
//     button: {
//       width: '100%',
//       padding: '14px',
//       backgroundColor: '#007bff',
//       border: 'none',
//       borderRadius: '8px',
//       color: 'white',
//       fontWeight: '700',
//       fontSize: '18px',
//       cursor: 'pointer',
//       transition: 'background-color 0.3s',
//     },
//     buttonHover: {
//       backgroundColor: '#0056b3',
//     },
//     loginText: {
//       marginTop: '20px',
//       textAlign: 'center',
//       fontSize: '14px',
//       color: '#555',
//     },
//     link: {
//       color: '#007bff',
//       textDecoration: 'none',
//       fontWeight: '600',
//     },
//   };

//   return (
//     <div style={styles.page}>
//       <form
//         onSubmit={handleSubmit}
//         style={styles.form}
//         onFocus={(e) => e.target.style.borderColor = '#007bff'}
//         onBlur={(e) => e.target.style.borderColor = '#ccc'}
//       >
//         <h2 style={styles.heading}>Register</h2>

//         <label style={styles.label} htmlFor="name">Name:</label>
//         <input
//           id="name"
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           style={styles.input}
//           required
//         />
//         {errors.name && <p style={styles.errorText}>{errors.name}</p>}

//         <label style={styles.label} htmlFor="email">Email:</label>
//         <input
//           id="email"
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           style={styles.input}
//           required
//         />
//         {errors.email && <p style={styles.errorText}>{errors.email}</p>}

//         <label style={styles.label} htmlFor="password">Password:</label>
//         <input
//           id="password"
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           style={styles.input}
//           required
//           minLength={6}
//         />
//         {errors.password && <p style={styles.errorText}>{errors.password}</p>}

//         <button type="submit" style={styles.button}>Register</button>

//         <p style={styles.loginText}>
//           Already have an account?{' '}
//           <Link to="/login" style={styles.link}>Login</Link>
//         </p>
//       </form>
//     </div>
//   );
// }

// export default RegisterForm;


















































import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.password.trim()) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (formData.confirmPassword !== formData.password) newErrors.confirmPassword = 'Passwords do not match';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem('verifaUser', JSON.stringify(formData));
      alert('Registration successful!');
      navigate('/login');
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
        <h2 style={styles.heading}>Verifacts IT Portal - Register</h2>

        <label style={styles.label} htmlFor="name">Name</label>
        <input id="name" name="name" value={formData.name} onChange={handleChange} style={styles.input} />
        {errors.name && <div style={styles.errorText}>⚠ {errors.name}</div>}

        <label style={styles.label} htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} style={styles.input} />
        {errors.email && <div style={styles.errorText}>⚠ {errors.email}</div>}

        <label style={styles.label} htmlFor="password">Password</label>
        <input id="password" name="password" type="password" value={formData.password} onChange={handleChange} style={styles.input} />
        {errors.password && <div style={styles.errorText}>⚠ {errors.password}</div>}

        <label style={styles.label} htmlFor="confirmPassword">Confirm Password</label>
        <input id="confirmPassword" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} style={styles.input} />
        {errors.confirmPassword && <div style={styles.errorText}>⚠ {errors.confirmPassword}</div>}

        <button type="submit" style={styles.button}>Register</button>

        <p style={styles.toggle}>
          Already have an account?{' '}
          <span style={styles.link} onClick={() => navigate('/login')}>Login here</span>
        </p>
      </form>
    </div>
  );
}

export default RegisterForm;
