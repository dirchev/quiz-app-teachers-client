import React, { Component } from "react"
import {connect} from 'react-redux'
import JoinCodeForm from "./JoinCodeForm"
import QuizDetailsForm from "./QuizDetailsForm"
import { updateQuizApp, deleteQuizApp } from "actions/quizApps"
import DangerZone from "./DangerZone";
import { quizApps } from "../../../endpoints";

class Settings extends Component {
  constructor () {
    super()
    this.state = {
      joinCode: {
        hidden: true
      }
    }

    this.handleQuizAppChange = this.handleQuizAppChange.bind(this)
    this.handleQuizAppDelete = this.handleQuizAppDelete.bind(this)
  }

  handleQuizAppChange (newQuizAppData) {
    this.props.updateQuizApp(newQuizAppData)
  }

  handleQuizAppDelete () {
    this.props.deleteQuizApp()
  }

  render() {
    return (
      <div className="container">
        <h1>Quiz App Settings</h1>
        <a
          download
          target="_blank"
          rel="noopener noreferrer"
          className="button button-orange"
          href={quizApps.userTests({quizAppId: this.props.quizApp._id})}
          >
          Download User Tests Data
        </a>
        <QuizDetailsForm
          quizApp={this.props.quizApp}
          onQuizAppChange={this.handleQuizAppChange}
          error={this.props.error}
          loading={this.props.loading}
        />
        <hr/>
        <JoinCodeForm
          quizApp={this.props.quizApp}
          onQuizAppChange={this.handleQuizAppChange}
          error={this.props.error}
          loading={this.props.loading}
        />
        <hr/>
        <DangerZone
          quizApp={this.props.quizApp}
          onQuizAppDelete={this.handleQuizAppDelete}
        />
      </div>
    )
  }
}

let mapStateToProps = (state, props) => {
  let quizAppId = props.match.params.quizAppId
  let quizApp = state.entities.quizApps[quizAppId]
  return {
    error: state.error.QUIZ_APPS_UPDATE,
    loading: state.loading.QUIZ_APPS_UPDATE,
    quizAppId: quizAppId,
    quizApp,
    isCurrentUserOwner: state.authentication.user._id === quizApp.owner,
  }
}

let mapDispatchToProps = (dispatch, props) => {
  let quizAppId = props.match.params.quizAppId
  return {
    updateQuizApp: (newQuizAppData) => dispatch(updateQuizApp({
      newQuizAppData,
      quizAppId
    })),
    deleteQuizApp: () => dispatch(deleteQuizApp({quizAppId, history: props.history})),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
