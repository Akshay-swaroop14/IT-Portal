import React from 'react';
import Navbar from './Navbar';

function TechStack() {
  const tech = [
    { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'Vercel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
   { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
  ];

  const styles = {
    page: {
      position: 'relative',
      backgroundImage: 'url("/assets/techstack.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      paddingTop: '100px',
      fontFamily: 'Arial, sans-serif',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.75)', 
      zIndex: 1,
    },
    content: {
      position: 'relative',
      zIndex: 2,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    heading: {
      fontSize: '28px',
      color: '#052640',
      marginBottom: '30px',
    },
    grid: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '25px',
      maxWidth: '1000px',
      padding: '20px',
    },
    badge: {
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      width: '130px',
      height: '130px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px',
      textAlign: 'center',
    },
    logo: {
      width: '50px',
      height: '50px',
      objectFit: 'contain',
      marginBottom: '10px',
    },
    label: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#333',
    },
  };

  return (
    <div style={styles.page}>
      <Navbar />
      <div style={styles.overlay}></div>
      <div style={styles.content}>
        <h2 style={styles.heading}>Our Tech Stack</h2>
        <div style={styles.grid}>
          {tech.map((item, index) => (
            <div key={index} style={styles.badge}>
              <img src={item.logo} alt={item.name} style={styles.logo} />
              <div style={styles.label}>{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechStack;
