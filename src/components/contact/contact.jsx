import React from 'react';
import styles from './contact.module.css';
import { content } from '../../content.js';

export default function Contact() {

  return (
    <div className={ styles.page }>
      <div className={ styles.heading }>
        <h2>Contact</h2>
      </div>
      <div className={ styles.content }>
        <div className={ styles.contact }>
          <div className={ styles.name }>
            <h3>Email</h3>
          </div>
          <div className={ styles.detail }>
            faotms@gmail.com
          </div>
        </div>
        <div className={ styles.contact }>
          <div className={ styles.name }>
            <h3>Phone</h3>
          </div>
          <div className={ styles.detail }>
            07800821737
          </div>
        </div>
      </div>
    </div>
  )
}
