import React, { Component } from "react"
import './index.scss'
import Input from "components/Form/Input";
import Textarea from "components/Form/Textarea";
import Checkbox from "components/Form/Checkbox";

let getValueForField = function (field, event) {
  if (['isMandatory', 'isAvailableOffline', 'canMarkAutomatically'].indexOf(field) !== -1) {
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
      let newFields = {
        [field]: value
      }
      if (field === 'isAvailableOffline' && value) {
        newFields.noOfAttempts = 0
        newFields.isMandatory = false
      }
      this.props.onQuizChange({
        ...this.props.quiz,
        ...newFields
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
          <Input
            label="Quiz Name"
            placeholder="Put the name of the quiz here."
            type="text"
            value={this.props.quiz.name}
            onChange={this.handleFieldChange('name')}
            helpText={'For example: "Mock Exam Test"'}
          />
          <Textarea
            label="Quiz Description"
            placeholder="Put description of the quiz here"
            value={this.props.quiz.description}
            onChange={this.handleFieldChange('description')}
            helpText={"Explain the purpose of the quiz for example, what study material it covers."}
          />
          <Checkbox
            label="Is available offline"
            checked={this.props.quiz.isAvailableOffline}
            onChange={this.handleFieldChange('isAvailableOffline')}
            helpText="Setting the quiz as available offline will make it accessible for students, even if they do not have internet connection. Offline quizess can not be mandatory and can not have attempts limit."
          />
          <Checkbox
            disabled={this.props.quiz.isAvailableOffline}
            label="Is mandatory"
            checked={this.props.quiz.isMandatory}
            onChange={this.handleFieldChange('isMandatory')}
            helpText="Setting the quiz as mandatory will require every student to do it."
          />
          <Checkbox
            label="Marked automatically"
            checked={this.props.quiz.canMarkAutomatically}
            onChange={this.handleFieldChange('canMarkAutomatically')}
            helpText="This feature will take into consideration the feedback, correct answers and points for each question and will mark the quiz attempts automatically."
          />
          <Input
            disabled={this.props.quiz.isAvailableOffline}
            label="Number of Attempts"
            placeholder="Put name of the quiz here."
            type="number"
            value={this.props.quiz.noOfAttempts}
            onChange={this.handleFieldChange('noOfAttempts')}
            helpText="Set to 0 for unlimited attempts."
          />
          <Input
            label="Deadline"
            type="datetime-local"
            value={this.props.quiz.deadline || ''}
            onChange={this.handleFieldChange('deadline')}
            helpText="The quiz will not be available after this date."
          />
          <Input
            label="Time Limit"
            type="number"
            value={this.props.quiz.timeLimit || 0}
            onChange={this.handleFieldChange('timeLimit')}
            helpText="Time limit (in minutes) to complete the quiz. Leave empty for unlimited."
          />
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
