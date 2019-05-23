import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";
import Beers from "./components/Beers.jsx";
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'
import BeerDetail from './components/BeerDetail'

function App() {
  return (
    <div className="App">
    
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/beers" component={Beers} />
      <Route path="/random-beer" component={RandomBeer} />
      <Route path="/new-beer" component={NewBeer} />
      <Route path="/beers/:_id" component={BeerDetail} />
      <Route path="/new-beer" component={NewBeer} />
      </Switch>
    </div>
  );
}

export default App;
