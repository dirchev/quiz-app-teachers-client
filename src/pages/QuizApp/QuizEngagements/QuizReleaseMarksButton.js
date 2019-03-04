import React, { Component } from "react"
import { connect } from "react-redux"
import { quizReleaseMarks } from "actions/quiz"

class QuizReleaseMarksButton extends Component {
  constructor() {
    super()
    this.handleReleaseMarks = this.handleReleaseMarks.bind(this)
  }
  handleReleaseMarks(e) {
    e.preventDefault()
    this.props.quizReleaseMarks()
  }

  render() {
    if (this.props.loading) {
      return (
        <span className="badge badge-yellow">
          Loading...
       </span>
      )
    }
    if (this.props.quiz.marksReleased) {
      return (
        <span className="badge badge-success">
          Marks are released!
        </span>
      )
    }
    return (
      <button onClick={this.handleReleaseMarks} className="button button-primary button-small">Release Marks</button>
    )
  }
}

let mapStateToProps = (state, props) => {
  let quizId = props.quizId
  let quiz = state.entities.quizess[quizId]
  return {
    quiz,
    loading: state.loading.QUIZ_RELEASE_MARKS
  }
}

let mapDispatchToProps = (dispatch, props) => {
  let quizAppId = props.quizAppId
  let quizId = props.quizId
  return {
    quizReleaseMarks: () => dispatch(quizReleaseMarks({ quizAppId, quizId })),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizReleaseMarksButton)
