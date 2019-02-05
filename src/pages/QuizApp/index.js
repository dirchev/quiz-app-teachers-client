import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"
import Navigation from "./Navigation"
import './index.scss'

import Dashboard from "./Dashboard"
import Students from "./Students"
import Teachers from "./Teachers"
import Settings from "./Settings"
import QuizForm from "./Quiz/QuizForm"

import StudentSidebar from "./Sidebars/Student"
import StudentProfile from "./StudentProfile"

class QuizApp extends Component {
  render() {
    return (
      <div>
        <Navigation match={this.props.match}/>
        <div className="teachers-container">
          <div className="main">
            <Route exact path={this.props.match.path} component={Dashboard} />
            <Route exact path={`${this.props.match.path}/students`} component={Students} />
            <Route exact path={`${this.props.match.path}/students/:studentId`} component={Students} />
            <Route path={`${this.props.match.path}/students/:studentId/profile`} component={StudentProfile} />
            <Route path={`${this.props.match.path}/teachers`} component={Teachers} />
            <Route path={`${this.props.match.path}/settings`} component={Settings} />

            <Switch>
              <Route path={`${this.props.match.path}/quiz/create`} component={QuizForm} />
              <Route path={`${this.props.match.path}/quiz/:quizId`} component={QuizForm} />
            </Switch>
          </div>
          <Route path={`${this.props.match.path}/students/:studentId`} component={StudentSidebar} />
        </div>
      </div>
    )
  }
}

export default QuizApp
