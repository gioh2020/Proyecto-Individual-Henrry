import './App.css';
import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from './components/home/Home';
import NavBar from './components/navBAr/NavBar';

function App() {
  return (
    // <div className="App">
    //   <h1>Henry Countries</h1>
    // </div>
    <BrowserRouter>
    <Switch>
      <div className='App'>
        <Route path = "/" component = {NavBar}/>
        <Route exact path = '/' component = {Home} />
        
      </div>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
