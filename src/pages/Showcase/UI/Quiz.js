import React, { Component } from "react";

class Quiz extends Component {
  render() {
    return (
      <div>
        <h3>Quiz</h3>
        <div className="code-example">
          <div className="view">
            <div className="quiz">
              <h1 className="title">Quiz Name</h1>
              <div className="progress">
                <button className="item button button-small button-outline button-blue">1</button>
                <button className="item button button-small button-outline button-blue">2</button>
                <button className="item button button-small button-blue">3</button>
                <button className="item button button-small button-outline button-grey">4</button>
                <button className="item button button-small button-outline button-grey">5</button>
                <button className="item button button-small button-outline button-grey">6</button>
                <button className="item button button-small button-outline button-grey">...</button>
                <button className="item button button-small button-outline button-grey">24</button>
                <button className="item button button-small button-outline button-grey">25</button>
              </div>
              <div className="timeleft">
                14:20
              </div>
              <div className="question">
                <h2 className="title">Question Title</h2>
                <div className="content">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, non. Quos enim aut, sunt id porro exercitationem nihil, recusandae facilis asperiores sapiente blanditiis quam. Nisi odio fugiat beatae ea accusamus!</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, non. Quos enim aut, sunt id porro exercitationem nihil, recusandae facilis asperiores sapiente blanditiis quam. Nisi odio fugiat beatae ea accusamus!</p>
                </div>
                <div className="answer-select">
                  <div className="answer-select-item">
                    <label htmlFor="answer1">Option 1</label>
                    <input id="answer1" type="radio" name="a" value="1"/>
                    <div className="check"></div>
                  </div>
                  <div className="answer-select-item">
                    <label htmlFor="answer2">Option 2</label>
                    <input id="answer2" type="radio" name="a" value="2"/>
                    <div className="check"></div>
                  </div>
                  <div className="answer-select-item">
                    <label htmlFor="answer3">Option 3</label>
                    <input id="answer3" type="radio" name="a" value="3"/>
                    <div className="check"></div>
                  </div>
                </div>
              </div>
              <div className="controls separated">
                <div className="controls">
                  <button className="button button-dark button-outline button-small">Previous</button>
                  <button className="button button-dark button-outline button-small">Next</button>
                </div>
                <button className="button button-blue button-small">Save</button>
              </div>
            </div>
          </div>
          <div className="description">
            Quiz Panel
          </div>
          <pre className="code">
            {`
            <div className="quiz">
              <h1 className="title">Quiz Name</h1>
              <div className="progress">
                <button className="item button button-small button-outline button-blue">1</button>
                <button className="item button button-small button-outline button-blue">2</button>
                <button className="item button button-small button-blue">3</button>
                <button className="item button button-small button-outline button-light">4</button>
                <button className="item button button-small button-outline button-light">5</button>
                <button className="item button button-small button-outline button-light">6</button>
                <button className="item button button-small button-outline button-light">...</button>
                <button className="item button button-small button-outline button-light">24</button>
                <button className="item button button-small button-outline button-light">25</button>
              </div>
              <div className="timeleft">
                14:20
              </div>
              <div className="question">
                <h2 className="title">Question Title</h2>
                <div className="content">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, non. Quos enim aut, sunt id porro exercitationem nihil, recusandae facilis asperiores sapiente blanditiis quam. Nisi odio fugiat beatae ea accusamus!</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, non. Quos enim aut, sunt id porro exercitationem nihil, recusandae facilis asperiores sapiente blanditiis quam. Nisi odio fugiat beatae ea accusamus!</p>
                </div>
                <div className="answer-select">
                  <div className="answer-select-item">
                    <label htmlFor="answer1">Option 1</label>
                    <input id="answer1" type="radio" name="a" value="1"/>
                    <div className="check"></div>
                  </div>
                  <div className="answer-select-item">
                    <label htmlFor="answer2">Option 2</label>
                    <input id="answer2" type="radio" name="a" value="2"/>
                    <div className="check"></div>
                  </div>
                  <div className="answer-select-item">
                    <label htmlFor="answer3">Option 3</label>
                    <input id="answer3" type="radio" name="a" value="3"/>
                    <div className="check"></div>
                  </div>
                </div>
              </div>
              <div className="controls separated">
                <div className="controls">
                  <button className="button button-dark button-outline button-small">Previous</button>
                  <button className="button button-dark button-outline button-small">Next</button>
                </div>
                <button className="button button-blue button-small">Save</button>
              </div>
            </div>
            `}
          </pre>
        </div>
      </div>
    )
  }
}

export default Quiz;
