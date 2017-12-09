// @flow
import React, { Component } from 'react';
import styles from './introduction.module.css';
import { content } from '../../content.js';
import { Link } from 'react-router-dom';

type Props = {
  
};

export default class Introduction extends Component<Props> {

  returnLinks() {
    let id = 0;
    const links = content.links.map((link) => {
      return (
        <Link key={id++} to={link.path} className={styles.link}>
          { link.title }
        </Link>
      );
    })
    return links;
  }
  
  render() {
    return (
      <section className={styles.page}>
        <div className={styles.content}>
          <div className={styles.copy}>
            <div className={styles.title}>
              <h1>{ content.title }</h1>
            </div>
            <div className={styles.introduction}>
              <p>{ content.introduction }</p>
            </div>
          </div>
          <div className={styles.links}>
            { this.returnLinks() }
          </div>
        </div>
        
      </section>
      )
  }
}
