import React, { Component } from "react";

class Tabs extends Component {
  render() {
    return (
      <div>
        <h3>Tabs</h3>
        <div className="code-example">
          <div className="view">
            <div className="tabs">
              <div className="tabs-navigation">
                <button className="tabs-navigation-item">Tab 1 <span className="badge badge-primary">new</span></button>
                <button className="tabs-navigation-item">Tab 2</button>
                <button className="tabs-navigation-item active">Tab 3</button>
              </div>
              <div className="tabs-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, aut voluptatibus. Perferendis, vel nostrum itaque atque odit, inventore unde incidunt, esse facilis nesciunt cupiditate? Nobis illum minima atque eveniet quis.</p>
              </div>
            </div>
            <div className="tabs vertical">
              <div className="tabs-navigation">
                <button className="tabs-navigation-item"><span className="badge badge-primary">new</span> Tab 1</button>
                <button className="tabs-navigation-item">Tab 2</button>
                <button className="tabs-navigation-item active">Tab 3</button>
              </div>
              <div className="tabs-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, aut voluptatibus. Perferendis, vel nostrum itaque atque odit, inventore unde incidunt, esse facilis nesciunt cupiditate? Nobis illum minima atque eveniet quis.</p>
              </div>
            </div>
          </div>
          <div className="description">
            Tabs (can be horizontal and vertical)
          </div>
          <pre className="code">
            {`
            <div className="tabs">
              <div className="tabs-navigation">
                <button className="tabs-navigation-item">Tab 1</button>
                <button className="tabs-navigation-item">Tab 2</button>
                <button className="tabs-navigation-item active">Tab 3</button>
              </div>
              <div className="tabs-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, aut voluptatibus. Perferendis, vel nostrum itaque atque odit, inventore unde incidunt, esse facilis nesciunt cupiditate? Nobis illum minima atque eveniet quis.</p>
              </div>
            </div>
            <div className="tabs vertical">
              <div className="tabs-navigation">
                <button className="tabs-navigation-item">Tab 1</button>
                <button className="tabs-navigation-item">Tab 2</button>
                <button className="tabs-navigation-item active">Tab 3</button>
              </div>
              <div className="tabs-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, aut voluptatibus. Perferendis, vel nostrum itaque atque odit, inventore unde incidunt, esse facilis nesciunt cupiditate? Nobis illum minima atque eveniet quis.</p>
              </div>
            </div>
            `}
          </pre>
        </div>
      </div>
    )
  }
}

export default Tabs;
