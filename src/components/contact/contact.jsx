import React from 'react';
import styles from './contact.module.css';
import { content } from '../../content.js';

export default function Contact() {

  function returnContact() {
    const paragraphs = content.contact.map((contact, id) => {
      const linkPrefix = contact.name === 'Email' ? 'mailto' : 'tel';
      return (
        <div key={ id } className={ styles.contact }>
          <div className={ styles.detail }>
            <a href={ `${linkPrefix}:${contact.detail}` }>
              <span>{ contact.detail }</span>
            </a>
          </div>
        </div>
      );
    });
    return paragraphs;
  }

  return (
    <section>
      <div className={ styles.page }>
        <div className={ styles.heading }>
          <h2>Contact</h2>
        </div>
        <div className={ styles.content }>
          { returnContact() }        
        </div>
      </div>
    </section>
  )
}
