import React from 'react';
import Navbar from './Navbar';

function Team() {
  const leaders = [
    {
      name: 'Mr. Arun Kumar',
      role: 'IT Manager',
      image: '/assets/sir.jpg',
      skills: 'Leadership, Cloud Infrastructure, Security, Strategic Planning',
    },
    {
      name: 'Mr. Shoaib Ahmed',
      role: 'Team Lead - Frontend',
      image: '/assets/soheb.jpg',
      skills: 'React.js, UI/UX, JavaScript, Responsive Design',
    },
    {
      name: 'Mr. Agni Anil',
      role: 'Team Lead - Backend',
      image: '/assets/agni.jpg',
      skills: 'Node.js, API Design, MongoDB, DevOps',
    },
  ];

  const developers = [
    {
      name: 'Ainan',
      role: 'Full Stack Developer',
      image: '/assets/ain.jpg',
      skills: 'MERN Stack, APIs, JWT',
    },
    {
      name: 'Shimul',
      role: 'Backend Developer',
      image: '/assets/shml.jpg',
      skills: 'Node.js, Express.js, MongoDB',
    },
    {
      name: 'Bhoomika',
      role: 'Frontend Developer',
      image: '/assets/bmk.jpg',
      skills: 'React.js,HTML,CSS',
    },
    {
      name: 'Ayushee',
      role: 'Frontend Developer',
      image: '/assets/aysh.jpg',
      skills: 'React.js,HTML,CSS',
    },
    {
      name: 'Shashank',
      role: 'IT Team Lead',
      image: '/assets/shas.jpg',
      skills: 'Support Engineer, Helpdesk',
    },
    {
      name: 'Adarsh',
      role: 'Full Stack Developer',
      image: '/assets/adrs.jpg',
      skills: 'MERN Stack, APIs, JWT',
    },
    {
      name: 'Harsha',
      role: 'Frontend Developer',
      image: '/assets/hrs.jpg',
      skills: 'React.js,HTML,CSS',
    },
    {
      name: 'Ajith',
      role: 'Frontend Developer',
      image: '/assets/ajts.jpg',
      skills: 'React.js,HTML,CSS',
    },
    {
      name: 'Srinivasa',
      role: 'Full Stack Developer',
      image: '/assets/srs.jpg',
      skills: 'MERN Stack, APIs, JWT',
    },
    {
      name: 'Sunil',
      role: 'Frontend Developer',
      image: '/assets/sls.jpg',
      skills: 'Angular,React,HTML,CSS',
    },
    {
      name: 'Vinodh',
      role: 'Backend Developer',
      image: '/assets/vin.jpg',
      skills: 'Node.js',
    },
    {
      name: 'Akshay',
      role: 'Frontend Developer',
      image: '/assets/aks.jpg',
      skills: 'React,Angular,HTML,CSS',
    },
    {
      name: 'Charan',
      role: 'Frontend Developer',
      image: '/assets/chrn.jpg',
      skills: 'React.js, CSS, HTML',
    },
    {
      name: 'Pramodh',
      role: 'WP Developer',
      image: '/assets/prmd.jpg',
      skills: 'WordPress REST API',
    },
    {
      name: 'Jagannadh',
      role: 'IT Support',
      image: '/assets/jaga.jpg',
      skills: 'Troubleshooting, Hardware, Networks',
    },
    {
      name: 'Basavaraj',
      role: 'IT Support',
      image: '/assets/basa.jpg',
      skills: 'Troubleshooting, Hardware, Networks',
    }
  ];

  const styles = {
    page: {
      paddingTop: '100px',
      backgroundImage: 'url("/assets/logos.png")', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      position: 'relative',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
    },
    content: {
      position: 'relative',
      zIndex: 1,
    },
    heading: {
      textAlign: 'center',
      fontSize: '32px',
      color: '#ffffff',
      marginBottom: '20px',
    },
    cardContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '30px',
      flexWrap: 'wrap',
      padding: '20px',
    },
    card: {
      backgroundColor: 'rgba(0, 0, 0, 0.73)',
      width: '280px',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
      overflow: 'hidden',
      textAlign: 'center',
      paddingBottom: '20px',
      backdropFilter: 'blur(5px)',
      color: '#fff',
    },
    image: {
      width: '100%',
      height: '250px',
      objectFit: 'cover',
    },
    name: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginTop: '12px',
    },
    role: {
      fontSize: '14px',
      marginTop: '5px',
    },
    skills: {
      fontSize: '13px',
      marginTop: '10px',
      padding: '0 10px',
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.overlay}></div>
      <div style={styles.content}>
        <Navbar />

        <h1 style={styles.heading}>Meet Our IT Leaders</h1>
        <div style={styles.cardContainer}>
          {leaders.map((member, index) => (
            <div key={index} style={styles.card}>
              <img src={member.image} alt={member.name} style={styles.image} />
              <div style={styles.name}>{member.name}</div>
              <div style={styles.role}>{member.role}</div>
              <div style={styles.skills}>{member.skills}</div>
            </div>
          ))}
        </div>

        <h1 style={styles.heading}>Our IT Developers</h1>
        <div style={styles.cardContainer}>
          {developers.map((dev, index) => (
            <div key={index} style={styles.card}>
              <img src={dev.image} alt={dev.name} style={styles.image} />
              <div style={styles.name}>{dev.name}</div>
              <div style={styles.role}>{dev.role}</div>
              <div style={styles.skills}>{dev.skills}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
