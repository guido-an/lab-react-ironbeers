import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { stringify } from "querystring";
import axios from "axios";
import Navbar from './Navbar'
import { withRouter } from 'react-router-dom'


export default class NewBeer extends Component {
  state = {
    redirect: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    
    e.preventDefault();

    const beer = {
      name: this.state.name,
      tagline: this.state.tagline,
      description: this.state.description,
      first_brewed: this.state.first_brewed,
      brewers_tips: this.state.brewers_tips,
      attenuation_level: this.state.attenuation_level,
      contributed_by: this.state.contributed_by
    };

    axios
      .post(`https://ih-beer-api.herokuapp.com/beers/new`, beer )
      .then(res => {
        this.setState({
            redirect: true
        })
      })
      .catch(err => {
          console.log(err)
      })
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        {this.renderRedirect()}
        <pre>{JSON.stringify(this.state, "\t", 2)}</pre>
        new beer
        <form onSubmit={this.handleSubmit} >
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" onChange={this.handleChange} />

          <label htmlFor="name">Tagline:</label>
          <input type="text" name="tagline" onChange={this.handleChange} />

          <label htmlFor="name">description:</label>
          <input type="text" name="description" onChange={this.handleChange} />

          <label htmlFor="name">first_brewed:</label>
          <input type="text" name="first_brewed" onChange={this.handleChange} />

          <label htmlFor="name">brewers_tips:</label>
          <input type="text" name="brewers_tips" onChange={this.handleChange} />

          <label htmlFor="name">attenuation_level:</label>
          <input
            type="number"
            name="attenuation_level"
            onChange={this.handleChange}
          />

          <label htmlFor="name">contributed_by:</label>
          <input
            type="text"
            name="contributed_by"
            onChange={this.handleChange}
          />

          <button>Submit</button>
        </form>
      </div>
    );
  }
}
