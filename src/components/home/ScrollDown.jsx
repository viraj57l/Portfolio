import React from 'react'
import { Link as LinkScroll } from 'react-scroll';

const ScrollDown = () =>{
    return (
        <div className='scroll__down'>
            <LinkScroll
            to='about'
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500}
             className='mouse__wrapper'>
                <span className='home__scroll-name'> Scroll Down </span>
                    <span className='mouse'>
                      <span className='wheel'></span>  
                    </span>
            </LinkScroll>
        </div>
    );
};

export default ScrollDown;