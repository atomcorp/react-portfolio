import React from 'react';
import {Link} from 'react-router-dom'; 
import styles from './navigation.module.css';

export default function Navigation() {

  return (
    <nav className={styles.navigation}>
      <Link to="/">Home</Link>
    </nav>
  );
}