import React, { Component } from "react"
import Input from "components/Form/Input"
import Textarea from "components/Form/Textarea"
import shortid from "shortid"
import { getErrorMessagesForField } from "utils/errorMessages"

class QuizDetailsForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: props.quizApp.name,
      subdomain: props.quizApp.subdomain,
      description: props.quizApp.description,
    }

    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleFieldChange (field) {
    return event => {
      let value = event.target.value
      let updateStateObj = {
        [field]: value
      }
      this.setState(updateStateObj)
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    let quizAppData = this.state
    this.props.onQuizAppChange(quizAppData)
  }

  getErrorForField (field) {
    if (!this.props.error) return ''
    return getErrorMessagesForField(this.props.error, field).join(' ')
  }

  toggleJoinCodeVisibility () {
    this.setState((state) => {
      return {
        joinCode: {
          ...state.joinCode,
          hidden: !state.joinCode.hidden
        }
      }
    })
  }

  handleNewCodeGenerate (e) {
    e.preventDefault()
    this.props.onQuizAppChange({
      joinCode: shortid.generate()
    })
  }

  render() {
    return (
      <div className="box">
        <h1>Details</h1>
        <form onSubmit={this.handleSubmit} className="form">
          <Input
            label="Name"
            type="text"
            className="input"
            placeholder='Put the name of the quiz app here.'
            value={this.state.name}
            onChange={this.handleFieldChange('name')}
            helpText="For example, you can put the name of the module you are teaching."
            error={this.getErrorForField('name')}
          />

          <Input
            label="Sub-domain"
            type="text"
            className="input"
            placeholder="Please enter a quiz app name to get the subdomain name here"
            value={this.state.subdomain}
            error={this.getErrorForField('subdomain')}
            readOnly
            addition={() => {
              return (
                <div className="input-addition">.some-domain.com</div>
              )
            }}
          />

          <Textarea
            label="Description"
            type="text"
            className="input"
            placeholder="Put a short description of the quiz app."
            value={this.state.description}
            onChange={this.handleFieldChange('description')}
            error={this.getErrorForField('description')}
          />

          <div className="controls">
            <button type="submit" className="button button-primary">Update</button>
          </div>
        </form>
      </div>
    )
  }
}

export default QuizDetailsForm
