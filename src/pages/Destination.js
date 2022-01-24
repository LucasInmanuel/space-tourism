import React, {useLayoutEffect,useState} from 'react'
import BackgroundDestinationDesktop from '../images/destination/background-destination-desktop.jpg'
import BackgroundDestinationTablet from '../images/destination/background-destination-tablet.jpg'
import BackgroundDestinationMobile from '../images/destination/background-destination-mobile.jpg'
import MarsImg from '../images/destination/image-mars.png'
import MoonImg from '../images/destination/image-moon.png'
import EuropaImg from '../images/destination/image-europa.png'
import TitanImg from '../images/destination/image-titan.png'
import Mars from '../components/Mars.js'
import Moon from '../components/Moon.js'
import Europa from '../components/Europa.js'
import Titan from '../components/Titan.js'

function Destination(){

    const [initSlider,setInitSlider] = useState(<Moon />)
    const [imgPlanet,setImgPlanet] = useState(MoonImg)
    const [addIdMoon,setAddIdMoon] = useState('BorderBottom')
    const [addIdMars,setAddIdMars] = useState('RemoveBorderBottom')
    const [addIdEuropa,setAddIdEuropa] = useState('RemoveBorderBottom')
    const [addIdTitan,setAddIdTitan] = useState('RemoveBorderBottom')  
    
    useLayoutEffect(() => {

        var mediaQuery = window.innerWidth
        if (mediaQuery >= 1024){
            document.body.style.height = '100vh'
            document.body.style.backgroundImage = `url('${BackgroundDestinationDesktop}')`
        }else if(mediaQuery >= 900){
            document.body.style.height = '100%'
            document.body.style.backgroundImage = `url('${BackgroundDestinationTablet}')`
        }else{
            document.body.style.height = '100%'
            document.body.style.backgroundImage = `url('${BackgroundDestinationMobile}')`
        } 

    }, [imgPlanet])
 
    window.addEventListener('resize',function(){

        var mediaQuery = window.innerWidth
        if (mediaQuery >= 1024){
            document.body.style.height = '100vh'
            document.body.style.backgroundImage = `url('${BackgroundDestinationDesktop}')`
        }else if(mediaQuery >= 900){
            document.body.style.height = '100%'
            document.body.style.backgroundImage = `url('${BackgroundDestinationTablet}')`
        }else{
            document.body.style.height = '100%'
            document.body.style.backgroundImage = `url('${BackgroundDestinationMobile}')`
        } 

    },true)
    
    function sliderDestination(e){
        e.preventDefault()
        var classValor = e.target.getAttribute('class')

        if(classValor === 'Moon'){
            setInitSlider(<Moon />)
            setImgPlanet(MoonImg)
            setAddIdTitan('RemoveBorderBottom')
            setAddIdEuropa('RemoveBorderBottom')
            setAddIdMars('RemoveBorderBottom')
            setAddIdMoon('BorderBottom')
        }else if(classValor === 'Mars'){
            setInitSlider(<Mars />)
            setImgPlanet(MarsImg)
            setAddIdTitan('RemoveBorderBottom')
            setAddIdEuropa('RemoveBorderBottom')
            setAddIdMoon('RemoveBorderBottom')
            setAddIdMars('BorderBottom')
        }else if(classValor === 'Europa'){
            setInitSlider(<Europa />)
            setImgPlanet(EuropaImg)
            setAddIdTitan('RemoveBorderBottom')
            setAddIdMoon('RemoveBorderBottom')
            setAddIdMars('RemoveBorderBottom')
            setAddIdEuropa('BorderBottom')
        }else if(classValor === 'Titan'){
            setInitSlider(<Titan />)
            setImgPlanet(TitanImg)
            setAddIdMoon('RemoveBorderBottom')
            setAddIdMars('RemoveBorderBottom')
            setAddIdEuropa('RemoveBorderBottom')
            setAddIdTitan('BorderBottom')
        }

    }

    return (
        <div className='Destination__Section'>
            <div className="Destination__Part1">
                <h2><span>01</span>PICK YOUR DESTINATION</h2>
                <img alt="oi" src={imgPlanet}/>  
            </div>
            <div className="Destination__Part2">
                <nav className="Destination__Menu">
                    <ul>
                        <li id={addIdMoon}><a onClick={sliderDestination} href="#!" className="Moon">MOON</a></li>
                        <li id={addIdMars}><a onClick={sliderDestination} href="#!" className="Mars">MARS</a></li>
                        <li id={addIdEuropa}><a onClick={sliderDestination} href="#!" className="Europa">EUROPA</a></li>
                        <li id={addIdTitan}><a onClick={sliderDestination} href="#!" className="Titan">TITAN</a></li>
                    </ul>
                </nav> 
                {initSlider}                   
            </div>
        </div>  
    )

}

export default Destination