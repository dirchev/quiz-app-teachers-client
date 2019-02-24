import React, { Component, Fragment } from "react"
import Input from "components/Form/Input";
import uuid from 'uuid'
import Checkbox from "components/Form/Checkbox";

const DEFAULT_NEW_ANSWER = {
  text: '',
  isCorrect: false
}

let getValueForField = function (field, event) {
  if (field === 'isCorrect') {
    return event.target.checked
  } else {
    return event.target.value
  }
}

class MultipleChoiceQuestionMultipleCorrect extends Component {
  constructor (props) { // props = {answers: []}
    super(props)

    this.handleAnswerFieldChange = this.handleAnswerFieldChange.bind(this)
    this.handleAddAnswer = this.handleAddAnswer.bind(this)
  }

  handleAddAnswer (event) {
    event.preventDefault()
    this.emitAnswersChange({
      options: [
        ...this.props.answers.options,
        {
          ...DEFAULT_NEW_ANSWER,
          _id: uuid.v4()
        }
      ]
    })
  }

  handleAnswerFieldChange (field, answerIndex) {
    return event => {
      let value = getValueForField(field, event)
      this.emitAnswersChange({
        options: [
          ...this.props.answers.options.slice(0, answerIndex),
          {
            ...this.props.answers.options[answerIndex],
            [field]: value
          },
          ...this.props.answers.options.slice(answerIndex + 1)
        ]
      })
    }
  }

  emitAnswersChange (updatedAnswers) {
    this.props.onAnswersChange(updatedAnswers)
  }

  render () {
    return (
      <div>
      <div className="title-header">
        <h3 className="m-none">Answers</h3>
        <button onClick={this.handleAddAnswer} className="button button-small button-primary">Add Answer</button>
      </div>
      {
        this.props.answers.options.map((answer, index) => {
          return (
            <Fragment key={index}>
              <h4 className="m-none">Answer {index + 1}</h4>
              <div className="controls max-width">
                <Input
                  label="Text"
                  placeholder="Put answer text."
                  type="text"
                  value={answer.text}
                  onChange={this.handleAnswerFieldChange('text', index)}
                />
                <Checkbox
                  topLabel
                  label="Correct answer"
                  checked={answer.isCorrect}
                  onChange={this.handleAnswerFieldChange('isCorrect', index)}
                  helpText="Select if this is the correct answer"
                />
              </div>
            </Fragment>
          )
        })
      }
      </div>
    )
  }
}

MultipleChoiceQuestionMultipleCorrect.defaultProps = {
  answers: {
    options: []
  }
}

export default MultipleChoiceQuestionMultipleCorrect
