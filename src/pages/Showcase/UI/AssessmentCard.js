import React, { Component } from "react";

class Assessment extends Component {
  render() {
    return (
      <div>
        <h3>Assessment Card</h3>
        <div className="code-example">
          <div className="view">
            <div className="assessment-card">
              <div className="title">Mock Exam Paper</div>
              <div className="info">
                <div className="info-item green">Completed</div>
                <div className="info-item yellow">Mandatory</div>
                <div className="info-item red">1 attempt</div>
                <div className="info-item lightBlue">some info here</div>
              </div>
              <div className="description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis rem iure nam doloremque, veritatis omnis odio tenetur repudiandae veniam magni voluptatibus sed exercitationem, temporibus eaque, ipsam quo enim accusamus velit.
              </div>
              <div className="controls separated">
                <button className="button button-grey button-small button-outline">View attempt</button>
                <button className="button button-blue button-small">Complete Quiz</button>
              </div>
            </div>
          </div>
          <div className="description">
            Assessment Card Example
          </div>
          <pre className="code">
            {`
            <div className="assessment-card">
              <div className="title">Mock Exam Paper</div>
              <div className="info">
                <div className="info-item green">Completed</div>
                <div className="info-item yellow">Mandatory</div>
                <div className="info-item red">1 attempt</div>
                <div className="info-item lightBlue">some info here</div>
              </div>
              <div className="description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis rem iure nam doloremque, veritatis omnis odio tenetur repudiandae veniam magni voluptatibus sed exercitationem, temporibus eaque, ipsam quo enim accusamus velit.
              </div>
              <div className="controls separated">
                <button className="button button-grey button-small button-outline">View attempt</button>
                <button className="button button-blue button-small">Complete Quiz</button>
              </div>
            </div>
            `}
          </pre>
        </div>

        <div className="code-example">
          <div className="view">
            <div className="assessment-card">
              <div className="title">Mock Exam Paper</div>
              <div className="info">
                <div className="info-item green">Completed</div>
                <div className="info-item yellow">Mandatory</div>
                <div className="info-item red">1 attempt</div>
                <div className="info-item lightBlue">some info here</div>
              </div>
              <div className="description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis rem iure nam doloremque, veritatis omnis odio tenetur repudiandae veniam magni voluptatibus sed exercitationem, temporibus eaque, ipsam quo enim accusamus velit.
              </div>
              <div className="stats">
                <div className="stats-item">
                  <div className="name">Completions</div>
                  <div className="value">15 / 30</div>
                </div>
                <div className="stats-item">
                  <div className="name">Average Mark</div>
                  <div className="value">65% / 100%</div>
                </div>
              </div>
              <div className="controls separated">
                <button className="button button-grey button-small button-outline">View attempt</button>
                <button className="button button-blue button-small">Complete Quiz</button>
              </div>
            </div>
          </div>
          <div className="description">
            Assessment Card With Stats
          </div>
          <pre className="code">
            {`
            <div className="assessment-card">
              <div className="title">Mock Exam Paper</div>
              <div className="info">
                <div className="info-item green">Completed</div>
                <div className="info-item yellow">Mandatory</div>
                <div className="info-item red">1 attempt</div>
                <div className="info-item lightBlue">some info here</div>
              </div>
              <div className="description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis rem iure nam doloremque, veritatis omnis odio tenetur repudiandae veniam magni voluptatibus sed exercitationem, temporibus eaque, ipsam quo enim accusamus velit.
              </div>
              <div className="stats">
                <div className="stats-item">
                  <div className="name">Completions</div>
                  <div className="value">15 / 30</div>
                </div>
                <div className="stats-item">
                  <div className="name">Average Mark</div>
                  <div className="value">65% / 100%</div>
                </div>
              </div>
              <div className="controls separated">
                <button className="button button-grey button-small button-outline">View attempt</button>
                <button className="button button-blue button-small">Complete Quiz</button>
              </div>
            </div>
            `}
          </pre>
        </div>

        <div className="code-example">
          <div className="view">
            <div className="assessment-card">
              <div className="title">Mock Exam Paper</div>
              <div className="info">
                <div className="info-item green">Completed</div>
                <div className="info-item yellow">Mandatory</div>
                <div className="info-item red">1 attempt</div>
                <div className="info-item lightBlue">some info here</div>
              </div>
              <div className="description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis rem iure nam doloremque, veritatis omnis odio tenetur repudiandae veniam magni voluptatibus sed exercitationem, temporibus eaque, ipsam quo enim accusamus velit.
              </div>
              <div className="stats">
                <a href="/" className="stats-item">
                  <div className="name">Completions</div>
                  <div className="value">15 / 30</div>
                </a>
                <a href="/" className="stats-item">
                  <div className="name">Average Mark</div>
                  <div className="value">65% / 100%</div>
                </a>
              </div>
              <div className="controls separated">
                <button className="button button-grey button-small button-outline">View attempt</button>
                <button className="button button-blue button-small">Complete Quiz</button>
              </div>
            </div>
          </div>
          <div className="description">
            Assessment Card With Clickable Stats
          </div>
          <pre className="code">
            {`
            <div className="assessment-card">
              <div className="title">Mock Exam Paper</div>
              <div className="info">
                <div className="info-item green">Completed</div>
                <div className="info-item yellow">Mandatory</div>
                <div className="info-item red">1 attempt</div>
                <div className="info-item lightBlue">some info here</div>
              </div>
              <div className="description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis rem iure nam doloremque, veritatis omnis odio tenetur repudiandae veniam magni voluptatibus sed exercitationem, temporibus eaque, ipsam quo enim accusamus velit.
              </div>
              <div className="stats">
                <a href="/" className="stats-item">
                  <div className="name">Completions</div>
                  <div className="value">15 / 30</div>
                </a>
                <a href="/" className="stats-item">
                  <div className="name">Average Mark</div>
                  <div className="value">65% / 100%</div>
                </a>
              </div>
              <div className="controls separated">
                <button className="button button-grey button-small button-outline">View attempt</button>
                <button className="button button-blue button-small">Complete Quiz</button>
              </div>
            </div>
            `}
          </pre>
        </div>
      </div>
    )
  }
}

export default Assessment;
