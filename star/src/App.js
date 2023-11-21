import React from 'react';
import { Route, Routes } from "react-router-dom"

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
    <div className="App" style={{ backgroundImage: "url(https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-6/308787210_457577689737886_6832976261704682608_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_I06z0eNpEkAX-LMOmU&_nc_ht=scontent-iad3-2.xx&oh=00_AfCXhYJJqvKPW91EYLGJsnNDd1MfsDyhvK2BSZOG8koHkw&oe=655D3156)", backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center"}}>
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

{/* <input name="file" type="file"
   class="file-upload" data-cloudinary-field="image_id"
   data-form-data="{ 'transformation': {'crop':'limit','tags':'samples','width':3000,'height':2000}}"/> */}

// <CloudinaryContext cloudName="dvtt3ptgl">
//    <Image publicId="sample" format="jpg">
//        <Transformation crop="fill" gravity="faces" width="300" height="200"/>
//    </Image>
// </CloudinaryContext>

export default App;
