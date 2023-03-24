import React, { useEffect, useState } from 'react';
import StellarObject from './components/StellarObject';
import Navigation from './components/Navigation';
import getSolarSystem from './api/SolarSystemAPI';
import { IStellarObject } from './api/SolarSystemAPI';
import AutoScroll from './components/AutoScroll';
import './App.css';
import ProgressBar from './components/ProgressBar';

function App() {
  const [solarSystem, setSolarSystem] = useState<IStellarObject[]>([]);

  // TODO: Informativer Text
  // TODO: Planet Colors
  // TODO: Set Barycenter as 0 Point for Planets

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
      {<Navigation objects={[...solarSystem]}></Navigation>}
      {<AutoScroll></AutoScroll>}
      {<ProgressBar></ProgressBar>}

    </div>
  );
}

export default App;
