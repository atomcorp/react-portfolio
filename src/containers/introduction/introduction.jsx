import React, { Component } from 'react';
import styles from './introduction.module.css';
import { content } from '../../content.js';

export default class Introduction extends Component {
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
            <div className={styles.link}>Projects</div>
            <div className={styles.link}>Experience</div>
            <div className={styles.link}>Skills</div>
            <div className={styles.link}>Contact</div>
          </div>
        </div>
        
      </section>
      )
  }
}
