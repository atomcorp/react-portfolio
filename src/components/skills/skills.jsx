import React from 'react';
import styles from './skills.module.css';
import { content } from '../../content.js';
// import Navigation from '../navigation/navigation.jsx';

export default function Skills(props) {

  function returnSkill() {
    const skills = content.skills.map((skill, id) => {
      const paragraphs = skill.detail.map((paragraph, id) => {
        return <p key={ id }>{ paragraph }</p>;
      });
      return (
        <article key={skill.name} className={styles.skill + ` ${styles.skill}${skill.name}`}>
          <div className={styles.name}>
            <h3>{skill.name}</h3>
          </div>
          <div className={styles.detail}>
            { paragraphs }
          </div>
        </article>
      );
    });
    return skills;
  }

  return (
    <section>
      <div className={styles.page}>
        <div className={styles.heading}>
          <h2>Skills</h2>
        </div>
        <div className={styles.skills}>
          { returnSkill() }
        </div>
      </div>
    </section>
  );
}

