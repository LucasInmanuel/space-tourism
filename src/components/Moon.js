import React from "react";
import BackgroundDestination from '../images/destination/background-destination-desktop.jpg'

function Moon(){
    //Mudança de background
    document.body.style.backgroundImage = `url('${BackgroundDestination}')`
    return (
        <div className="slider">
            <h1>MOON</h1>
            <p>Moon See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
            <div className="slider__Feature">
                <div className="slider__Feature__Part1">
                    <span>AVG. DISTANCE</span>
                    <p>384 KM</p>
                </div>
                <div className="slider__Feature__Part2">
                    <span>EST. TRAVEL TIME</span>
                    <p>3 DAYS</p>
                </div>
            </div>
        </div>
    )
}

export default Moon