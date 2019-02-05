import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { addTeacher } from "actions/teachers"
import { getAllErrorMessages } from "../../../utils/errorMessages";

class AddTeacher extends Component {
  constructor () {
    super()
    this.state = {
      email: ''
    }

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleEmailChange (e) {
    e.preventDefault()
    let value = e.target.value
    this.setState({
      email: value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.addTeacher(this.state.email)
  }
  render() {
    if (this.props.loading) {
      return (
        <div className="box box-small">
          Loading...
        </div>
      )
    }
    return (
      <div className="box box-small">
        {
          this.props.error
          ? (
            <div className="alert alert-danger">
              {getAllErrorMessages(this.props.error).join('. ')}
            </div>
          ) : null
        }
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form-field">
            <label htmlFor="teacherEmail" className="label">Add new teacher to the quiz app</label>
            <div className="input-with-addition">
              <input
                className="input"
                id="teacherEmail"
                type="text"
                placeholder="Please enter teacher email."
                value={this.state.email}
                onChange={this.handleEmailChange}
              />
              <button type="submit" className="input-addition">Add</button>
            </div>
            <div className="input-message">The email provided should already have a teacher registration.</div>
          </div>
        </form>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    loading: state.loading['TEACHER_ADD'],
    error: state.error['TEACHER_ADD']
  }
}

let mapDispatchToProps = (dispatch, props) => {
  let quizAppId = props.quizAppId
  return {
    addTeacher: (teacherEmail) => dispatch(addTeacher({quizAppId, teacherEmail}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTeacher)
