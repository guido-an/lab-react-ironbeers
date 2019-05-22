import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <Link to="/"><img src="./images/home-icon.png" alt="home-icon"/></Link>
            </div>
        )
    }
}
