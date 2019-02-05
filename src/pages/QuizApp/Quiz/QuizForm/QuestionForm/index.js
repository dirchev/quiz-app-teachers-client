import React, { Component } from "react"
import './index.scss'

import MultipleChoiceAnswersForm from './AnswersForm/MultipleChoice'

class Question extends Component {
  constructor (props) {
    super(props)

    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleAnswersChange = this.handleAnswersChange.bind(this)
  }

  handleAnswersChange (newAnswers) {
    this.emitQuestionChange({
      answers: newAnswers
    })
  }

  handleFieldChange (field) {
    return event => {
      let value = event.target.value
      this.emitQuestionChange({
        [field]: value
      })
    }
  }

  emitQuestionChange (updatedQuestion) {
    this.props.onQuestionChange({
      ...this.props,
      ...updatedQuestion
    })
  }

  render () {
    return (
      <div>
        <h3 className="m-none">Question</h3>
        <form className="form">
          <div className="form-field">
            <label className="label" htmlFor="questiontitle">Question Title</label>
            <input
              className="input"
              placeholder="Put question title here"
              id="questiontitle"
              type="text"
              onChange={this.handleFieldChange('title')}
              value={this.props.title}
              />
          </div>
          <div className="form-field">
            <label className="label" htmlFor="questionContent">Question Content</label>
            <textarea
              className="input"
              placeholder="Put the content of the question."
              id="questionContent"
              type="text"
              onChange={this.handleFieldChange('content')}
              value={this.props.content}
              />
            <div className="input-message">Put the actual question that has to be answered here.</div>
          </div>
          <hr/>
          <MultipleChoiceAnswersForm answers={this.props.answers} onAnswersChange={this.handleAnswersChange} />
        </form>
      </div>
    )
  }
}

Question.defaultProps = {
  title: '',
  content: '',
  answers: []
}

export default Question
