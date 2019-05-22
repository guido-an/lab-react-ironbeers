import React from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Beers from "./components/Beers.jsx";
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'

function App() {
  return (
    <div className="App">
    
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/beers" component={Beers} />
      <Route path="/random-beer" component={RandomBeer} />
      <Route path="/new-beer" component={NewBeer} />
      </Switch>
    </div>
  );
}

export default App;
