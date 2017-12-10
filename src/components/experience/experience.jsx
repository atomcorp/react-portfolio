import React from 'react';
import styles from './experience.module.css';
import { content } from '../../content.js';
import Navigation from '../navigation/navigation.jsx';

export default function Experience(props) {

  function returnParagraphs() {
    const paragraphs = content.experience.map((paragraph, id) => {
      return <p key={ id }>{ paragraph }</p>;
    });
    return paragraphs;
  }

  return (
    <section>
      <div className={ styles.page }>
        <Navigation />
        <div className={styles.heading}>
          <h2>Experience</h2>
        </div>
        <div className={ styles.content }>
          <div className={ styles.copy }>
            { returnParagraphs() }
          </div>
          <div className={ styles.link }>
            <a href={ content.github }>View my Github</a>
          </div>
        </div>
      </div>
    </section>
  );
}