import React from 'react'
import './about.css'
import SocialContact from '../../reusable/social-contact/index'
function About() {
    return (
        <div className='about'>
            <div className="about-top">
               <div className="about-info">
     Hello There, I am <br /> <span className='info-name'>Naveen Kumar Meena</span> . <br /> I am a Problem Solver and Web Developer
               </div>
               <div className="about-photo">
<img src={require('../../../image/coding1.png').default} alt=""  className='picture'/>
               </div>
            </div>
            <div className="about-bottom">
            <SocialContact/>
            </div>
        </div>
    )
}

export default About
