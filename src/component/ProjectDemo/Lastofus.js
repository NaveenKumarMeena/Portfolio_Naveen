import React from 'react'
import "./project.css";
import Separator from '../reusable/separator';
import Footer from '../footer';
import Header from '../header';
import Navbar from '../reusable/Navbar/Navbar';
import Contact from '../body/contact';

const Lastofus = () => {
    
    return (
        <div id="MovieReview">
        <div className="header"><Navbar/></div>
        <div className="container">
            <h1 className="title">Last of Us Fan Website</h1>
            <div className="tt">
            <h1 className="tagtitle">Tags: </h1>
          <div className="Project-tags">
              <label className="tags">HTML</label>
              <label className="tags">CSS</label>
              <label className="tags">JavaScript</label>
          </div>
            </div>
          <div className="body">
          <h2 className="imagetitle">Images</h2>
              <img className="image" src={require('../../image/Screenshot (101).png').default} alt="Movie Review Website Using TMBD API" />
              {/* <Separator/>
              <img className="image" src={require('../../image/Screenshot (69).png').default} alt="Movie Review Website Using TMBD API" />
              <Separator/>
              <img className="image" src={require('../../image/Screenshot (70).png').default} alt="Movie Review Website Using TMBD API" /> */}
              {/* <Separator/>
              <h2 className="videotitle">Videos</h2>
              <div className="videotags">
                  <video className="videos" controls src={require('../../image/15-13-28.mp4').default} type="video/mp4"></video>
                  <video className="videos" controls src={require('../../image/15-13-28.mp4').default} type="video/mp4"></video>
                  <video className="videos" controls src={require('../../image/15-13-28.mp4').default} type="video/mp4"></video>
              </div> */}
              <Separator/>
              <h2 className="Description">Description</h2>
              <p className="desc">This website is used by Last of US game franchise fans. They share there experince with the help of form Made by Me with the help of <b><i>JavaScript</i></b> , <b><i>HTML</i></b> , <b><i>CSS</i></b>. </p>
              <Contact/>
              </div>    
        </div>
        <Footer/>
        </div>
    )
}

export default Lastofus
