import React, { Component, Fragment } from "react"
import Input from "components/Form/Input";
import uuid from 'uuid'
import Radio from "components/Form/Radio";

const DEFAULT_NEW_ANSWER = {
  text: ''
}

class MultipleChoiceQuestionOneCorrect extends Component {
  constructor (props) { // props = {answers: []}
    super(props)

    this.handleAnswerFieldChange = this.handleAnswerFieldChange.bind(this)
    this.handleAddAnswer = this.handleAddAnswer.bind(this)
    this.handleCorrectAnswerChange = this.handleCorrectAnswerChange.bind(this)

    this.answersComponentId = uuid.v4()
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
      let value = event.target.value
      this.emitAnswersChange({
        options: [
          ...this.props.answers.options.slice(0, answerIndex),
          {
            ...this.props.answers.options[answerIndex],
            [field]: value
          },
          ...this.props.answers.options.slice(answerIndex + 1)
        ],
        correctId: this.props.answers.correctId
      })
    }
  }

  emitAnswersChange (updatedAnswers) {
    this.props.onAnswersChange(updatedAnswers)
  }

  handleCorrectAnswerChange (event) {
    let value = event.target.value
    this.emitAnswersChange({
      options: this.props.answers.options,
      correctId: value
    })
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
                <Radio
                  topLabel
                  value={answer._id}
                  label="Correct answer"
                  checked={this.props.answers.correctId === answer._id}
                  onChange={this.handleCorrectAnswerChange}
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

MultipleChoiceQuestionOneCorrect.defaultProps = {
  answers: {
    options: [],
    correctId: null
  }
}

export default MultipleChoiceQuestionOneCorrect
