// @flow
import React, { Component } from 'react';
import styles from './introduction.module.css';
import { content } from '../../content.js';
// import Blob from '../../components/blob/blob.jsx';

type Props = {
  
};

export default class Introduction extends Component<Props> {

  returnFirstAnimation() {
    let animate = '';
    if (!sessionStorage.getItem('firstRun')) {
      animate = ` ${styles.animate}`;
      sessionStorage.setItem('firstRun', 'true');
    }
    return animate;
  }

  returnLinks() {
    const links = content.links.map((link) => {
      return (
        <a key={link.path} href={`#${link.path}`} className={styles.link}>
          { link.title }
        </a>
      );
    })
    return links;
  }
  
  render() {
    const animate = this.returnFirstAnimation();
    // const animate = ` ${styles.animate}`;
    return (
      
      <section className={styles.page}>
        <div className={styles.content}>
          <div className={styles.copy}>
            <div className={styles.title + animate}>
              <h1>{ content.title }</h1>
            </div>
            <div className={styles.introduction + animate}>
              <h2>{ content.introduction }</h2>
            </div>
          </div>
          <div className={styles.links + animate}>
            { this.returnLinks() }
          </div>
        </div>
      </section>
      )
  }
}
