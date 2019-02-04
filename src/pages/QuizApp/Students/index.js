import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

class Students extends Component {
  render() {
    return (
      <div>
        <h1>Students <span className="subhead">({this.props.students.length})</span></h1>
        <table className="table table-stripped">
          <thead className="thead-dark">
            <tr>
              <td>#</td>
              <td>Name</td>
              <td>Email</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {
              this.props.students.map((student) => {
                return (
                  <tr>
                    <td>{student._id}</td>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>
                      <Link to={`/quiz-app/${this.props.quizAppId}/students/${student._id}`} className="button button-small button-primary">Open</Link>
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
    students: quizApp.students.map(studentId => state.entities.students[studentId]).filter(i => i)
  }
}


export default connect(mapStateToProps)(Students)
