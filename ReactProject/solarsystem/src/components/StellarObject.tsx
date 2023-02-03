import React, { useEffect, useRef } from 'react';
import { IStellarObject } from '../api/SolarSystemAPI';
import '../App.css';


function StellarObject(object: IStellarObject) {
  
  const moonRadius = 1737.4 // km
  const onePixel = 2 * moonRadius // Size of One Pixel
  let planetColor = useRef('blue');

  function getScale() {
    return Math.round(object.radius / moonRadius)
  }
  
  function setColor() {
    switch(object.id) {
      case 0:
        planetColor.current = 'yellow';
        break;
      case 2:
        planetColor.current = 'brown';
        break;
      case 3:
        planetColor.current = 'lightblue';
        break;
      case 4:
        planetColor.current = 'red';
        break;
      case 5:
        planetColor.current = '#C4A484';
        break;
      case 6:
        planetColor.current = 'beige';
        break;
      case 7:
        planetColor.current = 'cyan';
        break;
      case 8:
        planetColor.current = 'darkcyan';
        break;
      default:
        planetColor.current = 'grey';
        break;
    }
  }

  function handleClick() {
    // TODO: Show Information about Planet in Popup
    console.log(getScale())
  }

  useEffect(() => {
    function _setColor() {
      setColor();
    }
    _setColor();
  })

  return (
    <div id={object.name} style={{position:'absolute', left: object.distance.value / onePixel,backgroundColor: planetColor.current, height: getScale(), width: getScale()}} className='stellar-object' onClick={() => handleClick}>
    </div>
  );
}

export default StellarObject;
