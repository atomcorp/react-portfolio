import React, { Component } from 'react';
import Project from '../../components/project/project.jsx';
import styles from './projects.module.css';
import { content } from '../../content.js';

export default class Projects extends Component {

  returnProjects() {
    let id = 0;
    const projects = content.projects.map((project) => {
      const isReversed = id % 2 > 0 ? 'reversed' : 'notReversed';
      return <Project key={id++} project={ project } reverse={ isReversed }></Project>;
    });
    return projects;
  }

  render() {
    return (
      <section>
        <div className={styles.page}>
          <div className={styles.heading}>
            <h2>Projects</h2>
          </div>
          <div className={styles.projects}>
            { this.returnProjects() }
          </div>
        </div>
      </section>
    );
  }
} 