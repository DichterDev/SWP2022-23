import React, { useState } from "react";
import { IStellarObject } from "../api/SolarSystemAPI";
import CurrentSpeed from "./CurrentSpeed";
import styles from './Navigation.module.css';

interface _ extends IStellarObject {
  isDetailHidden: boolean;
}

interface props {
  objects: _[]
}

function Navigation(props: props) {
  function handleClick(name: string) {
    let objectElement = document.getElementById(name);
    objectElement?.scrollIntoView({behavior: "smooth", block: 'center', inline: 'center'})
  }

  return(
    <div className={styles.navigation}>
      {
        props.objects.map(object => {
          return <img src={require(`../icons/${object.name}.png`)} alt={object.name} onClick={() => handleClick(object.name)}></img>
        })
      }
      {<CurrentSpeed></CurrentSpeed>}

    </div>  
  );
};

export default Navigation;