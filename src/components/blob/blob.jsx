import React from 'react';
import styles from './blob.module.css';
import image from '../../assets/clip-masks/watercolor-1.jpg';

export default function Blob() {

  const style = 'fill: red';

  function returnBlobShape() {
    const start = 'M 259.94,49.53';
    const firstCurve = 'c 0, 59.46-51,151.92-105.23,151.92';
    const nextPoints = 'S 0,173.11, 0,113.64, 5,.75, 59.24.75,259.94-9.94, 259.94,49.53'; // 5
  }

  return (
    <section>
      <img className={styles.clipSvg} src={image} alt="Watercolor" />
      <svg  data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="0" height="0" viewBox="0 0 259.94 201.45" preserveAspectRatio="none">
        <defs><style>.cls-1{}</style></defs>
        <title>blob-1</title>
        <clipPath id="clip">
          <path style={{style}} className="cls-1" d="
              M 259.94,49.53
              c 0, 59.46-51,151.92-105.23,151.92
              S 0,173.11, 0,113.64, 5,.75, 59.24.75,259.94-9.94, 259.94,49.53
              Z
          "/>
        </clipPath>
      </svg>
    </section>
    
  );
}