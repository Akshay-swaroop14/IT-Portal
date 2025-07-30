import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

function Navbar({ handleLogout }) {
  const [hoveredLink, setHoveredLink] = useState(null);

  const styles = {
    navbar: {
      backgroundColor: '#fff',
      borderBottom: '1px solid #ccc',
      padding: '10px 0',
      boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)',
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 999,
    },
    container: {
      maxWidth: '1300px',
      margin: '0 auto',
      padding: '0 30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    logo: {
      height: '60px',
      objectFit: 'contain',
    },
    links: {
      display: 'flex',
      gap: '25px',
    },
    link: {
      textDecoration: 'none',
      color: '#052640',
      fontWeight: 600,
      fontSize: '14px',
      transition: 'all 0.3s ease',
    },
    linkHover: {
      color: '#007bff',
      transform: 'translateY(-1px)',
    },
    logoutBtn: {
      backgroundColor: '#052640',
      color: '#fff',
      padding: '10px',
      borderRadius: '50%',
      cursor: 'pointer',
      boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
    },
  };

  const navItems = [
    { to: '/dashboard', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/team', label: 'Our Team' },
    { to: '/projects', label: 'Projects' },
    { to: '/tech', label: 'Tech Stack' },
    { to: '/contact', label: 'Contact Us' },
  ];

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <div>
          <img src="/assets/logo.png" alt="Verifacts Logo" style={styles.logo} />
        </div>

        <div style={styles.links}>
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              style={{
                ...styles.link,
                ...(hoveredLink === index ? styles.linkHover : {}),
              }}
              onMouseEnter={() => setHoveredLink(index)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div style={styles.logoutBtn} title="Logout" onClick={handleLogout}>
          <FiLogOut size={20} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
