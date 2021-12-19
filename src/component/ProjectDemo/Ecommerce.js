import React from 'react'
import "./project.css";
import Separator from '../reusable/separator';
import Footer from '../footer';
import Header from '../header';
import Navbar from '../reusable/Navbar/Navbar';
import Contact from '../body/contact';

const Ecommerce = () => {
    
    return (
        <div id="MovieReview">
        <div className="header"><Navbar/></div>
        <div className="container">
            <h1 className="title">Ecommerce Website</h1>
            <div className="tt">
            <h1 className="tagtitle">Tags: </h1>
          <div className="Project-tags">
              <label className="tags">React</label>
              <label className="tags">Rest API</label>
              <label className="tags">JavaScript</label>
              <label className="tags">Redux</label>
              <label className="tags">Stripe</label>
          </div>
            </div>
          <div className="body">
          <h2 className="imagetitle">Images</h2>
              <img className="image" src={require('../../image/Screenshot (77).png').default} alt="Movie Review Website Using TMBD API" />
              <Separator/>
              <img className="image" src={require('../../image/Screenshot (78).png').default} alt="Movie Review Website Using TMBD API" />
              <Separator/>
              <img className="image" src={require('../../image/Screenshot (80).png').default} alt="Movie Review Website Using TMBD API" />
              <Separator/>
              <img className="image" src={require('../../image/Screenshot (81).png').default} alt="Movie Review Website Using TMBD API" />
              <Separator/>
              <img className="image" src={require('../../image/Screenshot (75).png').default} alt="Movie Review Website Using TMBD API" />
              <Separator/>
              <img className="image" src={require('../../image/Screenshot (82).png').default} alt="Movie Review Website Using TMBD API" />
              <Separator/>
              <img className="image" src={require('../../image/Screenshot (83).png').default} alt="Movie Review Website Using TMBD API" />
              <Separator/>
              <h2 className="videotitle">Videos</h2>
              <div className="videotags">
                  <video className="videos" controls src={require('../../image/ecommerce.mp4').default} type="video/mp4"></video>
                  <video className="videos" controls src={require('../../image/ecommerce2.mp4').default} type="video/mp4"></video>
              </div>
              <Separator/>
              <h2 className="Description">Description</h2>
              <p className="desc">This website is a full stack website made by React. This website is ready to upload on the Internet with full Functioning. With the help of <b><i>React</i></b> , <b><i>JavaScript</i></b> , <b><i>Rest API</i></b> , <b><i>Redux</i></b> , <b><i>Stripe</i></b>. </p>
              <Contact/>
              </div>    
        </div>
        <Footer/>
        </div>
    )
}

export default Ecommerce
