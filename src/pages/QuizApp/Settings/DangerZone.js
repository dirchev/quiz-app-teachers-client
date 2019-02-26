import React, { Component } from "react"

class DangerZone extends Component {
  constructor () {
    super()
    this.handleDeleteQuizApp = this.handleDeleteQuizApp.bind(this)
  }

  handleDeleteQuizApp (e) {
    e.preventDefault()
    this.props.onQuizAppDelete()
  }

  render() {
    return (
      <div className="box danger">
        <h1>Danger Zone</h1>
        <div className="alert alert-danger">
          <h2>Delete Application</h2>
          <p>
            <strong>This can not be undone!</strong> This action will permanently delete the app, quizess and their associated data.
          </p>
          <div className="controls">
            <button type="button" onClick={this.handleDeleteQuizApp} className="button button-danger button-small">Delete Quiz App</button>
          </div>
        </div>
      </div>
    )
  }
}

export default DangerZone
