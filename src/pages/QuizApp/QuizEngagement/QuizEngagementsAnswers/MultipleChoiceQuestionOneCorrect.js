import React, { Component } from "react"

class MultipleChoiceQuestionOneCorrect extends Component {
  getAnswerGivenText () {
    for (let answer of this.props.question.answers.options) {
      if (this.props.answerGiven === answer._id) {
        return answer.text
      }
    }
  }
  render () {
    return (
      <div className="answers">
        <div className="answer-given">
          <h4>Answer Given</h4>
          <div className="body">
            {
              this.props.answerGiven
              ? this.getAnswerGivenText()
              : 'No answer given'
            }
          </div>
        </div>
        <div className="answer-proposed">
          <h4>Proposed Right Answer</h4>
          <ul className="body">
            {
              this.props.question.answers.options.map((answer, index) => {
                return (
                  <li className={`${answer._id === this.props.question.answers.correctId ? 'correct' : 'incorrect'}`} key={answer._id}>{answer.text}</li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
MultipleChoiceQuestionOneCorrect.defaultProps = {
  answerGiven: null
}
export default MultipleChoiceQuestionOneCorrect
