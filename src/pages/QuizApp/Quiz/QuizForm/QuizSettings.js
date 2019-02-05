import React, { Component } from "react"
import './index.scss'

let getValueForField = function (field, event) {
  if (field === 'isMandatory') {
    return event.target.checked
  } else if (field === 'noOfAttempts') {
    return parseInt(event.target.value, 10)
  } else {
    return event.target.value
  }
}

class QuizSettings extends Component {
  constructor (props) {
    super(props)
    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleFieldChange (field) {
    return event => {
      let value = getValueForField(field, event)
      this.props.onQuizChange({
        ...this.props.quiz,
        [field]: value
      })
    }
  }

  handleSave (e) {
    e.preventDefault()
    this.props.onQuizSave()
  }

  handleDelete (e) {
    e.preventDefault()
    this.props.onQuizDelete()
  }

  render() {
    return (
      <div className="quiz-create-form box">
        <h1 className="m-none">Quiz Details</h1>
        <div className="form">
          <div className="form-field">
            <label className="label" htmlFor="quizName">Quiz Name</label>
            <input
              className="input"
              placeholder="Put the name of the quiz here."
              id="quizName"
              type="text"
              value={this.props.quiz.name}
              onChange={this.handleFieldChange('name')}
              />
            <div className="input-message">For example: "Mock Exam Test"</div>
          </div>
          <div className="form-field">
            <label className="label" htmlFor="quizDescription">Quiz Description</label>
            <textarea
              className="input"
              placeholder="Put description of the quiz here."
              id="quizDescription"
              value={this.props.quiz.description}
              onChange={this.handleFieldChange('description')}
              />
            <div className="input-message">Explain the purpose of the quiz for example, what study material it covers.</div>
          </div>
          <div className="form-field checkbox">
            <label className="label" htmlFor="quizIsMandatory">
              Is mandatory
            </label>
            <input
              className="input"
              type="checkbox"
              id="quizIsMandatory"
              value={this.props.quiz.isMandatory}
              onChange={this.handleFieldChange('isMandatory')}
            />
            <div className="check"></div>
            <div className="input-message">Setting the quiz as mandatory will require every student to do it.</div>
          </div>
          <div className="form-field">
            <label className="label" htmlFor="quizNoOfAttempts">Number of attempts</label>
            <input
              className="input"
              placeholder="Put the name of the quiz here."
              id="quizNoOfAttempts"
              type="number"
              value={this.props.quiz.noOfAttempts}
              onChange={this.handleFieldChange('noOfAttempts')}
              />
            <div className="input-message">Set to 0 for unlimited attempts.</div>
          </div>
          <div className="form-field">
            <label className="label" htmlFor="quizDeadline">Deadline</label>
            <input
              className="input"
              placeholder="Put the name of the quiz here."
              id="quizDeadline"
              type="datetime-local"
              value={this.props.quiz.deadline || ''}
              onChange={this.handleFieldChange('deadline')}
              />
            <div className="input-message">The quiz will not be available after this date.</div>
          </div>
        </div>
        <div className="controls separated">
          {
            this.props.onQuizDelete
            ? (
              <button onClick={this.handleDelete} type="button" className="button button-danger button-small">Delete</button>
            )
            : null
          }
          <button onClick={this.handleSave} type="button" className="button button-primary button-small">Save</button>
        </div>
      </div>
    )
  }
}

export default QuizSettings
