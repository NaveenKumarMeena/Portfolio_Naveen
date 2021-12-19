import React from 'react'
import './home.css'
import Header from '../header/index'
import Body from '../body/index'
import Footer from '../footer/index'
import Navbar from '../reusable/Navbar/Navbar'
function Home() {
//     const mybutton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};
    return (
        <div className='home'>
              {/* <button onclick={topFunction} id="myBtn" title="Go to top">Top</button> */}
         <div>
            <Navbar/>  
         </div>
         <div>
             <Body/>
         </div>
         <div>
             <Footer/>
         </div>
   
        </div>
    ) 
  //     function topFunction() {
  //         document.body.scrollTop = 0;
  //         document.documentElement.scrollTop = 0;
  //       }

  // function scrollFunction() {
  //   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //     mybutton.style.display = "block";
  //   } else {
  //     mybutton.style.display = "none";
  //   }
  // }

// When the user clicks on the button, scroll to the top of the document

}
export default Home
