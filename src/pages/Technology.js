import React, {useEffect,useState} from 'react';
import BackgroundTechnologyDesktop from '../images/technology/background-technology-desktop.jpg'
import BackgroundTechnologyTablet from '../images/technology/background-technology-tablet.jpg'
import BackgroundTechnologyMobile from '../images/technology/background-technology-mobile.jpg'
import ImgLaunchPortrait from '../images/technology/image-launch-vehicle-portrait.jpg'
import ImgLaunchLandscape from '../images/technology/image-launch-vehicle-landscape.jpg'
import ImgSpacePortrait from '../images/technology/image-spaceport-portrait.jpg'
import ImgSpaceLandscape from '../images/technology/image-spaceport-landscape.jpg'
import ImgSpaceCapsulePortrait from '../images/technology/image-space-capsule-portrait.jpg'
import ImgSpaceCapsuleLandscape from '../images/technology/image-space-capsule-landscape.jpg'


function Technology(){
    
    const [clicked1Style,setClicked1Style] = useState('tecClicked')
    const [clicked2Style,setClicked2Style] = useState('')
    const [clicked3Style,setClicked3Style] = useState('')
    const [technologyImg,setTechnologyImg] = useState(ImgLaunchPortrait)
    const [componentName,setcomponentName] = useState('LAUNCH VEHICLE')
    const [componentParagraph,setcomponentParagraph] = useState("A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!")

    useEffect(() => {
        
        var mediaQuery = window.innerWidth
        if(mediaQuery >= 1026){
            document.body.style.backgroundImage = `url('${BackgroundTechnologyDesktop}')`
        }else if(mediaQuery >= 900){
            setTechnologyImg(ImgLaunchLandscape)
            document.body.style.backgroundImage = `url('${BackgroundTechnologyTablet}')`
        }else{
            setTechnologyImg(ImgLaunchLandscape)
            document.body.style.backgroundImage = `url('${BackgroundTechnologyMobile}')`
        }

        window.addEventListener('resize',function(){
            
            var mediaQuery = window.innerWidth
            
            if(mediaQuery <= 900){ 
                
                setClicked2Style('')
                setClicked3Style('')
                setClicked1Style('tecClicked')
                setTechnologyImg(ImgLaunchLandscape)
                document.body.style.backgroundImage = `url('${BackgroundTechnologyMobile}')`
                
            }else if(mediaQuery <= 1111){
    
                setClicked2Style('')
                setClicked3Style('')
                setClicked1Style('tecClicked')
                setTechnologyImg(ImgLaunchLandscape)
                document.body.style.backgroundImage = `url('${BackgroundTechnologyTablet}')`
                
            }else{
    
                setClicked2Style('')
                setClicked3Style('')
                setClicked1Style('tecClicked')
                setTechnologyImg(ImgLaunchPortrait)
                document.body.style.backgroundImage = `url('${BackgroundTechnologyDesktop}')`
                
            }
                    
        })   
    
    },[])

    function clickBullet(e){

        var bulletTecClass = e.target.getAttribute('class')
        var mediaQuery = window.innerWidth
        if(mediaQuery <= 1110){

            if(bulletTecClass === 'Technology__Bullet T1'){
                setTechnologyImg(ImgLaunchLandscape)
                setcomponentName('LAUNCH VEHICLE')
                setcomponentParagraph("A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!")
                setClicked2Style('')
                setClicked3Style('')
                setClicked1Style('tecClicked')
            }else if(bulletTecClass === 'Technology__Bullet T2'){
                setTechnologyImg(ImgSpaceLandscape)
                setcomponentName('SPACEPORT')
                setcomponentParagraph("A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.")
                setClicked1Style('')
                setClicked3Style('')
                setClicked2Style('tecClicked')
            }else if(bulletTecClass === 'Technology__Bullet T3'){
                setTechnologyImg(ImgSpaceCapsuleLandscape)
                setcomponentName('SPACE CAPSULE')
                setcomponentParagraph("A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.")
                setClicked1Style('')
                setClicked2Style('')
                setClicked3Style('tecClicked')
            } 
            
        }else{

            if(bulletTecClass === 'Technology__Bullet T1'){
                setTechnologyImg(ImgLaunchPortrait)
                setcomponentName('LAUNCH VEHICLE')
                setcomponentParagraph("A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!")
                setClicked2Style('')
                setClicked3Style('')
                setClicked1Style('tecClicked')
            }else if(bulletTecClass === 'Technology__Bullet T2'){
                setTechnologyImg(ImgSpacePortrait)
                setcomponentName('SPACEPORT')
                setcomponentParagraph("A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.")
                setClicked1Style('')
                setClicked3Style('')
                setClicked2Style('tecClicked')
            }else if(bulletTecClass === 'Technology__Bullet T3'){
                setTechnologyImg(ImgSpaceCapsulePortrait)
                setcomponentName('SPACE CAPSULE')
                setcomponentParagraph("A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.")
                setClicked1Style('')
                setClicked2Style('')
                setClicked3Style('tecClicked')
            }

        } 

    }
    
    return (
        <div className='Technology__Section'>
                <h2><span>03</span>SPACE LAUNCH 101</h2> 
                <div className="Technology__Part1">
                    <div className="Technology__Resume">
                        <div className="bullets-wraper">
                            <span id={clicked1Style} onClick={clickBullet} className="Technology__Bullet T1">1</span>
                            <span id={clicked2Style} onClick={clickBullet} className="Technology__Bullet T2">2</span>
                            <span id={clicked3Style} onClick={clickBullet} className="Technology__Bullet T3">3</span>
                        </div>
                        <div className="resume-wraper">
                            <span className="mini-title">THE TERMINOLOGY...</span>
                            <h1>{componentName}</h1>   
                            <p>{componentParagraph}</p>
                        </div>
                    </div>
                </div>
            <div className="Technology__Part2">
                
                <img alt="oi" src={technologyImg} />

            </div>
        </div>  
    );
}

export default Technology;