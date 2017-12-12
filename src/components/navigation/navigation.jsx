import React from 'react';
import {Link} from 'react-router-dom'; 
import styles from './navigation.module.css';
import { content } from '../../content.js';

export default function Navigation(props) {
  console.log(props);

  function handleLocation(path) {
    const style = props.location === path ? styles.inactive : styles.active;
    return style;
  }

  function returnLinks() {
    const links = content.links.map((link) => {
      const location = handleLocation(link.path);
      return (
        <Link key={link.path} to={link.path} className={`${styles.link} ${location}`}>
          { link.title }
        </Link>
      );
    })
    return links;
  }

  return (
    <nav className={styles.navigation}>
      <Link to={'/'} className={styles.link}>Home</Link>
      { returnLinks() }
    </nav>
  );
}