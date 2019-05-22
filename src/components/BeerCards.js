import React from "react";
import { Link, Route } from "react-router-dom";
import Beers from "./Beers";

const BeerCards = props => {
  return (
    <section>
      <div className="beer-cards">
        <Link to="/beers">
          <img src="./images/beers.png" alt="beers" />
        </Link>
        <h2>All beers</h2>
        <p>description</p>
      </div>
      <div className="beer-cards">
        <Link to="/random-beer">
          <img src="./images/random-beer.png" alt="random-beer" />
        </Link>
        <h2>Random beer</h2>
        <p>description</p>
      </div>
      <div className="beer-cards">
        <Link to="/new-beer">
          <img src="./images/new-beer.png" alt="new-beer" />
        </Link>
        <h2>New beer</h2>
        <p>description</p>
      </div>
    </section>
  );
};

export default BeerCards;
