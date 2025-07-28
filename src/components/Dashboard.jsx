import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar'; 
import { FiLogOut } from 'react-icons/fi';

function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const styles = {
    page: {
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
    },
    contentSection: {
      paddingTop: '80px', 
      backgroundImage: 'url("/assets/IT.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      position: 'relative',
      minHeight: 'calc(100vh - 80px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(255,255,255,0.75)',
      zIndex: 0,
    },
    content: {
      zIndex: 1,
      textAlign: 'center',
      padding: '20px',
    },
    heading: {
      fontSize: '36px',
      fontWeight: 'bold',
      color: '#052640',
      marginBottom: '10px',
    },
    subText: {
      fontSize: '18px',
      color: '#333',
      marginBottom: '20px',
    },
    button: {
      display: 'inline-block',
      backgroundColor: '#052640',
      color: '#fff',
      padding: '12px 24px',
      borderRadius: '5px',
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: '14px',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
    },
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div style={styles.page}>
      <Navbar handleLogout={handleLogout} />

   
      <div style={styles.contentSection}>
        <div style={styles.overlay}></div>
        <div style={styles.content}>
          <h1 style={styles.heading}>Welcome to Verifacts IT Portal</h1>
          <p style={styles.subText}>Your trusted partner in technology, support, and innovation.</p>
          <Link to="/team" style={styles.button}>Meet Our Team</Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
