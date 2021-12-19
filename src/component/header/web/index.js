import React from 'react'
import './web.css'

function Web() {
    return (
        <div className='web'>
           <div className='web-option'>
               <a href="#project">
               <i class="fas fa-print option-icon"></i>Project
               </a>
           </div>
           <div className='web-option'>
               <a href='#skills'>
               <i class="fas fa-laptop-code option-icon"></i>Skills
               </a>
           </div>
           <div className='web-option'>
               <a href='#certificate'>
               <i class="fas fa-briefcase option-icon"></i>Certificate
               </a>
           </div>
           <div className='web-option'>
               <a href='#contact'>
               <i class="far fa-user option-icon"></i>Contact
               </a>
           </div>
        </div>
    )
}

export default Web
