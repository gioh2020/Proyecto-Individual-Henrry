import './App.css';
import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from './components/home/Home';
import NavBar from './components/navBAr/NavBar';
import CountryDetail from './components/countryDetail/CountryDetail.jsx';
import Clocks from './components/clocks/Clocks';
import Form from "./components/form/Form";
import axios from 'axios';
axios.defaults.baseURL = "https://proyecto-individual-henrry-production.up.railway.app/"
// axios.defaults.baseURL = "http://localhost:3001/" 



function App() {
  return (
    <BrowserRouter>
    <Switch>
      <div className='App'>
        <body>
        <Route path = "/" component = {NavBar}/>
        <Route exact path = '/home' component = {Home} />
        <Route exact path = "/infocountry/:Id" component={CountryDetail}/>
        <Route exact path = "/Clocks" component={Clocks}/>
        <Route exact path="/about" component={Form} />
        </body>
        
      </div>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
