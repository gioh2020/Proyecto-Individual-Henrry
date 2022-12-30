import './App.css';
import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from './components/home/Home';
import NavBar from './components/navBAr/NavBar';
import CountryDetail from './components/countryDetail/CountryDetail.jsx';
import Clocks from './components/clocks/Clocks';
import Form from "./components/form/Form";
import Error404 from "./components/404/404"


function App() {
  return (
    // <div className="App">
    //   <h1>Henry Countries</h1>
    // </div>
    <BrowserRouter>
    <Switch>
      <div className='App'>
        <body>
        <Route path = "/" component = {NavBar}/>
        <Route exact path = '/home' component = {Home} />
        <Route exact path = "/infocountry/:Id" component={CountryDetail}/>
        <Route exact path = "/Clocks" component={Clocks}/>
        <Route exact path="/about" component={Form} />
        {/* <Route  path="*" component={Error404}/> */}
        </body>
        
      </div>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
