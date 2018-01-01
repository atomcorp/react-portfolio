import React, { Component } from 'react';
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
    const breaks = distance < 1500 ? 2 : 4;
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

  returnImage(project) {
    const smallImage = require(`../../assets/projects${project['small-image']}`);
    const largeImage = require(`../../assets/projects${project['image']}`);
    return (
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
      </div>
    );
  }

  returnTitle(project) {
    return (
      <div className={styles.name}>
        { project.name }
      </div>
    );
  }

  render() {
    const screenIsBig = document.querySelector('body').clientWidth >= 768 ? true : false;
    const project = this.props.project;
    return (
      <article className={styles.project + ' ' + styles[this.props.reverse]}>
        <div className={styles.copy}>
          { screenIsBig ? this.returnTitle(project) : this.returnImage(project) }
          <div className={styles.brief}>
            { project.brief }
          </div>
          {
            project.link ? (
              <a href={ project.link } className={styles.link}>
                <span>View</span>
              </a>
            ) : ''
          }
        </div>
        { screenIsBig ? this.returnImage(project) : this.returnTitle(project) }
      </article>
    );
  }
  
}