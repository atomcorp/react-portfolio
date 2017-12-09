import React from 'react';
import { Link } from 'react-router-dom'; 
import styles from './project.module.css';

export default function Project(props) {
  const project = props.project;
  console.log(props.reverse);
  const image = require(`../../assets/projects${project.image}`);
  return (
    <section className={styles.project + ' ' + styles[props.reverse]}>
      <div className={styles.copy}>
        <div className={styles.name}>
          { project.name }
        </div>
        <div className={styles.brief}>
          { project.brief }
        </div>
        <Link to={ project.link } className={styles.link}>
          info + images
        </Link>
      </div>
      <div className={styles.image}>
        {  }
        <img src={image} alt={`Screenshot of ${project.name} web page`} />
      </div>

    </section>
  );
}