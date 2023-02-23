import React, { useEffect, useState } from 'react';
import '../App.css';


function AutoScroll() {

  const moonRadius = 1737.4 // km
  const onePixel = 2 * moonRadius // Size of One Pixel
  const speedOfLight = 300_000 // km/s 
  const scrollSpeed = speedOfLight / onePixel;

  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  function handleClick() {
    setIsAutoScrolling(!isAutoScrolling);
  }

  useEffect(() => {
    if (!isAutoScrolling) return;

    const intervalID = setInterval(() => {
        window.scrollBy(scrollSpeed/20, 0);
    }, 50)

    return () => clearInterval(intervalID);
  }, [isAutoScrolling]);

  return (
    <button className='auto-scroll' type='button' onClick={() => handleClick()}>AutoScroll</button>
  );
}

export default AutoScroll;