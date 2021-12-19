import React from 'react'
import "./project.css";
import Separator from '../reusable/separator';
import Footer from '../footer';
import Header from '../header';
import Navbar from '../reusable/Navbar/Navbar';
import Contact from '../body/contact';

const MovieReview = () => {
    
    return (
        <div id="MovieReview">
        <div className="header"><Navbar/></div>
        <div className="container">
            <h1 className="title">Movie Review Website Using TMBD API</h1>
            <div className="tt">
            <h1 className="tagtitle">Tags: </h1>
          <div className="Project-tags">
              <label className="tags">React</label>
              <label className="tags">CSS</label>
              <label className="tags">JavaScript</label>
              <label className="tags">API</label>
          </div>
            </div>
          <div className="body">
          <h2 className="imagetitle">Images</h2>
              <img className="image" src={require('../../image/Screenshot (19).png').default} alt="Movie Review Website Using TMBD API" />
              <Separator/>
              <img className="image" src={require('../../image/Screenshot (69).png').default} alt="Movie Review Website Using TMBD API" />
              <Separator/>
              <img className="image" src={require('../../image/Screenshot (70).png').default} alt="Movie Review Website Using TMBD API" />
              <Separator/>
              <h2 className="videotitle">Videos</h2>
              <div className="videotags">
                  <video className="videos" controls src={require('../../image/15-13-28.mp4').default} type="video/mp4"></video>
                  <video className="videos" controls src={require('../../image/15-13-28.mp4').default} type="video/mp4"></video>
                  <video className="videos" controls src={require('../../image/15-13-28.mp4').default} type="video/mp4"></video>
              </div>
              <Separator/>
              <h2 className="Description">Description</h2>
              <p className="desc">This is an online database of information related to films, television programs, home videos and streaming content online – including cast, production crew and personal biographies, plot summaries, trivia, ratings, and fan and critical reviews. With the help of <b><i>React</i></b> , <b><i>JavaScript</i></b> , <b><i>API</i></b> , <b><i>CSS</i></b>. </p>
              <Contact/>
              </div>   
        </div>
        <Footer/>
        </div>
    )
}

export default MovieReview
