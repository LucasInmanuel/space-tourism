import React from "react";
import BackgroundDestination from '../images/destination/background-destination-desktop.jpg'

function Europa(){
    //Mudança de background
    document.body.style.backgroundImage = `url('${BackgroundDestination}')`
    return (
        <div className="slider">
            <h1>EUROPA</h1>
            <p>Europa The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
            <div className="slider__Feature">
                <div className="slider__Feature__Part1">
                    <span>AVG. DISTANCE</span>
                    <p>628 MIL. KM</p>
                </div>
                <div className="slider__Feature__Part2">
                    <span>EST. TRAVEL TIME</span>
                    <p>3 YEARS</p>
                </div>
            </div>
        </div>
    )
}

export default Europa