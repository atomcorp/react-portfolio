import React from 'react';
import styles from './skills.module.css';
import { content } from '../../content.js';
import Navigation from '../navigation/navigation.jsx';

export default function(props) {

  function returnSkill() {
    const skills = content.skills.map((skill) => {
      return (
        <div key={skill.name} className={styles.skill}>
          <div className={styles.name}>
            <h3>{skill.name}</h3>
          </div>
          <div className={styles.detail}>
            {skill.detail}
          </div>
        </div>
      );
    });
    return skills;
  }

  return (
    <section>
      <div className={styles.page}>
      <Navigation />
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

