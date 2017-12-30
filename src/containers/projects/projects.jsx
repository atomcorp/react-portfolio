import React, { Component } from 'react';
import Project from '../../containers/project/project.jsx';
import styles from './projects.module.css';
import { content } from '../../content.js';
// import Navigation from '../../components/navigation/navigation.jsx';

export default class Projects extends Component {

  returnProjects() {
    const projects = content.projects.map((project, id) => {
      const isReversed = id % 2 > 0 ? 'reversed' : 'notReversed';
      return <Project key={id} project={ project } reverse={ isReversed }></Project>;
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