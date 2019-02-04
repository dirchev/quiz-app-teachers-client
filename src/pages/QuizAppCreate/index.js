import React, { Component } from "react"
import slug from "slug"

class QuizAppCreate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      subdomain: '',
      description: '',
    }

    this.handleFieldChange = this.handleFieldChange.bind(this)
  }

  handleFieldChange (field) {
    return event => {
      let value = event.target.value
      let updateStateObj = {
        [field]: value
      }
      if (field === 'name') {
        updateStateObj.subdomain = slug(value)
      }
      this.setState(updateStateObj)
    }
  }

  render() {
    return (
      <div className="container">
        <div className="box">
          <div className="form">
            <h1>Quiz App Create</h1>
            <div className="form-field">
              <label className="label" htmlFor="quizAppName">Quiz App Name</label>
              <input
                className="input"
                placeholder="Put the name of the quiz app here."
                id="quizAppName"
                type="text"
                value={this.state.name}
                onChange={this.handleFieldChange('name')}
                />
              <div className="input-message">For example, you can put the name of the module you are teaching.</div>
            </div>
            <div className="form-field">
              <label className="label" htmlFor="quizAppLink">Quiz App Link</label>
              <div className="input-with-addition">
                <input
                  className="input"
                  id="quizAppLink"
                  type="text"
                  placeholder="Please enter a quiz app name to get the subdomain name here"
                  value={this.state.subdomain}
                  onChange={this.handleFieldChange('subdomain')}
                />
                <div className="input-addition">.some-domain.com</div>
              </div>
              <div className="input-message">This will be the link to provide to your students.</div>
            </div>
            <div className="form-field">
              <label className="label" htmlFor="quizAppDescription">Quiz App Description</label>
              <textarea
                className="input"
                placeholder="Put a short description of the quiz app."
                id="quizAppDescription"
                type="text"
                value={this.state.name}
                onChange={this.handleFieldChange('name')}
                />
            </div>
            <div className="controls">
              <button className="button button-primary">Create</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default QuizAppCreate
