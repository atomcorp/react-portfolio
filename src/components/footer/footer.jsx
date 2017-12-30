import React from 'react';
import styles from './footer.module.css';

export default function Footer() {

  return (
    <footer className={styles.footer}>
      Thomas Maxwell Smith Portfolio, made with React. View on <a href="https://github.com/atomcorp/react-portfolio">Github</a>
    </footer>
  );
}