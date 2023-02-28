import React, { useEffect, useRef, useState } from "react";

function CurrentSpeed() {
    // TODO: Dropdown to select unit of measurement (km/s, soccerfields/s, miles/s, moons/s, mph, kmh)
    
    const [currentSpeed, SetCurrentSpeed] = useState(0);

    const moonRadius = 1737.4 // km
    const onePixel = 2 * moonRadius // Size of One Pixel  

    let posX = useRef(0);
    let deltaPosX = useRef(0);

    useEffect(() => {
        const intervalID = setInterval(() => {
            deltaPosX.current = (window.scrollX-posX.current < 0) ? window.scrollX-posX.current*-1 : window.scrollX-posX.current;
            SetCurrentSpeed(Math.round(deltaPosX.current * onePixel* 20));
            posX.current = window.scrollX;
        }, 50);

        return () => clearInterval(intervalID);
    });

    return (
        <div className="current-speed">{currentSpeed}</div>
    );
}

export default CurrentSpeed;