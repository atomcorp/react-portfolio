import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import styles from './project.module.css';
import ProgressiveImage from 'react-progressive-image';

export default class Project extends Component {

  constructor(props) {
    super(props);
    this.imageLoaded = false;
    this.traveled = 0;
  }

  handleTravel() {
    const offset = this.image.offsetParent.clientHeight;
    const distance = this.image.scrollHeight - offset;
    const breaks = distance < 1500 ? 3 : 4;
    const travel = (distance / breaks) + this.traveled;
    if (travel <= distance) {
      this.image.style.transform = `translate3D(0, -${travel}px, 0)`;
      this.traveled = travel;
    } else {
      this.reset();
    }    
  }

  reset() {
    this.image.style.transform = `translate3D(0, 0, 0)`;
    this.traveled = 0;
  }

  handleClick() {
    this.handleTravel();
  }

  render() {
    const project = this.props.project;
    const smallImage = require(`../../assets/projects${project['small-image']}`);
    const largeImage = require(`../../assets/projects${project['image']}`);
    return (
      <section className={styles.project + ' ' + styles[this.props.reverse]}>
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
            {
              (src, loading) => {
              const hasClass = loading ? styles.loadingImg : styles.loadedImg;
              return <img 
                ref={(img) => this.image = img} 
                onClick={() => this.handleClick()}
                className={hasClass} 
                src={src} 
                alt={`Screenshot of ${project.name} web page`} />;
              }
            }
          </ProgressiveImage>
          {/*
          <div className={styles.encourage}>
            <img src={ downArrowImage } alt=""/>
          </div>

          */}
        </div>

      </section>
    );
  }
  
}