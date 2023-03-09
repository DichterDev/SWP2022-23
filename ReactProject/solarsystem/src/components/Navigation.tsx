import React from "react";
import { IStellarObject } from "../api/SolarSystemAPI";
import '../App.css';
import CurrentSpeed from "./CurrentSpeed";

interface props {
  objects: IStellarObject[]
}

function Navigation(props: props) {

  function handleClick(name: string) {
    // TODO: Scroll to object with `name`
    let objectElement = document.getElementById(name);
    objectElement?.scrollIntoView({behavior: "smooth", block: 'center', inline: 'center'})
  }

  return(
    <div className="Navigation">
      {
        props.objects.map(object => {
          return <button type="button" onClick={() => handleClick(object.name)}>{object.name}</button>
        })
      }
      {<CurrentSpeed></CurrentSpeed>}

    </div>  
  );
};

export default Navigation;