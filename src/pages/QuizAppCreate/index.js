import React, { Component } from "react"
import slug from "slug"
import {createQuizApp} from 'actions/quizApps'
import { connect } from "react-redux"
import Input from 'components/Form/Input'
import Textarea from 'components/Form/Textarea'
import shortid from "shortid"
import { getErrorMessagesForField } from "utils/errorMessages"

class QuizAppCreate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      subdomain: '',
      description: '',
      joinCode: shortid.generate(),
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
      if (field === 'name') {
        updateStateObj.subdomain = slug(value).toLowerCase()
      }
      this.setState(updateStateObj)
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    let quizAppData = this.state
    this.props.onQuizAppCreate(quizAppData)
  }

  getErrorForField (field) {
    if (!this.props.error) return ''
    return getErrorMessagesForField(this.props.error, field).join(' ')
  }

  render() {
    return (
      <div className="container">
        <div className="box">
          <form onSubmit={this.handleSubmit} className="form">
            <h1>Quiz App Create</h1>
            <Input
              label="Quiz App Name"
              type="text"
              className="input"
              placeholder='Put the name of the quiz app here.'
              value={this.state.name}
              onChange={this.handleFieldChange('name')}
              helpText="For example, you can put the name of the module you are teaching."
              error={this.getErrorForField('name')}
            />

            <Input
              label="Quiz App Sub-domain"
              type="text"
              className="input"
              placeholder="Please enter a quiz app name to get the subdomain name here"
              value={this.state.subdomain}
              onChange={this.handleFieldChange('subdomain')}
              error={this.getErrorForField('subdomain')}
              addition={() => {
                return (
                  <div className="input-addition">.some-domain.com</div>
                )
              }}
            />

            <Textarea
              label="Quiz App Description"
              type="text"
              className="input"
              placeholder="Put a short description of the quiz app."
              value={this.state.description}
              onChange={this.handleFieldChange('description')}
              error={this.getErrorForField('description')}
            />

            <Input
              label="Quiz App Join Code"
              type="text"
              className="input"
              helpText="This code will be used by the students to register in the quiz app. It will be available to see later from the app settings."
              value={this.state.joinCode}
              onChange={this.handleFieldChange('joinCode')}
              error={this.getErrorForField('joinCode')}
              readOnly
            />

            <div className="controls">
              <button type="submit" className="button button-primary">Create</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

let mapStateToProps = function (state) {
  return {
    loading: state.loading.QUIZ_APPS_CREATE,
    error: state.error.QUIZ_APPS_CREATE
  }
}

let mapDispatchToProps = function (dispatch, props) {
  return {
    onQuizAppCreate: (quizAppData) => {
      dispatch(createQuizApp({quizApp: quizAppData, history: props.history}))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizAppCreate)
