import React, { useEffect, useState } from 'react';
import styles from './AutoScroll.module.css'

function AutoScroll() {

  const moonRadius = 1737.4 // km
  const onePixel = 2 * moonRadius // Size of One Pixel
  const speedOfLight = 300_000 // km/s 
  const scrollSpeed = speedOfLight / onePixel;

  const [isAutoScrolling, setIsAutoScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener('wheel', (event) => {
      event.preventDefault();
      setIsAutoScrolling(false);
    });
    window.addEventListener('click', event => {
      event.preventDefault();
      if(event.target !== document.getElementById('button-auto-scroll')) {
        setIsAutoScrolling(false);
        console.log(event.target);
      }
    });
  }, [])

  useEffect(() => {
    if (!isAutoScrolling) return;

    const intervalID = setInterval(() => {
      window.scrollBy(Math.round(scrollSpeed)/40, 0);
    }, 25)

    return () => clearInterval(intervalID);
  }, [isAutoScrolling]);

  return (
    <div className={styles.autoscroll} onClick={() => setIsAutoScrolling(!isAutoScrolling)}>
      <img id='button-auto-scroll' src={require('../icons/Comet.png')} alt='light-speed'></img>
    </div>
  );
}

export default AutoScroll;