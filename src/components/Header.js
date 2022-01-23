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

        let linkHome = document.querySelectorAll('.Menu__Desktop a')[0]
        let linkDestination = document.querySelectorAll('.Menu__Desktop a')[1]
        let linkCrew = document.querySelectorAll('.Menu__Desktop a')[2]
        let linkTechnology = document.querySelectorAll('.Menu__Desktop a')[3]

        linkHome.addEventListener('click',() => {

            linkDestination.style.borderBottom = '2px solid transparent'
            linkCrew.style.borderBottom = '2px solid transparent'
            linkTechnology.style.borderBottom = '2px solid transparent'
            linkHome.style.borderBottom = '2px solid white'

        });

        linkDestination.addEventListener('click',() => {

            linkHome.style.borderBottom = '2px solid transparent'
            linkCrew.style.borderBottom = '2px solid transparent'
            linkTechnology.style.borderBottom = '2px solid transparent'
            linkDestination.style.borderBottom = '2px solid white'

        });

        linkCrew.addEventListener('click',() => {

            linkHome.style.borderBottom = '2px solid transparent'
            linkDestination.style.borderBottom = '2px solid transparent'
            linkTechnology.style.borderBottom = '2px solid transparent'
            linkCrew.style.borderBottom = '2px solid white'

        });

        linkTechnology.addEventListener('click',() => {

            linkHome.style.borderBottom = '2px solid transparent'
            linkDestination.style.borderBottom = '2px solid transparent'
            linkCrew.style.borderBottom = '2px solid transparent'
            linkTechnology.style.borderBottom = '2px solid white'

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

