import React, { useRef, useEffect, useState } from "react";
import getSolarSystem from "../api/SolarSystemAPI";
import styles from './ProgressBar.module.css'

function ProgressBar() {
    const [progress, setProgress] = useState(0);
    let documentWidth = useRef(0);

    useEffect(() => {
        window.addEventListener('scroll', (event) => {
            event.preventDefault();
            setProgress(window.scrollX/documentWidth.current);
        })

        async function _getSolarSystem() {
            let solarSystem = await(getSolarSystem());  
            let value = Math.max(...solarSystem.map(o => o.distance.value)) / 3474.8; 
            documentWidth.current = value;
        }

        _getSolarSystem();
    }, [])
    

    return(
        <div className={styles.progress_bar}>
            <div className={styles.bar} style={{width: `${progress*100}%`}}></div>
        </div>
    );
}

export default ProgressBar;