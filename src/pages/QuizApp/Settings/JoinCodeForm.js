import React, { Component } from "react"
import Input from "components/Form/Input"
import shortid from "shortid"

class JoinCodeForm extends Component {
  constructor () {
    super()
    this.state = {
      joinCode: {
        hidden: true
      }
    }

    this.handleNewCodeGenerate = this.handleNewCodeGenerate.bind(this)
    this.toggleJoinCodeVisibility = this.toggleJoinCodeVisibility.bind(this)
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
        <h1>Access</h1>
        <div className="form">
          <Input
            label="Join Code"
            type={this.state.joinCode.hidden ? 'password' : 'text'}
            className="input"
            helpText="This code must be used by the students to register in the quiz app."
            value={this.props.quizApp.joinCode}
            readOnly
            addition={() => {
              return (
                <button
                  type="button"
                  onClick={this.toggleJoinCodeVisibility}
                  className="input-addition button button-primary button-small"
                >
                  {this.state.joinCode.hidden ? 'Show' : 'Hide'}
                </button>
              )
            }}
          />
          <div className="alert alert-danger">
            Generating new join code will make the old one invalid.
            Students using the old join code will not be able to register. They will still be able to log in.
          </div>
          <div className="controls">
            <button type="button" onClick={this.handleNewCodeGenerate} className="button button-primary">Generate New Join Code</button>
          </div>
        </div>
      </div>
    )
  }
}

export default JoinCodeForm
