// import React from 'react';
// import Navbar from './Navbar';

// function Projects() {
//   const styles = {
//     container: {
//       paddingTop: '100px',
//       backgroundColor: '#f0f8ff',
//       minHeight: '100vh',
//       fontFamily: 'Arial, sans-serif',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//       textAlign: 'center',
//       padding: '30px',
//     },
//     heading: {
//       fontSize: '28px',
//       color: '#052640',
//       marginBottom: '30px',
//     },
//     card: {
//       backgroundColor: '#fff',
//       borderRadius: '10px',
//       padding: '20px',
//       boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//       marginBottom: '20px',
//       maxWidth: '500px',
//       width: '100%',
//     },
//     projectTitle: {
//       fontSize: '20px',
//       color: '#0a2b63',
//       fontWeight: 'bold',
//     },
//     projectDesc: {
//       fontSize: '14px',
//       color: '#444',
//       marginTop: '10px',
//     },
//   };

//   const projectData = [
//     {
//       title: 'IT Helpdesk System',
//       desc: 'Internal ticketing tool for employee tech support.',
//     },
//     {
//       title: 'Employee Self-Service Portal',
//       desc: 'Secure portal for employees to manage personal information, payslips, and leaves.',
//     },
//     {
//       title: 'VPN Access Manager',
//       desc: 'Application to streamline and monitor VPN access across teams.',
//     },
//   ];

//   return (
//     <div style={styles.container}>
//       <Navbar />
//       <h2 style={styles.heading}>Our Projects</h2>
//       {projectData.map((project, index) => (
//         <div key={index} style={styles.card}>
//           <div style={styles.projectTitle}>{project.title}</div>
//           <div style={styles.projectDesc}>{project.desc}</div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Projects;































import React from 'react';
import Navbar from './Navbar';

function Projects() {
  const projects = [
    {
      name: 'Taskify',
      description:
        'A task management web app that allows users to create, assign, and track daily tasks within their teams.',
      image: '/assets/tas.jpg',
    },
    {
      name: 'Appraisal',
      description:
        'An employee appraisal system used by HR to gather 360-degree feedback and manage performance reviews.',
      image: '/assets/aprsail.jpg',
    },
    {
      name: 'Vibe',
      description:
        'VIBE-Verifacts Integrated Background Verification Engine, Empower your team with an end-to-end BGV solution',
      image: '/assets/vibe.jpg',
    },
    {
      name: 'GDB',
      description:
        'A global database system that provides secure access to verification records across regions.',
      image: '/assets/gds.avif',
    },
    {
      name: 'Checkmaro',
      description:
        'An audit and compliance checklist tool that automates task tracking for departments.',
      image: '/assets/checkmaro.jpg',
    },
    {
      name: 'Prehire',
      description:
        'A pre-employment assessment platform that evaluates candidates before interviews.',
      image: '/assets/preh.jpg',
    },
  ];

  const styles = {
   page: {
  paddingTop: '100px',
  minHeight: '100vh',
  fontFamily: 'Arial, sans-serif',
  backgroundImage: "url('/assets/')", 
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed', 
},
    heading: {
      textAlign: 'center',
      fontSize: '32px',
      color: '#052640',
      marginBottom: '30px',
    },
    cardContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '30px',
      padding: '0 40px',
      justifyContent: 'center',
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      overflow: 'hidden',
      textAlign: 'center',
      paddingBottom: '20px',
    },
    image: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
    },
    name: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#052640',
      marginTop: '15px',
    },
    description: {
      fontSize: '14px',
      color: '#333',
      marginTop: '10px',
      padding: '0 15px',
    },
  };

  return (
    <div style={styles.page}>
      <Navbar />
      <h1 style={styles.heading}>Our Key Projects</h1>
      <div style={styles.cardContainer}>
        {projects.map((project, index) => (
          <div key={index} style={styles.card}>
            <img src={project.image} alt={project.name} style={styles.image} />
            <div style={styles.name}>{project.name}</div>
            <div style={styles.description}>{project.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
