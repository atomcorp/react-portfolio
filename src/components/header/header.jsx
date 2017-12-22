import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../navigation/navigation.jsx';
import styles from './header.module.css';
import { content } from '../../content.js';

export default function Header(props) {

  return (
    <header>
      <div className={ styles.header }>
        <div className="site">
          <Link to={'/'} className={styles.title}>
            { content.title }
          </Link>
        </div>
        <Navigation />
      </div>
    </header>
  );
}