import React, { Component } from "react"
import { connect } from "react-redux"
import { listStudents, removeStudent } from "actions/students"

class Students extends Component {
  constructor () {
    super()
    this.handleStudentRemove = this.handleStudentRemove.bind(this)
  }

  componentWillMount () {
    this.props.listStudents()
  }

  handleStudentRemove (student) {
    return e => {
      e.preventDefault()
      this.props.removeStudent(student._id)
    }
  }

  render() {
    return (
      <div>
        <h1>Students <span className="subhead">({this.props.students.length})</span></h1>
        <table className="table table-stripped">
          <thead className="thead-dark">
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {
              this.props.students.map((student) => {
                return (
                  <tr key={student._id}>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>
                      {
                        this.props.isCurrentUserOwner
                        ? (
                          <button
                            onClick={this.handleStudentRemove(student)}
                            className="button button-danger button-small"
                          >
                            Remove
                          </button>
                        ) : null
                      }
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

let mapStateToProps = (state, props) => {
  let quizAppId = props.match.params.quizAppId
  let quizApp = state.entities.quizApps[quizAppId]
  return {
    quizAppId: quizAppId,
    quizApp,
    isCurrentUserOwner: state.authentication.user._id === quizApp.owner,
    students: quizApp.students.map(studentId => state.entities.students[studentId]).filter(i => i)
  }
}

let mapDispatchToProps = (dispatch, props) => {
  let quizAppId = props.match.params.quizAppId
  return {
    listStudents: () => dispatch(listStudents({quizAppId})),
    removeStudent: (studentId) => dispatch(removeStudent({quizAppId, studentId}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Students)
