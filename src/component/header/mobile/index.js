import React from 'react'
import './mobile.css'

function Mobile({isOpen , setIsOpen}) {
    return (
        <div className='mobile'>
          <div className='close-icon' onClick={()=> setIsOpen(!isOpen)}><i class="far fa-times-circle"></i></div>  
        <div className="mobile-options">
        <div className='mobile-option'>
               <a href="#project">
               <i class="fas fa-print option-icon"></i>Project
               </a>
           </div>
           <div className='mobile-option'>
               <a href='#skills'>
               <i class="fas fa-laptop-code option-icon"></i>Skills
               </a>
           </div>
           <div className='mobile-option'>
               <a href='#work'>
               <i class="fas fa-briefcase option-icon"></i>Certificate
               </a>
           </div>
           <div className='mobile-option'>
               <a href='#contact'>
               <i class="far fa-user option-icon"></i>Contact
               </a>
           </div>
        </div>
        </div>
    )
}

export default Mobile

