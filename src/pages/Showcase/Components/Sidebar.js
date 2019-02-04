import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <div>
        <h3>Sidebar</h3>
        <div className="code-example">
          <div className="view" style={{display: 'flex', flexWrap: 'wrap'}}>
            {
              window.colors.map((color) => {
                return (
                  <div key={color} className={`sidebar sidebar-${color}`}>
                    <div className="account-info">
                      <img className="photo" src="https://avatars0.githubusercontent.com/u/5685544?s=460&v=4" alt="profile of Dimitar Mirchev"/>
                      <div className="names">
                        Dimitar Mirchev
                      </div>
                      <div className="smalltext">
                        Computing 4<sup>th</sup> year.
                      </div>
                    </div>
                    <ul className="navigation">
                      <li className="navigation-item selected"><a href="#">Profile</a></li>
                      <li className="navigation-item"><a href="#">Grades</a></li>
                      <li className="navigation-item"><a href="#">Something</a></li>
                      <li className="navigation-item"><a href="#">Log out</a></li>
                    </ul>
                  </div>
                )
              })
            }
          </div>
          <div className="description">
            Sidebar
          </div>
          <pre className="code">
            {`
            <div className="sidebar">
              <div className="account-info">
                <img className="photo" src="https://avatars0.githubusercontent.com/u/5685544?s=460&v=4" alt="profile of Dimitar Mirchev"/>
                <div className="names">
                  Dimitar Mirchev
                </div>
                <div className="smalltext">
                  Computing 4<sup>th</sup> year.
                </div>
              </div>
              <ul className="navigation">
                <li><a href="#" className="navigation-item">Profile</a></li>
                <li><a href="#" className="navigation-item">Grades</a></li>
                <li><a href="#" className="navigation-item">Something</a></li>
                <li><a href="#" className="navigation-item">Log out</a></li>
              </ul>
            </div>
            `}
          </pre>
        </div>
      </div>
    )
  }
}

export default Sidebar;
