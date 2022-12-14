import './App.css';
import React from 'react';
import {Route, Switch} from "react-router-dom"
import Home from './components/home/Home';
import NavBar from './components/navBAr/NavBar';
import CountryDetail from './components/countryDetail/CountryDetail.jsx';
import Clocks from './components/clocks/Clocks';
import Form from "./components/form/Form";
import LandingPage from './components/landingPage/LandigPage';
import axios from 'axios';
axios.defaults.baseURL = "https://proyecto-individual-henrry-production.up.railway.app/"
// axios.defaults.baseURL = "http://localhost:3001/" 




function App() {
  return (
    <Switch>
      <div className='App'>
        <Route path = "/" component = {NavBar}/>
        <Route exact path = "/" component = {LandingPage}/>
        <Route exact path = '/home' component = {Home} />
        <Route exact path = "/infocountry/:Id" component={CountryDetail}/>
        <Route exact path = "/Clocks" component={Clocks}/>
        <Route exact path="/Form" component={Form} />
      </div>
    </Switch>
 
  );
}

export default App;
