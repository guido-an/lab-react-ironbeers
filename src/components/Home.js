import React, { Component } from "react";
import BeerCards from "./BeerCards";
import Beers from "./Beers";
import { Route, Switch } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <BeerCards />
      </div>
    );
  }
}

export default Home;
