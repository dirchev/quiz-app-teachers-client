import React, { Component } from "react"
import MultilineText from "components/MultilineText"

class FreeLongText extends Component {
  render () {
    return (
      <div className="answers">
        <div className="answer-given">
          <h4>Answer Given</h4>
          {
            this.props.answerGiven
            ? (
              <div className="body">
                <MultilineText text={this.props.answerGiven} />
              </div>
            )
            : (
              <div className="body">No answer given</div>
            )
          }
        </div>
        <div className="answer-proposed">
          <h4>Proposed Right Answer</h4>
          <div className="body">N/A</div>
        </div>
      </div>
    )
  }
}

export default FreeLongText
