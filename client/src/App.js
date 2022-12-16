import './App.css';
import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from './components/home/Home';
import NavBar from './components/navBAr/NavBar';
import CountryDetail from './components/countryDetail/CountryDetail.jsx';
import Clocks from './components/clocks/Clocks';

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
        <Route path = "/infocountry/:Id" component={CountryDetail}/>
        <Route path = "/Clocks" component={Clocks}/>
        
      </div>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
