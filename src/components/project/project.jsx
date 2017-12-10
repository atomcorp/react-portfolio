import React from 'react';
import { Link } from 'react-router-dom'; 
import styles from './project.module.css';
import ProgressiveImage from 'react-progressive-image';

export default function Project(props) {
  const project = props.project;
  console.log(project)
  const smallImage = require(`../../assets/projects${project['small-image']}`);
  const largeImage = require(`../../assets/projects${project['image']}`);

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
          View
        </Link>
      </div>
      <div className={styles.image}>
        <ProgressiveImage src={largeImage} placeholder={smallImage}>
          {(src, loading) => {
            const hasClass = loading ? styles.loadingImg : styles.loadedImg;
            return <img className={hasClass} src={src} alt={`Screenshot of ${project.name} web page`} />;
            }
          }
        </ProgressiveImage>
      </div>

    </section>
  );
}