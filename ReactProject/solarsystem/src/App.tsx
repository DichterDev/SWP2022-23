import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import StellarObject from './components/StellarObject';
import Navigation from './components/Navigation';
import getSolarSystem from './api/SolarSystemAPI';
import { IStellarObject } from './api/SolarSystemAPI';
import './App.css';

function App() {
  const [solarSystem, setSolarSystem] = useState<IStellarObject[]>([]);

  // TODO: Autoscroll
  // TODO: Menu
  // TODO: Menuoptions: Scale, View (Top-Down, General Distances)
  // TODO: Informative Text

  useEffect(() => {
    async function _getSolarSystem() {
      setSolarSystem(await getSolarSystem());
    }
    window.addEventListener('wheel', (event) => {
      event.preventDefault();
      window.scrollBy(event.deltaY, 0);
    });
    _getSolarSystem();
  }, []);

  return (
    <div className='App'>
      <div id='barycenter'></div>
      {
        solarSystem.map(object => {
          return <StellarObject {...object}></StellarObject>
        })
      }
      {
        <Navigation objects={[...solarSystem]}></Navigation>
      }
    </div>
  );
}

export default App;
