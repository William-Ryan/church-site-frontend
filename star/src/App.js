import React from 'react';
import { Route, Switch } from "react-router-dom"

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
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/stream' component={Stream}/>
        <Route exact path='/media' component={Media}/>
        <Route exact path='/events' component={Events}/>
        <Route exact path='/contact' component={Contact}/>
      </Switch>
    </div>
  );
}

export default App;
