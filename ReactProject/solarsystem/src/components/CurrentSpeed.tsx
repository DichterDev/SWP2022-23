import React, { useEffect, useRef, useState } from "react";

function CurrentSpeed() {
    // TODO: Dropdown to select unit of measurement (km/s, soccerfields/s, miles/s, moons/s, mph, kmh)
    // soccerfield: 105m -> 0.105 km
    // 1 mile = 1,609.344 m -> 1 mile = 1.609.344 km -> mph = kmh / 1.609.344

    const [currentSpeed, SetCurrentSpeed] = useState(0);
    const [selectedUnit, SetSelectedUnit] = useState('kms');

    const mileConstant = 1.609344;
    const moonRadius = 1737.4; // km
    const onePixel = 2 * moonRadius; // Size of One Pixel  

    const units: {[name: string]: number} = {
        'kms': 1,
        'kmh': 3600,
        'mps': 1/mileConstant,
        'mph': 1/mileConstant * 3600,
        'soccerfields/s': 1 / 0.105,
    }

    let posX = useRef(0);
    let deltaPosX = useRef(0);
    const [isDropdownHidden, SetIsDropdownHidden] = useState(true);

    useEffect(() => {
        const intervalID = setInterval(() => {
            deltaPosX.current = (window.scrollX-posX.current < 0) ? window.scrollX-posX.current*-1 : window.scrollX-posX.current;
            SetCurrentSpeed(Math.round(deltaPosX.current * onePixel * units[selectedUnit] * 20));
            posX.current = window.scrollX;
        }, 50);

        return () => clearInterval(intervalID);
    });


    //onclick function for the dropdown
    function handleDropdownClick(str: string) {
        SetSelectedUnit(str);
        SetIsDropdownHidden(true);
    }

    return (
        <div className="current-speed">
            <div onClick={() => SetIsDropdownHidden(false)}>
                <div id="current-speed-display">{currentSpeed}</div>
                <div id="current-speed-unit">{selectedUnit}</div>
            </div>
            <div className="dropdown" style={(isDropdownHidden) ? {display: "none"} : {display: "inherit"}}>
                {
                    Object.entries(units).map(([key, value]) => {
                        return <div className="dropdown-button" onClick={() => handleDropdownClick(key)}>{key}</div>})
                }
            </div>
        </div>
    );
}

export default CurrentSpeed;