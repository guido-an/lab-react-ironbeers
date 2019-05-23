import React, { Component } from "react";
import Navbar from "./Navbar";
import Axios from "axios";

export default class RandomBeer extends Component {
  state = {
    beer: ""
  };

  componentDidMount() {
    Axios.get("https://ih-beer-api.herokuapp.com/beers/random").then(res => {
      this.setState({
        beer: res.data
      });
      console.log(this.state.beer);
    });
  }
  render() {
    const randomBeer = this.state.beer ? (
      <div className="beer-container">
        <img src={this.state.beer.image_url} alt="" />
        <p>{this.state.beer.name}</p>
        <h3>{this.state.beer.tagline}</h3>
        <p>{this.state.beer.description}</p>
      </div>
    ) : (
      <div>
        <p>Loading..</p>
      </div>
    );
    return (
      <div>
        <Navbar />
        <h1>Random beer</h1>
        {randomBeer}
      </div>
    );
  }
}
