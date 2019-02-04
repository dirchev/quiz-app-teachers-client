import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

class TeacherSidebar extends Component {
  render() {
    return (
      <div className="sidebar sidebar-primary">
        <div className="account-info">
          <img className="photo" src="https://avatars0.githubusercontent.com/u/5685544?s=460&v=4" alt="profile of Dimitar Mirchev"/>
          <div className="names">
            {this.props.teacher.name}
          </div>
          <div className="smalltext">
            {this.props.teacher.email}
          </div>
        </div>
        <ul className="navigation">
          <li><Link to={`/quiz-app/${this.props.quizAppId}/teachers/${this.props.teacher._id}/profile`} className="navigation-item">Profile</Link></li>
        </ul>
      </div>
    )
  }
}
let mapStateToProps = (state, props) => {
  let quizAppId = props.match.params.quizAppId
  let teacherId = props.match.params.teacherId
  let teacher = state.entities.teachers[teacherId]

  return {
    quizAppId: quizAppId,
    teacher: teacher
  }
}
export default connect(mapStateToProps)(TeacherSidebar)
