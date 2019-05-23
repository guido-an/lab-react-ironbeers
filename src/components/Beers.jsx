import React, { Component } from "react";

import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import axios from "axios";

export default class Beers extends Component {
  state = {
    beers: [],
    filter: ""
  };

  componentDidMount() {
    axios
      .get("https://ih-beer-api.herokuapp.com/beers")
      .then(res => {
        this.setState({
          beers: res.data.slice(0, 50),
        });
      
      })
      .catch(err => {
        console.log(err);
      });
  }

  filterBeers = (e) => {
    let searchValue = e.target.value
    let beer = this.state.beers.filter(beer => beer.name.startsWith(searchValue))
    console.log(beer)
    this.setState({
      
      filter: searchValue
    })
  }

  render() {
    
    const beers = this.state.beers;
    const beersList = beers.length ? (
      beers.filter(beer => beer.name.startsWith(this.state.filter)).map((beer, index) => {
          return <div key={index} className="beer-container">
              <img src={beer.image_url} alt={beer.image_url}/>
              <h2>{beer.name}</h2>
              <h3>{beer.tagline}</h3>
              <span><strong>Created by:</strong> {beer.contributed_by}</span>
              <Link to={"/beers/"+ beer._id}>details</Link>
          </div>
      })
    ) : (
      <div>
        <p>Loading</p>
      </div>
    );
   
    return (
      <div>
        <Navbar />
        filter <input type="text" onChange={this.filterBeers} />
        {beersList}
        
      </div>
    );
  }
}
