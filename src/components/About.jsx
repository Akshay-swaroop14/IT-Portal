import React from 'react';
import Navbar from './Navbar';

function About() {
  const styles = {
    page: {
      position: 'relative',
      backgroundImage: 'url("/assets/ofc.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      paddingTop: '100px',
      fontFamily: 'Arial, sans-serif',
      color: '#000',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0)', 
      zIndex: 1,
    },
    content: {
      position: 'relative',
      zIndex: 2,
      maxWidth: '900px',
      margin: '0 auto',
      marginTop: '50px',
      padding: '40px',
      backgroundColor: 'rgba(255, 233, 200, 0.78)',
      borderRadius: '12px',
      textAlign: 'center',
    },
    heading: {
      fontSize: '36px',
      marginBottom: '20px',
    },
    paragraph: {
      fontSize: '16px',
      lineHeight: '1.6',
    },
  };

  return (
    <div style={styles.page}>
      <Navbar />
      <div style={styles.overlay}></div>

      <div style={styles.content}>
        <h1 style={styles.heading}>About Our IT Team</h1>
        <p style={styles.paragraph}>
          At Verifacts, our IT department is the backbone of innovation, agility, and performance. We are a team of passionate developers, designers, testers, and tech leads committed to building reliable and scalable solutions.
        </p>
        <p style={styles.paragraph}>
          From product ideation to deployment and support, our team follows best practices in software development, cloud infrastructure, DevOps, and data security. We believe in teamwork, continuous learning, and staying ahead of the curve.
        </p>
      </div>
    </div>
  );
}

export default About;
