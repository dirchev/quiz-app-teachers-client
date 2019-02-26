import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <h3>Navbar</h3>
        <div className="code-example">
          <div className="view">
          {
              window.colors.map((color) => {
                return (
                  <div key={color} className={`navbar navbar-${color}`}>
                    <div className="logo">
                      Quiz App
                    </div>
                    <div className="center">
                      Search Bar
                    </div>
                    <div className="right navbar-items">
                      <a href="/" className="navbar-item active">Home</a>
                      <a href="/" className="navbar-item">Students</a>
                      <a href="/" className="navbar-item">Profile</a>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className="description">
            Navbar (color can be controlled with .navbar-&lt;COLOR&gt;)
          </div>
          <pre className="code">
            {`
              <div className="navbar navbar-green">
                <div className="logo">
                  Quiz App
                </div>
                <div className="center">
                  Search Bar
                </div>
                <div className="right navbar-items">
                  <a href="/" className="navbar-item active">Home</a>
                  <a href="/" className="navbar-item">Students</a>
                  <a href="/" className="navbar-item">Profile</a>
                </div>
              </div>
            `}
          </pre>
        </div>
      </div>
    )
  }
}

export default Navbar;
