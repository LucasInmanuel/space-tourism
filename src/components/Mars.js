import React from "react";
import BackgroundDestination from '../images/destination/background-destination-desktop.jpg'

function Mars(){
    //Mudança de background
    document.body.style.backgroundImage = `url('${BackgroundDestination}')`
    return (
        <div className="slider">
            <h1>MARS</h1>
            <p>Mars Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
            <div className="slider__Feature">
                <div className="slider__Feature__Part1">
                    <span>AVG. DISTANCE</span>
                    <p>225 MIL. KM</p>
                </div>
                <div className="slider__Feature__Part2">
                    <span>EST. TRAVEL TIME</span>
                    <p>9 MONTHS</p>
                </div>
            </div>
        </div>
    )
}

export default Mars