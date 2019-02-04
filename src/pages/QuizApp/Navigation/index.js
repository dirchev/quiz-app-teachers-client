import React, { Component } from "react"
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";

class Navigation extends Component {
  render() {
    return (
      <div className="navbar navbar-primary">
        <div className="home">
          <Link to="/dashboard" className="home-button">Quiz Apps</Link>
        </div>
        <div className="center">
          {this.props.quizApp.name}
        </div>
        <div className="right navbar-items">
          <NavLink exact to={`/quiz-app/${this.props.quizApp._id}`} activeClassName="active" className="navbar-item">Home</NavLink>
          <NavLink to={`/quiz-app/${this.props.quizApp._id}/students`} activeClassName="active" className="navbar-item">Students</NavLink>
          <NavLink to={`/quiz-app/${this.props.quizApp._id}/teachers`} activeClassName="active" className="navbar-item">Teachers</NavLink>
          <NavLink to={`/quiz-app/${this.props.quizApp._id}/settings`} activeClassName="active" className="navbar-item">Settings</NavLink>
        </div>
      </div>
    )
  }
}

let mapStateToProps = (state, props) => {
  let quizAppId = props.match.params.quizAppId
  let quizApp = state.entities.quizApps[quizAppId]
  return {
    quizApp: quizApp
  }
}

export default connect(mapStateToProps)(Navigation)
