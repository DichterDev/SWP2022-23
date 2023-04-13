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

  const [imageModal, setImageModal] = useState("");

  function handleClick(name: string) {
    // TODO: Scroll to object with `name`
    let objectElement = document.getElementById(name);
    objectElement?.scrollIntoView({behavior: "smooth", block: 'center', inline: 'center'})
  }

  function handleHover(name: string) {
    setImageModal(name);
  }

  return(
    <div className={styles.navigation}>
      {
        props.objects.map(object => {
          return <img src={require(`../icons/${object.name}.png`)} alt={object.name} onClick={() => handleClick(object.name)} onMouseOver={() => handleHover(object.name)}></img>
        })
      }
      <div style={{color: 'white'}}>{imageModal}</div>
      {<CurrentSpeed></CurrentSpeed>}

    </div>  
  );
};

export default Navigation;