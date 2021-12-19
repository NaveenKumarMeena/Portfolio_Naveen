import React from 'react'
import './body.css'
import About from './about/index'
// import Work from './work/index'
import Projects from './projects/index'
import Skills from './skills/index'
import Contact from './contact/index'
import Certificate from './certificate'

function Body() {
    return (
        <div className='body'>
            <section className="about">
                <About/>
            </section>
            <section className="projects">
                <Projects/>
            </section>
            <section className="skills">
                <Skills/>
            </section>
            <section className="certificate">
                <Certificate/>
            </section>
            {/* <section className="work">
                <Work/>
            </section> */}
            <section className="contact">
                <Contact/>
            </section>
            
        </div>
    )
}

export default Body
