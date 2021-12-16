import React from 'react';

const styles = {
  card: {
    display: 'flex',
    justifyContent: 'center',
    margin: '25px 0 25px 0',
    fontSize: '20px'
  },
};

function Nav({ currentPage, handlePageChange }) {
  return (
    <div style={styles.card}>
      <p className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </p>
      <p className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </p>
      <p className="nav-item">
        <a
          href="#work"
          onClick={() => handlePageChange('Work')}
          className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
        >
          Work
        </a>
      </p>
      <p className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </p>
    </div>
  );
}

export default Nav;
