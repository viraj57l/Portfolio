import React from 'react'
import './sidebar.css'
import Logo from "../../assets/logo.svg"
import { Link as LinkScroll } from 'react-scroll'

const Sidebar = () => {
  return (
    <aside className='aside'>
        <a href="#home" className="nav__logo">
            <img src={Logo} alt=''/>
        </a>

        <nav className='nav'>
            <div className='nav__menu'>
                <ul className='nav__list'>
                    <li className='nav__item'>
                        <LinkScroll to="home" 
                        spy={true} 
                        smooth={true} 
                        offset={50} 
                        duration={500} 
                        className="nav__link">
                            <i className="icon-home"></i>
                        </LinkScroll>
                    </li>

                    <li className='nav__item'>
                        <LinkScroll to="about" 
                        spy={true} 
                        smooth={true} 
                        offset={50} 
                        duration={500}
                         className="nav__link">
                            <i className="icon-user-following"></i>
                        </LinkScroll>
                    </li>

                    <li className='nav__item'>
                        <LinkScroll to="services" 
                        spy={true} 
                        smooth={true} 
                        offset={50} 
                        duration={500}
                         className="nav__link">
                            <i className="icon-briefcase"></i>
                        </LinkScroll>
                    </li>

                    <li className='nav__item'>
                        <LinkScroll to="resume" 
                        spy={true} 
                        smooth={true} 
                        offset={50} 
                        duration={500}
                         className="nav__link">
                            <i className="icon-graduation"></i>
                        </LinkScroll>
                    </li>

                    <li className='nav__item'>
                        <LinkScroll to="work" 
                        spy={true} 
                        smooth={true} 
                        offset={50} 
                        duration={500}
                         className="nav__link">
                            <i className="icon-layers"></i>
                        </LinkScroll>
                    </li>

                    <li className='nav__item'>
                        <LinkScroll to="blog" 
                        spy={true} 
                        smooth={true} 
                        offset={50} 
                        duration={500} 
                        className="nav__link">
                            <i className="icon-note"></i>
                        </LinkScroll>
                    </li>

                    <li className='nav__item'>
                        <LinkScroll to="contact" 
                        spy={true} 
                        smooth={true} 
                        offset={50} 
                        duration={500}
                         className="nav__link">
                            <i className="icon-bubble"></i>
                        </LinkScroll>
                    </li>

                    
                </ul>
            </div>
        </nav>

        <div className="nav__footer">
            <span className="copyright">&copy; 2023-2024.</span>
        </div>
    </aside>
  )
}

export default Sidebar
 