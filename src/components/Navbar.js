import React, { Component } from 'react'
import { Link } from "react-router-dom";
import homeIcon from './home-icon.png'

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <Link to="/"><img src={homeIcon} alt="home-icon"/></Link>
            </div>
        )
    }
}
