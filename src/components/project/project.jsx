import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import styles from './project.module.css';
import ProgressiveImage from 'react-progressive-image';

export default class Project extends Component {

  constructor(props) {
    super(props);
    this.imageLoaded = false;
    this.traveled = 0;
    this.hovering = false;
    this.speed = 2000;
    this.timer;
  }

  setImageHeight() {
    this.image.onload = () => {
      this.imageLoaded = true;
    }
  }

  handleTravel() {
    const offset = this.image.offsetParent.clientHeight; 
    const travel = ((this.image.scrollHeight / 6) + this.traveled) - (offset / 5);
    if (travel < this.image.scrollHeight - offset) {
      this.image.style.transform = `translate3D(0, -${travel}px, 0)`;
      this.traveled = travel;
      this.timer = setTimeout(() => {
        if (this.hovering) {
          this.handleTravel();
        }
      }, 2000);
    } else {
      this.reset();
    }
    console.log(travel);
    
  }

  reset() {
    this.image.style.transform = `translate3D(0, 0, 0)`;
    this.traveled = 0;
  }

  handleMouseEnter() {
    this.traveled = 0;
    if (!this.height && !this.hovering) {
      this.hovering = true;
      this.handleTravel();
    }
  }

  handleMouseLeave() {
    this.hovering = false;
    clearTimeout(this.timer);
    this.reset();
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
              if (!loading) {
                this.setImageHeight();
              }
              return <img 
                ref={(img) => this.image = img} 
                onMouseEnter={() => this.handleMouseEnter()}
                onMouseLeave={() => this.handleMouseLeave()}
                className={hasClass} 
                src={src} 
                alt={`Screenshot of ${project.name} web page`} />;
              }
            }
          </ProgressiveImage>
        </div>

      </section>
    );
  }
  
}