import React, { Component } from "react"
import { Link } from "react-router-dom"
import './index.scss'
import { connect } from "react-redux";
import { loadQuizess } from "actions/quiz"

class Dashboard extends Component {
  constructor () {
    super()

    this.renderQuiz = this.renderQuiz.bind(this)
  }
  componentWillMount () {
    this.props.listQuizess()
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
        {/* <div className="stats">
          {
            quiz.stats.completions
            ? (
              <Link to="/quiz1" className="stats-item">
                <div className="name">Completions</div>
                <div className="value">{quiz.stats.completions.value} / {quiz.stats.completions.total}</div>
              </Link>
            ) : null
          }
          {
            quiz.stats.averageMark
            ? (
              <div className="stats-item">
                <div className="name">Average Mark</div>
                <div className="value">{quiz.stats.averageMark}</div>
              </div>
            ) : null
          }
          {
            quiz.stats.needsGrading
            ? (
              <Link to="/somethiungs" className="stats-item">
                <div className="name">Not Graded Attempts</div>
                <div className="value">{quiz.stats.needsGrading}</div>
              </Link>
            ) : null
          }
        </div> */}
        <div className="controls">
          <button className="button button-grey button-small button-outline">View attempts</button>
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
    listQuizess: () => dispatch(loadQuizess({quizAppId}))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
