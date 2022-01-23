import React, {useLayoutEffect,useState} from 'react';
import BackgroundCrewDesktop from '../images/crew/background-crew-desktop.jpg'
import BackgroundCrewTablet from '../images/crew/background-crew-tablet.jpg'
import BackgroundCrewMobile from '../images/crew/background-crew-mobile.jpg'
import ImgAnousheh from '../images/crew/image-anousheh-ansari.webp'
import ImgDouglas from '../images/crew/image-douglas-hurley.webp'
import ImgMark from '../images/crew/image-mark-shuttleworth.webp'
import ImgVictor from '../images/crew/image-victor-glover.webp'

function Crew(){

    const [bullet1Clicked,setBullet1Clicked] = useState("crewClicked")
    const [bullet2Clicked,setBullet2Clicked] = useState("NotClicked")
    const [bullet3Clicked,setBullet3Clicked] = useState("NotClicked")
    const [bullet4Clicked,setBullet4Clicked] = useState("NotClicked")
    const [crewNome,setCrewNome] = useState('DOUGLAS HURLEY')
    const [crewProfession,setCrewProfession] = useState('COMMANDER')
    const [crewResume,setCrewResume] = useState('Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.')
    const [crewImg,setCrewImg] = useState(ImgDouglas)

    useLayoutEffect(() => {
        
        var mediaQuery = window.innerWidth
        if (mediaQuery >= 1130){
            document.body.style.backgroundImage = `url('${BackgroundCrewDesktop}')`
        }else if(mediaQuery >= 900){
            document.body.style.backgroundImage = `url('${BackgroundCrewTablet}')`
        }else{
            document.body.style.backgroundImage = `url('${BackgroundCrewMobile}')`
        }

        window.addEventListener('resize',function(){

            var mediaQuery = window.innerWidth
            if (mediaQuery >= 1130){
                document.body.style.backgroundImage = `url('${BackgroundCrewDesktop}')`
            }else if(mediaQuery >= 900){
                document.body.style.backgroundImage = `url('${BackgroundCrewTablet}')`
            }else{
                document.body.style.backgroundImage = `url('${BackgroundCrewMobile}')`
            }
    
        })

    },[crewImg])

    function selectBullet(e){
        
        var classValor = e.target.getAttribute('id')
        
        if(classValor === 'CrewBullet1'){

            setBullet2Clicked('NotClicked')
            setBullet3Clicked('NotClicked')
            setBullet4Clicked('NotClicked')
            setBullet1Clicked('crewClicked')
            setCrewNome('DOUGLAS HURLEY')
            setCrewProfession('COMMANDER')
            setCrewResume('Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.')
            setCrewImg(ImgDouglas)

        }else if(classValor === 'CrewBullet2'){

            setBullet1Clicked('NotClicked')
            setBullet3Clicked('NotClicked')
            setBullet4Clicked('NotClicked')
            setBullet2Clicked('crewClicked')
            setCrewNome('MISSION SPECIALIST')
            setCrewProfession('MISSION SPECIALIST')
            setCrewResume('Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.')
            setCrewImg(ImgMark)

        }else if(classValor === 'CrewBullet3'){

            setBullet2Clicked('NotClicked')
            setBullet4Clicked('NotClicked')
            setBullet1Clicked('NotClicked')
            setBullet3Clicked('crewClicked')
            setCrewNome('VICTOR GLOVER')
            setCrewProfession('PILOT')
            setCrewResume('Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.')
            setCrewImg(ImgVictor)

        }else if(classValor === 'CrewBullet4'){

            setBullet1Clicked('NotClicked')
            setBullet2Clicked('NotClicked')
            setBullet3Clicked('NotClicked')
            setBullet4Clicked('crewClicked')
            setCrewNome(' ANOUSHEH ANSARI')
            setCrewProfession('FLIGHT ENGINEER')
            setCrewResume('Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.')
            setCrewImg(ImgAnousheh)

        }

    }
      
    return (
        <div className='Crew__Section'>
            <h2><span>02</span>MEET YOUR CREW</h2>
            <div className="Crew__Part1"> 
                <span className="Crew__Part1__Engineer">{crewProfession}</span>
                <h1>{crewNome}</h1>   
                <p>{crewResume}</p>
                <div className="spanBullet-wraper">
                    <span id="CrewBullet1" onClick={selectBullet} className={`Crew__Bullet ${bullet1Clicked}`}></span>
                    <span id="CrewBullet2" onClick={selectBullet} className={`Crew__Bullet ${bullet2Clicked}`}></span> 
                    <span id="CrewBullet3" onClick={selectBullet} className={`Crew__Bullet ${bullet3Clicked}`}></span> 
                    <span id="CrewBullet4" onClick={selectBullet} className={`Crew__Bullet ${bullet4Clicked}`}></span>
                </div>  
            </div>
            <div className="Crew__Part2">
                
                <img alt="oi" src={crewImg} />

            </div>
        </div>  
    );
}

export default Crew;