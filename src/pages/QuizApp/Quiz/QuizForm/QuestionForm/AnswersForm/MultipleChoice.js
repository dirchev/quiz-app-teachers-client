import React, { Component, Fragment } from "react"

const DEFAULT_NEW_ANSWER = {
  text: '',
  points: null
}

class Question extends Component {
  constructor (props) { // props = {answers: []}
    super(props)

    this.handleAnswerFieldChange = this.handleAnswerFieldChange.bind(this)
    this.handleAddAnswer = this.handleAddAnswer.bind(this)
  }

  handleAddAnswer (event) {
    event.preventDefault()
    this.emitAnswersChange([
      ...this.props.answers,
      DEFAULT_NEW_ANSWER,
    ])
  }

  handleAnswerFieldChange (field, answerIndex) {
    return event => {
      let value = event.target.value
      this.emitAnswersChange([
        ...this.props.answers.slice(0, answerIndex),
        {
          ...this.props.answers[answerIndex],
          [field]: value
        },
        ...this.props.answers.slice(answerIndex + 1)
      ])
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
        this.props.answers.map((answer, index) => {
          return (
            <Fragment key={index}>
              <h4 className="m-none">Answer {index + 1}</h4>
              <div className="controls max-width">
                <div className="form-field">
                  <label className="label" htmlFor={`answer${index}Text`}>Text</label>
                  <input
                    className="input"
                    placeholder="Put answer text."
                    id={`answer${index}Text`}
                    type="text"
                    value={answer.text}
                    onChange={this.handleAnswerFieldChange('text', index)}
                    />
                </div>
                <div className="form-field">
                  <label className="label" htmlFor={`answer${index}points`}>Points</label>
                  <input
                    className="input"
                    placeholder="Put answer points."
                    id={`answer${index}points`}
                    type="number"
                    value={answer.points}
                    onChange={this.handleAnswerFieldChange('points', index)}
                    />
                </div>
              </div>
            </Fragment>
          )
        })
      }
      </div>
    )
  }
}

Question.defaultProps = {
  answers: []
}

export default Question
