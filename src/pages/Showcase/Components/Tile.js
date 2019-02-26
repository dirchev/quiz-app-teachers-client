import React, { Component } from "react";

class Tile extends Component {
  render() {
    return (
      <div>
        <h3>Tile</h3>
        <div className="code-example">
        <div className="view" style={{display: 'flex', flexWrap: 'wrap'}}>
            {
              window.colors.map((color) => {
                return (
                  <a href="/" key={color} className={`tile tile-${color}`}>Some Long Long Text Here</a>
                )
              })
            }
          </div>
          <div className="description">
            Clickable tiles
          </div>
          <pre className="code">
          {
              window.colors.map((color) => {
                return `<a href="/" className="tile tile-${color}">Some Long Long Text Here</a>`
              }).join('\n')
            }
          </pre>
        </div>

        <div className="code-example">
          <div className="view">
            <div className="tile tile-blue">Some Long Long Text Here</div>
            <div className="tile tile-green">Some Long Long Text Here</div>
            <div className="tile tile-orange">Some Long Long Text Here</div>
            <div className="tile tile-red">Some Long Long Text Here</div>
          </div>
          <div className="description">
            Non-clickable tiles
          </div>
          <pre className="code">
            {`
              <div className="tile tile-blue">Some Long Long Text Here</div>
              <div className="tile tile-green">Some Long Long Text Here</div>
              <div className="tile tile-orange">Some Long Long Text Here</div>
              <div className="tile tile-red">Some Long Long Text Here</div>
            `}
          </pre>
        </div>

        <div className="code-example">
          <div className="view">
            <div className="tile tile-blue">
              <h3>Some Title</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sapiente corrupti, dolorum dolor minus autem nobis cupiditate dolorem ut quod, voluptas soluta molestiae modi doloremque illum dicta porro eos maiores?</p>
              <div className="controls">
                <a href="/" className="button button-blue button-outline">Button</a>
              </div>
            </div>
          </div>
          <div className="description">
            Tile with content
          </div>
          <pre className="code">
            {`
            <div className="tile tile-blue">
              <h3>Some Title</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sapiente corrupti, dolorum dolor minus autem nobis cupiditate dolorem ut quod, voluptas soluta molestiae modi doloremque illum dicta porro eos maiores?</p>
              <div className="controls">
                <a href="/" className="button button-blue button-outline">Button</a>
              </div>
            </div>
            `}
          </pre>
        </div>
      </div>
    )
  }
}

export default Tile;
