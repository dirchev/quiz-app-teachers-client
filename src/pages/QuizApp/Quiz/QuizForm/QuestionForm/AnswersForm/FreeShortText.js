import React, { Component } from "react"
import Input from 'components/Form/Input'

class FreeShortText extends Component {
  constructor () {
    super()
    this.handleCorrectAnswerChange = this.handleCorrectAnswerChange.bind(this)
  }

  handleCorrectAnswerChange (event) {
    let value = event.target.value
    this.emitAnswersChange({
      correctAnswer: value
    })
  }

  emitAnswersChange (updatedAnswers) {
    this.props.onAnswersChange(updatedAnswers)
  }
  render () {
    return (
      <div>
        <div className="title-header">
          <h3 className="m-none">Answers</h3>
        </div>
        <div className="alert alert-info">
          Students will be given a one line text input to enter their answer.
        </div>
        <Input
          label="Correct answer"
          placeholder="Put the correct answer here."
          type="text"
          value={this.props.answers.correctAnswer}
          onChange={this.handleCorrectAnswerChange}
        />
      </div>
    )
  }
}

FreeShortText.defaultProps = {
  answers: {
    correctAnswer: ''
  }
}
export default FreeShortText
