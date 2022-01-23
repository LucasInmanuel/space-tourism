import React from "react";
import BackgroundDestination from '../images/destination/background-destination-desktop.jpg'

function Titan(){
    //Mudança de background
    document.body.style.backgroundImage = `url('${BackgroundDestination}')`
    return (
        <div className="slider">
            <h1>TITAN</h1>
            <p>Titan The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
            <div className="slider__Feature">
                <div className="slider__Feature__Part1">
                    <span>AVG. DISTANCE</span>
                    <p>1,6 BIL. KM</p>
                </div>
                <div className="slider__Feature__Part2">
                    <span>EST. TRAVEL TIME</span>
                    <p>7 YEARS</p>
                </div>
            </div>
        </div>
    )
}

export default Titan