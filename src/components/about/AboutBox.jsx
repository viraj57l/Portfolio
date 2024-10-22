import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon icon-fire"></i>

            <div>
                <h3 className="about__title">5</h3>
                <span className="about__subtitle ">Projects Completed</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-badge"></i>

            <div>
                <h3 className="about__title">100+</h3>
                <span className="about__subtitle">LeetCode Problems Solved</span>
            </div>
        </div>


        <div className="about__box">
            <i className="about__icon icon-badge"></i>

            <div>
                <h3 className="about__title">100+</h3>
                <span className="about__subtitle">HackerRank Problems Solved</span>
            </div>
        </div>

        
        <div className="about__box">
            <i className="about__icon icon-notebook"></i>

            <div>
                <h3 className="about__title">5</h3>
                <span className="about__subtitle">Courses Completed</span>
            </div>
        </div>


    </div>
  )
}

export default AboutBox
