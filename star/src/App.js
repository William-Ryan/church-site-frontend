import React from 'react';
import { Route, Routes } from "react-router-dom"

import TitleBar from "./Components/TitleBar.jsx"
import Navigation from "./Components/Navigation.jsx"
import Home from "./Components/Home.jsx"
import About from "./Components/About.jsx"
import Stream from "./Components/Stream.jsx"
import Media from "./Components/Media.jsx"
import Events from "./Components/Events.jsx"
import Contact from "./Components/Contact.jsx"

import { makeStyles } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

function App() {
  return (
    <div className="App">
      <TitleBar />
      <Navigation />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/about' element={<About />}/>
        {/* <Route exact path='/stream' element={Stream}/> */}
        {/* <Route exact path='/media' element={Media}/> */}
        <Route exact path='/events' element={<Events />}/>
        <Route exact path='/contact' element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
