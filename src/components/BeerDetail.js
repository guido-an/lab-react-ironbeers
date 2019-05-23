import React, { Component } from 'react'
import axios from 'axios'
import Navbar from './Navbar'

export default class BeerDetail extends Component {
    
    state = {
        beer: ""
    }

    componentDidMount() {
        const _id = this.props.match.params._id   
     
        axios.get('https://ih-beer-api.herokuapp.com/beers/' + _id)
        
        .then(res =>{
            
          console.log(res.data)
           this.setState({
               beer: res.data
           })
          
        })
        .catch(err =>{
            console.log(err)
        })
      
    };

    render() {
    const beer = this.state.beer ? (
        <div className="beer-container">
            <img src={this.state.beer.image_url} alt=""/>
            <p>{this.state.beer.name}</p>
            <h3>{this.state.beer.tagline}</h3>
            <p>{this.state.beer.description}</p>
        </div>
    ) : (
        <div>
            <p>Loading...</p>
        </div>
    )
        return (
            <div>
<Navbar />
           {beer}
            </div>
        )
    }
}
