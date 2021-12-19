import React from 'react'
import Home from './component/home/index'
import MovieReview from './component/ProjectDemo/MovieReview'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './component/reusable/Navbar/Navbar';
import Lastofus from './component/ProjectDemo/Lastofus';
import MusicPlayer from './component/ProjectDemo/MusicPlayer';
import Ecommerce from './component/ProjectDemo/Ecommerce';

function App() {

  return (

        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/projects' element={<Home/>} />
        <Route path='/certificate' element={<Home/>} />
        <Route path='/moviereview' element={<MovieReview/>} />
        <Route path='/lastofus' element={<Lastofus/>} />
        <Route path='/musicplayer' element={<MusicPlayer/>} />
        <Route path='/ecommerce' element={<Ecommerce/>} />
        </Routes>
    
  );

}


export default App
