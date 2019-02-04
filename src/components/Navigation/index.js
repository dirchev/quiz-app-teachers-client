import React, { Component } from "react"
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <div className="navbar navbar-primary">
        <div className="home">
          <Link to="/dashboard" className="home-button">Quiz Apps</Link>
        </div>
        <div className="center">
          Dashboard
        </div>
        <div className="right"></div>
      </div>
    )
  }
}

export default Navigation
