import React, { Component } from "react";

class Badge extends Component {
  render() {
    return (
      <div>
        <h3>Badge</h3>
        <div className="code-example">
        <div className="view">
          <h1>Heading with badge <span className="badge badge-blue">new</span></h1>
          <h2>Heading with badge <span className="badge badge-blue">new</span></h2>
          <h3>Heading with badge <span className="badge badge-blue">new</span></h3>
          <h4>Heading with badge <span className="badge badge-blue">new</span></h4>
          <h5>Heading with badge <span className="badge badge-blue">new</span></h5>
          <h6>Heading with badge <span className="badge badge-blue">new</span></h6>
          <p>paragraph with badge <span className="badge badge-blue">new</span></p>
          </div>
          <div className="description">
            Badges have a size relative to the immediate parent element
          </div>
          <pre className="code">
            {`
            <h1>Heading with badge <span className="badge badge-blue">new</span></h1>
            <h2>Heading with badge <span className="badge badge-blue">new</span></h2>
            <h3>Heading with badge <span className="badge badge-blue">new</span></h3>
            <h4>Heading with badge <span className="badge badge-blue">new</span></h4>
            <h5>Heading with badge <span className="badge badge-blue">new</span></h5>
            <h6>Heading with badge <span className="badge badge-blue">new</span></h6>
            <p>paragraph with badge <span className="badge badge-blue">new</span></p>
            `}
          </pre>
        </div>

        <div className="code-example">
          <div className="view" style={{display: 'flex', flexWrap: 'wrap'}}>
            {
              window.colors.map((color) => {
                return (
                  <span key={color} className={`badge badge-${color}`}>new</span>
                )
              })
            }
          </div>
          <div className="description">
            Badge variants
          </div>
          <pre className="code">
          {
              window.colors.map((color) => {
                return `<span className="badge badge-${color}">new</span>`
              }).join('\n')
            }
          </pre>
        </div>

        <div className="code-example">
         <div className="view" style={{display: 'flex', flexWrap: 'wrap'}}>
            {
              window.colors.map((color) => {
                return (
                  <a href="#" key={color} className={`badge badge-${color}`}>new</a>
                )
              })
            }
          </div>
          <div className="description">
            Badge links
          </div>
          <pre className="code">
          {
              window.colors.map((color) => {
                return `<a href="#" className="badge badge-${color}">new</a>`
              }).join('\n')
            }
          </pre>
        </div>
      </div>
    );
  }
}

export default Badge;
