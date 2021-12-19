import React from 'react'
import Separator from '../../reusable/separator'
import SocialContact from '../../reusable/social-contact'
import './contact.css'
function Contact() {
    return (
        <div id='contact' className='contact'>
            <Separator/>
            <label className="section-title">Contact</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>Feel Free to Send Message or Feedback</p>
                    <SocialContact/>
         <div className="download">
             <a download href={require("../../../image/Naveen's Resume.pdf").default}>
             <i class="fas fa-download download-icon"></i>Download Resume</a>
         </div>
                </div>

            </div>
          
        </div>
    )
}

export default Contact
