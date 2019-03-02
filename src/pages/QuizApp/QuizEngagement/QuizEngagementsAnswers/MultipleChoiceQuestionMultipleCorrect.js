import React, { Component } from "react"

class MultipleChoiceQuestionMultipleCorrect extends Component {
  getAnswerGivenText () {
    return this.props.question.answers.options.filter((answer) => {
      return this.props.answerGiven.indexOf(answer._id)
    }).map(({text}) => text)
  }
  render () {
    return (
      <div className="answers">
        <div className="answer-given">
        <h4>Answer Given</h4>
          {
            this.props.answerGiven.length
            ? (
              <div className="body">
              {
                this.getAnswerGivenText().map(answer => {
                  return <li key={answer}>{answer}</li>
                })
              }
              </div>
            )
            : <div className="body">No answer given</div>
          }
        </div>
        <div className="answer-proposed">
          <h4>Proposed Right Answer</h4>
          <ul className="body">
            {
              this.props.question.answers.options.map((answer, index) => {
                return (
                  <li className={`${answer.isCorrect ? 'correct': 'incorrect'}`}key={answer._id}>{answer.text}</li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
MultipleChoiceQuestionMultipleCorrect.defaultProps = {
  answerGiven: []
}
export default MultipleChoiceQuestionMultipleCorrect
