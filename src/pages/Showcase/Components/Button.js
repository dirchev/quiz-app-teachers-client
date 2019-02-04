import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div>
        <h3>Button</h3>

        <div className="code-example">
          <div className="view" style={{display: 'flex', flexWrap: 'wrap'}}>
            {
              window.colors.map((color) => {
                return (
                  <button key={color} className={`button button-${color}`}>{color}</button>
                )
              })
            }
          </div>
          <div className="description">
            There are various types of buttons
          </div>
          <pre className="code">
            {
              window.colors.map((color) => {
                return `<button className="button button-${color}">${color}</button>`
              }).join('\n')
            }
          </pre>
        </div>

        <div className="code-example">
          <div className="view" style={{display: 'flex', flexWrap: 'wrap'}}>
            {
              window.colors.map((color) => {
                return (
                  <a key={color} href="#" className={`button button-${color}`}>{color}</a>
                )
              })
            }
          </div>
          <div className="description">
            There are various types of buttons
          </div>
          <pre className="code">
            {
              window.colors.map((color) => {
                return `<a href="#" className="button button-${color}">${color}</a>`
              }).join('\n')
            }
          </pre>
        </div>

        <div className="code-example">
          <div className="view" style={{display: 'flex', flexWrap: 'wrap'}}>
            {
              window.colors.map((color) => {
                return (
                  <a key={color} href="#" className={`button button-outline button-${color}`}>{color}</a>
                )
              })
            }
          </div>
          <div className="description">
            There are various types of buttons
          </div>
          <pre className="code">
            {
              window.colors.map((color) => {
                return `<a href="#" className="button button-outline button-${color}">${color}</a>`
              }).join('\n')
            }
          </pre>
        </div>


        <div className="code-example">
          <div className="view">
            <button className="button button-blue button-large">Large Button</button>
            <button className="button button-blue button-outline button-large">Large Button</button>
            <button className="button button-green button-large">Large Button</button>
            <button className="button button-green button-outline button-large">Large Button</button>
          </div>
          <div className="description">
            Large buttons
          </div>
          <pre className="code">
            {`
            <button className="button button-blue button-large">Large Button</button>
            <button className="button button-blue button-outline button-large">Large Button</button>
            <button className="button button-green button-large">Large Button</button>
            <button className="button button-green button-outline button-large">Large Button</button>
            `}
          </pre>
        </div>

        <div className="code-example">
          <div className="view">
            <button className="button button-blue button-small">Small Button</button>
            <button className="button button-blue button-outline button-small">Small Button</button>
            <button className="button button-green button-small">Small Button</button>
            <button className="button button-green button-outline button-small">Small Button</button>
          </div>
          <div className="description">
            Small buttons
          </div>
          <pre className="code">
            {`
              <button className="button button-blue button-small">Small Button</button>
              <button className="button button-blue button-outline button-small">Small Button</button>
              <button className="button button-green button-small">Small Button</button>
              <button className="button button-green button-outline button-small">Small Button</button>
            `}
          </pre>
        </div>

        <div className="code-example">
          <div className="view">
            <button className="button button-blue" disabled>Disabled Button</button>
            <button className="button button-blue button-outline" disabled>Disabled Button</button>
            <a href="#" className="button button-blue disabled">Disabled Link</a>
            <a href="#" className="button button-blue button-outline disabled">Disabled Link</a>
          </div>
          <div className="description">
            Disabled buttons
          </div>
          <pre className="code">
            {`
            <button className="button button-blue" disabled>Disabled Button</button>
            <button className="button button-blue button-outline" disabled>Disabled Button</button>
            <a className="button button-blue disabled">Disabled Link</a>
            <a className="button button-blue button-outline disabled">Disabled Link</a>

            `}
          </pre>
        </div>
      </div>
    )
  }
}

export default Button;
