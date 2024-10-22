import React from 'react'
import './home.css'
import Me from "../../assets/avatar-1.svg"
import HeaderSocial from './HeaderSocial'
import ScrollDown from './ScrollDown'
import Shapes from './Shapes'
import { Link as LinkScroll } from 'react-scroll'


const Home = () => {
  return (
    <section className="home container" id="home">
        <div className="intro">
            <img src={Me} alt="" className="home__img" />
            <h1 className="home__name">Viraj Kunjir</h1>
            <span className="home__education">I'm Back-end developer</span>
            <HeaderSocial />

            <LinkScroll
            to='contact'
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500}
             className='btn'>Hire Me</LinkScroll>
            <ScrollDown />
        </div>
        <Shapes />
    </section>
  )
}

export default Home
