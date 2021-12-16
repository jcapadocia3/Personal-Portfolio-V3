import React from 'react';

const styles = {
  card: {
    display: 'flex',
    justifyContent: 'center',
    margin: '25px 0 25px 0',
    fontSize: '20px'
  },

  par: {
    marginRight: '5px',
  }
};

export default function Footer() {
  return (
    <div style={styles.card}>
        <p style={styles.par}>P: 847.730.7599</p>
        <p style={styles.par}> ||</p>
        <p style={styles.par}>E: james.capadocia@gmail.com</p>
        <p style={styles.par}> ||</p>
        <p style={styles.par}><a id="third-2" href="https://linkedin.com/in/james-capadocia-156367217">LinkedIn</a></p>
        <p style={styles.par}> ||</p>
        <p><a id="third-2" href="./assets/images/NEW Resume.pdf">Github</a></p>
    </div>
  );
}
