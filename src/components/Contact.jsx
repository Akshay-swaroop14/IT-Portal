import React from 'react';
import Navbar from './Navbar';

function Contact() {
  const styles = {
    page: {
      position: 'relative',
      backgroundImage: 'url("/assets/col.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      paddingTop: '100px', 
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      zIndex: 1,
    },
    content: {
      position: 'relative',
      zIndex: 2,
      maxWidth: '600px',
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
      padding: '40px',
      borderRadius: '12px',
      backdropFilter: 'blur(6px)',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      textAlign: 'center',
    },
    heading: {
      fontSize: '28px',
      color: '#052640',
      marginBottom: '20px',
    },
    paragraph: {
      fontSize: '16px',
      color: '#333',
      marginBottom: '10px',
    },
    email: {
      color: '#007bff',
      fontWeight: 'bold',
      textDecoration: 'none',
    },
  };

  return (
    <div style={styles.page}>
      <Navbar />
      <div style={styles.overlay}></div>
      <div style={styles.content}>
        <h2 style={styles.heading}>Contact Us</h2>
        <p style={styles.paragraph}>Have questions or feedback?</p>
        <p style={styles.paragraph}>Reach out to our IT team for any support or queries.</p>
        <p style={styles.paragraph}>
          Email us at: <a href="mailto:it.support@verifacts.com" style={styles.email}>it.support@verifacts.co.in</a>
        </p>
        <p style={styles.paragraph}>Office Hours: Mon - Fri | 9:30 AM - 6:30 PM</p>
      </div>
    </div>
  );
}

export default Contact;
