import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import StellarObject from './components/StellarObject';
import getSolarSystem from './api/SolarSystemAPI';
import { IStellarObject } from './api/SolarSystemAPI';
import './App.css';

function App() {
  const [solarSystem, setSolarSystem] = useState<IStellarObject[]>([]);

  useEffect(() => {
    async function _getSolarSystem() {
      setSolarSystem(await getSolarSystem());
    }

    _getSolarSystem();
  }, []);

  return (
    <div className="App">
      {
        solarSystem.map(object => {
          return <StellarObject {...object}></StellarObject>
        })
      }
    </div>
  );
}

export default App;
