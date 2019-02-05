import React, { Component } from "react"
import { connect } from "react-redux"
import { listTeachers, removeTeacher } from "actions/teachers"
import AddTeacher from "./AddTeacher"

class Teachers extends Component {
  componentWillMount () {
    this.props.listTeachers()
    this.handleTeacherRemove = this.handleTeacherRemove.bind(this)
  }

  handleTeacherRemove (teacher) {
    return e => {
      e.preventDefault()
      this.props.removeTeacher(teacher._id)
    }
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
                    <td>
                      {
                        this.props.isCurrentUserOwner
                        ? (
                          <button
                            onClick={this.handleTeacherRemove(teacher)}
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
        <hr/>
        {
          this.props.isCurrentUserOwner
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
    quizAppId: quizAppId,
    quizApp,
    isCurrentUserOwner: state.authentication.user._id === quizApp.owner,
    teachers: quizApp.teachers.map(teacherId => state.entities.teachers[teacherId]).filter(i => i)
  }
}

let mapDispatchToProps = (dispatch, props) => {
  let quizAppId = props.match.params.quizAppId
  return {
    listTeachers: () => dispatch(listTeachers({quizAppId})),
    removeTeacher: (teacherId) => dispatch(removeTeacher({quizAppId, teacherId}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Teachers)
