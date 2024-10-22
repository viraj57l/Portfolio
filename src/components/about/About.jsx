import React from 'react'
import './about.css'
import about from '../../assets/avatar-2.svg'
import AboutBox from './AboutBox'
import { Link as LinkScroll } from 'react-scroll'

const About = () => {
  return (
    <section className="about container section" id='about'>
        <h2 className="section__title">About Me</h2>

        <div className="about__container grid">
            <img src={about} alt="" className="about__img" />

            <div className="about__data grid">
                <div className="about__info">
                    <p className="about__description">
                        I am Viraj Kunjir, a back-end developer .I have with strong expertise in 
                        Spring Boot and a solid foundation in Java Core.
                        I also have experience working with React.js, Node.js, and databases like
                        MongoDB and MySQL,allowing me to manage both backend services and integrate 
                        with frontend frameworks effectively.
                    </p>
                    <LinkScroll
                    to='resume'
                    spy={true} 
                    smooth={true} 
                    offset={50} 
                    duration={500}  className="btn">Download CV</LinkScroll>
                </div>
                <div className="about__skills grid">
                    <div className="skills__data">
                       <div className="skills__title">
                          <h3 className="skills__name">Development</h3>
                          <span className="skills__number">90%</span> 
                       </div> 

                       <div className="skills__bar">
                        <span className="skills__percentage development"></span>
                       </div>
                    </div>

                    <div className="skills__data">
                       <div className="skills__title">
                          <h3 className="skills__name">Design</h3>
                          <span className="skills__number">70%</span> 
                       </div> 
                       
                       <div className="skills__bar">
                        <span className="skills__percentage ui__design"></span>
                       </div>
                    </div>

                    <div className="skills__data">
                       <div className="skills__title">
                          <h3 className="skills__name">Databases</h3>
                          <span className="skills__number">70%</span> 
                       </div> 
                       
                       <div className="skills__bar">
                        <span className="skills__percentage database"></span>
                       </div>
                    </div>

                </div>
            </div>
        </div>

        <AboutBox />
    </section>
  )
}

export default About
