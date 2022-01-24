import React, {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import iconClose from '../images/icon-close.svg'
import iconHamburger from '../images/icon-hamburger.svg'
import logo from '../images/logo.svg'

function Header(){

    const [showMenu,setShowMenu] = useState('none')
    const [showMenuIcon,setshowMenuIcon] = useState(iconHamburger)

    function clickOpenMenuMobile(){

        var menuDisplay = document.getElementById('MenuMobile')
        var displayValor = window.getComputedStyle(menuDisplay).display
        if(displayValor === 'none'){  

            document.body.style.overflowY = 'hidden'
            setShowMenu('block')
            setshowMenuIcon(iconClose)

        }else if(displayValor === 'block'){

            setshowMenuIcon(iconHamburger)
            setShowMenu('none')
            document.body.style.overflowY = 'visible'
                
        }
        
    }

    useEffect(() => {

        let linkMenuDesktop = document.querySelectorAll('.Menu__Desktop li a')
        let linkMenuMobile = document.querySelectorAll('.Menu__Mobile li a')

         if(window.location.pathname === '/destination'){
            linkMenuDesktop[1].style.borderBottom = '2px solid white'
            linkMenuMobile[1].style.color = 'rgb(158, 172, 255)'
         }else if(window.location.pathname === '/crew'){
            linkMenuDesktop[2].style.borderBottom = '2px solid white'
            linkMenuMobile[2].style.color = 'rgb(158, 172, 255)'
         }else if(window.location.pathname === '/technology'){
            linkMenuDesktop[3].style.borderBottom = '2px solid white'
            linkMenuMobile[3].style.color = 'rgb(158, 172, 255)'
         }else{
            linkMenuDesktop[0].style.borderBottom = '2px solid white'
            linkMenuMobile[0].style.color = 'rgb(158, 172, 255)'
         }

        linkMenuDesktop[0].addEventListener('click',() => {
            for(var i = 0;i<linkMenuDesktop.length;i++){  
                linkMenuDesktop[i].style.borderBottom = '2px solid transparent'
                linkMenuDesktop[0].style.borderBottom = '2px solid white'
                linkMenuMobile[i].style.color = 'white'
                linkMenuMobile[0].style.color = 'rgb(158, 172, 255)'
            }
        });
        linkMenuDesktop[1].addEventListener('click',() => {
            for(var i = 0;i<linkMenuDesktop.length;i++){ 
                linkMenuDesktop[i].style.borderBottom = '2px solid transparent'
                linkMenuDesktop[1].style.borderBottom = '2px solid white'
                linkMenuMobile[i].style.color = 'white'
                linkMenuMobile[1].style.color = 'rgb(158, 172, 255)'
            }
        });
        linkMenuDesktop[2].addEventListener('click',() => {
            for(var i = 0;i<linkMenuDesktop.length;i++){ 
                linkMenuDesktop[i].style.borderBottom = '2px solid transparent'
                linkMenuDesktop[2].style.borderBottom = '2px solid white'
                linkMenuMobile[i].style.color = 'white'
                linkMenuMobile[2].style.color = 'rgb(158, 172, 255)'
            }
        });
        linkMenuDesktop[3].addEventListener('click',() => {
            for(var i = 0;i<linkMenuDesktop.length;i++){
                linkMenuDesktop[i].style.borderBottom = '2px solid transparent'
                linkMenuDesktop[3].style.borderBottom = '2px solid white'
                linkMenuMobile[i].style.color = 'white'
                linkMenuMobile[3].style.color = 'rgb(158, 172, 255)'
            }
        });

        //MOBILE                ///////// 
        
        linkMenuMobile[0].addEventListener('click',() => {
            for(var i = 0;i<linkMenuDesktop.length;i++){  
                linkMenuDesktop[i].style.borderBottom = '2px solid transparent'
                linkMenuDesktop[0].style.borderBottom = '2px solid white'
                linkMenuMobile[i].style.color = 'white'
                linkMenuMobile[0].style.color = 'rgb(158, 172, 255)'
            }
        });
        linkMenuMobile[1].addEventListener('click',() => {
            for(var i = 0;i<linkMenuDesktop.length;i++){ 
                linkMenuDesktop[i].style.borderBottom = '2px solid transparent'
                linkMenuDesktop[1].style.borderBottom = '2px solid white'
                linkMenuMobile[i].style.color = 'white'
                linkMenuMobile[1].style.color = 'rgb(158, 172, 255)'
            }
        });
        linkMenuMobile[2].addEventListener('click',() => {
            for(var i = 0;i<linkMenuDesktop.length;i++){ 
                linkMenuDesktop[i].style.borderBottom = '2px solid transparent'
                linkMenuDesktop[2].style.borderBottom = '2px solid white'
                linkMenuMobile[i].style.color = 'white'
                linkMenuMobile[2].style.color = 'rgb(158, 172, 255)'
            }
        });
        linkMenuMobile[3].addEventListener('click',() => {
            for(var i = 0;i<linkMenuDesktop.length;i++){
                linkMenuDesktop[i].style.borderBottom = '2px solid transparent'
                linkMenuDesktop[3].style.borderBottom = '2px solid white'
                linkMenuMobile[i].style.color = 'white'
                linkMenuMobile[3].style.color = 'rgb(158, 172, 255)'
            }
        });
        
    });
    
    return(
        <header className="Header">
            <a href="index.html"><img alt="oi" className="Header__Logo" src={logo} /></a>
            <div className="Header__Line"></div>
            <nav className="Menu__Desktop">
                <ul>
                    <li><Link className="home" to="/"><span>00</span>HOME</Link></li>
                    <li><Link className="destination" to="/destination"><span>01</span>DESTINATION</Link></li>
                    <li><Link className="crew" to="/crew"><span>02</span>CREW</Link></li>
                    <li><Link className="technology" to="/technology"><span>03</span>TECHNOLOGY</Link></li>
                </ul>
            </nav>
            <nav style={{backgroundImage: `url('${showMenuIcon}')`}} onClick={clickOpenMenuMobile} id="OpenMobile" className="Menu__Mobile">
                <ul id="MenuMobile" style={{display: `${showMenu}` }}>
                    <li><Link className="home" to="/"><span>00</span>HOME</Link></li>
                    <li><Link className="destination" to="/destination"><span>01</span>DESTINATION</Link></li>
                    <li><Link className="crew" to="/crew"><span>02</span>CREW</Link></li>
                    <li><Link className="technology" to="/technology"><span>03</span>TECHNOLOGY</Link></li>
                </ul>
            </nav>
        </header>
    )
    
}

export default Header

