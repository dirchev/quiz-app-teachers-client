import React, { Component } from "react";

class Alert extends Component {
  render() {
    return (
      <div>
        <h3>Alerts</h3>

        <div className="code-example">
          <div className="view">
            {
              window.colors.map((color) => {
                return (
                  <div key={color} className={`alert alert-${color}`}>A simple alert with {color}</div>
                )
              })
            }
          </div>
          <div className="description">
            There are various types of alerts
          </div>
          <pre className="code">
            {`
            <div className="alert alert-blue">A simple alert</div>
            <div className="alert alert-secondary">A simple alert</div>
            <div className="alert alert-success">A simple alert</div>
            <div className="alert alert-warning">A simple alert</div>
            <div className="alert alert-danger">A simple alert</div>
            <div className="alert alert-info">A simple alert</div>
            <div className="alert alert-light">A simple alert</div>
            <div className="alert alert-dark">A simple alert</div>
            `}
          </pre>
        </div>

        <div className="code-example">
          <div className="view">
            <div className="alert alert-blue">A simple alert with a <a href="/" className="alert-link">link</a></div>
          </div>
          <div className="description">
            There is also support for a link in a alert
          </div>
          <pre className="code">
            {`
            <div className="alert alert-blue">A simple alert with a <a href="/" className="alert-link">link</a></div>
            `}
          </pre>
        </div>

        <div className="code-example">
          <div className="view">
            <div className="alert alert-blue">
              <h2 className="alert-heading">Heading of alert</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt aliquam sunt vel adipisci quis soluta aspernatur vero quam temporibus aut dolor error quae qui mollitia, id placeat odio eum.</p>
              <hr/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt aliquam sunt vel adipisci quis soluta aspernatur vero quam temporibus aut dolor error quae qui mollitia, id placeat odio eum.</p>
            </div>
          </div>
          <div className="description">
            Alert with heading, paragraphs and a horizontal line.
          </div>
          <pre className="code">
            {`
            <div className="alert alert-blue">
              <h2 className="alert-heading">Heading of alert</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt aliquam sunt vel adipisci quis soluta aspernatur vero quam temporibus aut dolor error quae qui mollitia, id placeat odio eum.</p>
              <hr/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt aliquam sunt vel adipisci quis soluta aspernatur vero quam temporibus aut dolor error quae qui mollitia, id placeat odio eum.</p>
            </div>
            `}
          </pre>
        </div>

        <div className="code-example">
          <div className="view">
            <div className="alert alert-blue alert-dismissable">
              <h2 className="alert-heading">Heading of alert</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt aliquam sunt vel adipisci quis soluta aspernatur vero quam temporibus aut dolor error quae qui mollitia, id placeat odio eum.</p>
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
          <div className="description">
            Alert with heading, paragraphs and a horizontal line.
          </div>
          <pre className="code">
            {`
            <div className="alert alert-blue alert-dismissable">
              <h2 className="alert-heading">Heading of alert</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt aliquam sunt vel adipisci quis soluta aspernatur vero quam temporibus aut dolor error quae qui mollitia, id placeat odio eum.</p>
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            `}
          </pre>
        </div>
      </div>
    );
  }
}

export default Alert;
