import React, { Component } from "react";

class Typography extends Component {
  render() {
    return (
      <div>
        <h3>Typography</h3>
        <div className="code-example">
          <div className="view">
            <h1> Example Heading Here </h1>
            <h2> Example Heading Here </h2>
            <h3> Example Heading Here </h3>
            <h4> Example Heading Here </h4>
            <h5> Example Heading Here </h5>
            <h6> Example Heading Here </h6>
          </div>
          <div className="description">
            All HTML Headings from 1 to 6
          </div>
          <pre className="code">
            {`
              <h1> Example Heading Here </h1>
              <h2> Example Heading Here </h2>
              <h3> Example Heading Here </h3>
              <h4> Example Heading Here </h4>
              <h5> Example Heading Here </h5>
              <h6> Example Heading Here </h6>
            `}
          </pre>
        </div>

        <h3>Heading Additions</h3>
        <div className="code-example">
          <div className="view">
            <h3>Main heading <span className="subhead">sub heading</span></h3>
          </div>
          <div className="description">
            Sub headings can be added in a heading tag
          </div>
          <pre className="code">
            {`<h3>Main heading <span className="subhead">sub heading</span></h3>`}
          </pre>
        </div>
      </div>
    );
  }
}

export default Typography;
