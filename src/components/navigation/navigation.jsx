import React from 'react';
import {NavLink} from 'react-router-dom'; 
import styles from './navigation.module.css';
import { content } from '../../content.js';

export default function Navigation(props) {

  function returnLinks() {
    const links = content.links.map((link) => {
      return (
        <NavLink key={link.path} to={link.path} activeClassName={styles.active} className={`${styles.link}`}>
          { link.title }
        </NavLink>
      );
    })
    return links;
  }

  return (
    <nav className={styles.navigation}>
      {/*<Link to={'/'} className={styles.link}>Home</Link>*/}
      { returnLinks() }
    </nav>
  );
}