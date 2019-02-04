import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

class Teachers extends Component {
  render() {
    return (
      <div>
        <h1>Teachers <span className="subhead">({this.props.teachers.length})</span></h1>
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
              this.props.teachers.map((teacher) => {
                return (
                  <tr>
                    <td>{teacher._id}</td>
                    <td>{teacher.name}</td>
                    <td>{teacher.email}</td>
                    <td>
                      <Link to={`/quiz-app/${this.props.quizAppId}/teachers/${teacher._id}`} className="button button-small button-primary">Open</Link>
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
    teachers: quizApp.teachers.map(teacherId => state.entities.teachers[teacherId]).filter(i => i)
  }
}

export default connect(mapStateToProps)(Teachers)
