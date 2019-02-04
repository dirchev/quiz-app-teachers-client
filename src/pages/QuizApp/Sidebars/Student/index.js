import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

class StudentSidebar extends Component {
  render() {
    return (
      <div className="sidebar sidebar-secondary">
        <div className="account-info">
          <img className="photo" src="https://avatars0.githubusercontent.com/u/5685544?s=460&v=4" alt="profile of Dimitar Mirchev"/>
          <div className="names">
            {this.props.student.name}
          </div>
          <div className="smalltext">
            {this.props.student.email}
          </div>
        </div>
        <ul className="navigation">
          <li><Link to={`/quiz-app/${this.props.quizAppId}/students/${this.props.student._id}/profile`} className="navigation-item">Profile</Link></li>
        </ul>
      </div>
    )
  }
}
let mapStateToProps = (state, props) => {
  let quizAppId = props.match.params.quizAppId
  let studentId = props.match.params.studentId
  let student = state.entities.students[studentId]

  return {
    quizAppId: quizAppId,
    student: student
  }
}
export default connect(mapStateToProps)(StudentSidebar)
