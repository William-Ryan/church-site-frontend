import React from 'react';
import { Route, Switch } from "react-router-dom"

import Navigation from "./Components/Navigation.jsx"
import Home from "./Components/Home.jsx"

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about'/>
        <Route exact path='/stream'/>
        <Route exact path='/media'/>
        <Route exact path='/events'/>
        <Route exact path='/contact'/>
      </Switch>
    </div>
  );
}

export default App;
