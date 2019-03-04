import React, { Component } from "react"
import { Link } from "react-router-dom"
import './index.scss'
import { connect } from "react-redux";
import { loadQuizess, publishQuiz } from "actions/quiz"

class Dashboard extends Component {
  constructor () {
    super()

    this.handlePublishQuiz = this.handlePublishQuiz.bind(this)
    this.renderQuiz = this.renderQuiz.bind(this)
  }
  componentWillMount () {
    this.props.listQuizess()
  }

  handlePublishQuiz (quizId) {
    return (e) => {
      e.preventDefault()
      this.props.publishQuiz(quizId)
    }
  }

  render() {
    return (
      <div>
        <h1>Quizzes</h1>
        <Link to={`/quiz-app/${this.props.match.params.quizAppId}/quiz/create`} className="button button-primary">Create new...</Link>
        <div className="quizess-list">
          {
            this.props.quizess.map(this.renderQuiz)
          }
        </div>
      </div>
    )
  }

  renderQuiz (quiz) {
    return (
      <div key={quiz._id} className="assessment-card">
        <div className="title">{quiz.name}</div>
        <div className="info">
          {
            quiz.isMandatory
            ? <div className="info-item yellow">Mandatory</div>
            : null
          }
          {
            quiz.published
            ? <div className="info-item green">Published</div>
            : <div className="info-item danger">Not Published</div>
          }
          <div className="info-item primary">{quiz.noOfAttempts || 'unlimited'} attempts</div>
        </div>
        <div className="description">
          {quiz.description}
        </div>
        <div className="controls">
          {
            quiz.published
            ? (
              <Link to={`/quiz-app/${this.props.quizAppId}/quiz/${quiz._id}/engagements`} className="button button-grey button-small button-outline">View attempts</Link>
            )
            : (
              <button onClick={this.handlePublishQuiz(quiz._id)} className="button button-primary button-small button-outline">Publish</button>
            )
          }
          <Link to={`/quiz-app/${this.props.quizAppId}/quiz/${quiz._id}`} className="button button-blue button-small">Edit Quiz</Link>
        </div>
      </div>
    )
  }
}

let mapStateToProps = (state, props) => {
  let quizAppId = props.match.params.quizAppId
  return {
    quizAppId: quizAppId,
    quizess: (state.entities.quizApps[quizAppId].quizess || []).map(quizId => state.entities.quizess[quizId]).filter(i => i),
  }
}

let mapDispatchToProps = (dispatch, props) => {
  let quizAppId = props.match.params.quizAppId
  return {
    listQuizess: () => dispatch(loadQuizess({quizAppId})),
    publishQuiz: (quizId) => dispatch(publishQuiz({quizId, quizAppId}))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
