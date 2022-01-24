import React, {useLayoutEffect} from 'react';
import BackgroundHomeDesktop from '../images/home/background-home-desktop.jpg'
import BackgroundHomeTablet from '../images/home/background-home-tablet.jpg'
import BackgroundHomeMobile from '../images/home/background-home-mobile.jpg'

function Home(){


    useLayoutEffect(() => {

        var mediaQuery = window.innerWidth
        if (mediaQuery >= 1024){
            document.body.style.height = '100vh'
            document.body.style.backgroundImage = `url('${BackgroundHomeDesktop}')`
        }else if(mediaQuery >= 720){
            document.body.style.height = '100%'
            document.body.style.backgroundImage = `url('${BackgroundHomeTablet}')`
        }else{
            document.body.style.height = '100%'
            document.body.style.backgroundImage = `url('${BackgroundHomeMobile}')`
        }

        window.addEventListener('resize',function(){

            var mediaQuery = window.innerWidth
            if (mediaQuery >= 1024){
                document.body.style.height = '100vh'
                document.body.style.backgroundImage = `url('${BackgroundHomeDesktop}')`
            }else if(mediaQuery >= 720){
                document.body.style.height = '100%'
                document.body.style.backgroundImage = `url('${BackgroundHomeTablet}')`
            }else{
                document.body.style.height = '100%'
                document.body.style.backgroundImage = `url('${BackgroundHomeMobile}')`
            }
    
        },true)

    })
    
    return (
        <div className="Home__Section">
            <div className="Home__Part1">
                <span>SO, YOU WANT TO TRAVEL TO</span>
                <h1>SPACE</h1>
                <p>
                    Let's face it; if you want to go to space, you 
                    might as well genuinely go to outer space and 
                    not hover kind of on the edge of it. Well sit 
                    back, and relax because we'll give you a truly 
                    out of this world experience!
                </p>
            </div>
            <div className="Home__Part2">
                <h2>EXPLORE</h2>
            </div>
        </div>
    );
}

export default Home;