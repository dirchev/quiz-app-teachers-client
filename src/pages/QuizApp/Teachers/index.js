import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { listTeachers } from "../../../actions/teachers";
import AddTeacher from "./AddTeacher";

class Teachers extends Component {
  componentWillMount () {
    this.props.listTeachers()
  }
  render() {
    return (
      <div>
        <h1>Teachers <span className="subhead">({this.props.teachers.length})</span></h1>
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
              this.props.teachers.map((teacher) => {
                return (
                  <tr key={teacher._id}>
                    <td>
                    {teacher.name}
                    {
                      teacher._id === this.props.quizApp.owner
                      ? (<span>&nbsp;<span className="badge badge-primary">owner</span></span>)
                      : null
                    }
                    </td>
                    <td>{teacher.email}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        {
          this.props.quizApp.owner === this.props.currentUser._id
          ? (
            <AddTeacher quizAppId={this.props.quizAppId} />
          ) : null
        }
      </div>
    )
  }
}

let mapStateToProps = (state, props) => {
  let quizAppId = props.match.params.quizAppId
  let quizApp = state.entities.quizApps[quizAppId]
  return {
    currentUser: state.authentication.user,
    quizAppId: quizAppId,
    quizApp,
    teachers: quizApp.teachers.map(teacherId => state.entities.teachers[teacherId]).filter(i => i)
  }
}

let mapDispatchToProps = (dispatch, props) => {
  let quizAppId = props.match.params.quizAppId
  return {
    listTeachers: () => dispatch(listTeachers({quizAppId}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Teachers)
