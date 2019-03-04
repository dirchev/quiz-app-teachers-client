import React, { Component } from "react"
import { connect } from "react-redux"
import { updateQuizEngagement, finishQuizEngagementMarking } from "actions/quizEngagements"
import { format } from "date-fns";
import { Link } from 'react-router-dom'
import Input from "components/Form/Input"
import Textarea from "components/Form/Textarea"
import MultilineText from "components/MultilineText"

import MultipleChoiceQuestionMultipleCorrect from "./QuizEngagementsAnswers/MultipleChoiceQuestionMultipleCorrect";
import MultipleChoiceQuestionOneCorrect from "./QuizEngagementsAnswers/MultipleChoiceQuestionOneCorrect";
import FreeShortText from "./QuizEngagementsAnswers/FreeShortText";
import FreeLongText from "./QuizEngagementsAnswers/FreeLongText";

class QuizEngagement extends Component {
  constructor() {
    super()
    this.state = {
      initiatedMakingFinish: false
    }
    this.getFeedbackForQuestion = this.getFeedbackForQuestion.bind(this)
    this.setFeedbackForQuestion = this.setFeedbackForQuestion.bind(this)
    this.getMarkForQuestion = this.getMarkForQuestion.bind(this)
    this.setMarkForQuestion = this.setMarkForQuestion.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleFinishMarking = this.handleFinishMarking.bind(this)
  }

  handleUpdate(newData) {
    this.props.updateQuizEngagement({
      ...this.props.quizEngagement,
      ...newData
    })
  }

  handleFinishMarking () {
    this.setState({initiatedMakingFinish: true})
    this.props.finishQuizEngagementMarking()
  }

  getFeedbackForQuestion(questionId) {
    if (!this.props.quizEngagement.answersFeedbacks) return ''
    return this.props.quizEngagement.answersFeedbacks[questionId] || ''
  }

  setFeedbackForQuestion(questionId) {
    return (e) => {
      let feedbackValue = e.target.value
      this.handleUpdate({
        answersMarks: this.props.quizEngagement.answersMarks,
        answersFeedbacks: {
          ...this.props.quizEngagement.answersFeedbacks,
          [questionId]: feedbackValue
        }
      })
    }
  }

  getMarkForQuestion(questionId) {
    if (!this.props.quizEngagement.answersMarks) return ''
    return this.props.quizEngagement.answersMarks[questionId] || ''
  }

  setMarkForQuestion(questionId) {
    return (e) => {
      let markValue = e.target.value
      this.handleUpdate({
        answersFeedbacks: this.props.quizEngagement.answersFeedbacks,
        answersMarks: {
          ...this.props.quizEngagement.answersMarks,
          [questionId]: markValue
        }
      })
    }
  }

  render() {
    if (this.state.initiatedMakingFinish && this.props.quizEngagement.finished) {
      return (
        <div className="container">
          <div className="alert alert-success">
            Marks were saved sucessfully. <br/>
            <Link to={`/quiz-app/${this.props.quizApp._id}/quiz/${this.props.quiz._id}/engagements`} className="alert-link">Back to all marks</Link>
          </div>
        </div>
      )
    }
    return (
      <div className="quiz-engagement">
        <h1>
          Quiz Engagement <br />
          <span className="subhead">
            {this.props.quizEngagement.student.name + ' - ' + format(this.props.quizEngagement.finishedAt, 'DD/MM/YYYY HH:mm')}
          </span>
        </h1>
        {
          this.props.quiz.questions.map((question, index) => {
            let answerGiven = this.props.quizEngagement.answersGiven[question._id]
            return (
              <div className="item" key={question._id}>
                <h3 className="question-title">{question.title || 'Question ' + (index + 1)}</h3>
                <div className="question-content">
                  <MultilineText text={question.content} />
                </div>
                {this.renderQuestionAnswers(question, answerGiven)}
                <div className="form marking-form">
                  <Input
                    label="Mark"
                    type="number"
                    min={0}
                    max={question.points}
                    step={1}
                    className="input"
                    placeholder='Give mark for this question'
                    value={this.getMarkForQuestion(question._id)}
                    onChange={this.setMarkForQuestion(question._id)}
                  />
                  <Textarea
                    label="Feedback"
                    className="input"
                    placeholder='Provide the student with a feedback for this question'
                    value={this.getFeedbackForQuestion(question._id)}
                    onChange={this.setFeedbackForQuestion(question._id)}
                  />
                </div>
              </div>
            )
          })
        }
        <button className="button button-primary" onClick={this.handleFinishMarking}>Finish Marking</button>
      </div>
    )
  }

  renderQuestionAnswers(question, answerGiven) {
    if (question.type === 'MCQ_MULTIPLE_RIGHT') {
      return <MultipleChoiceQuestionMultipleCorrect answerGiven={answerGiven} question={question} />
    } else if (question.type === 'MCQ_ONE_RIGHT') {
      return <MultipleChoiceQuestionOneCorrect answerGiven={answerGiven} question={question} />
    } else if (question.type === 'FREE_SHORT_TEXT') {
      return <FreeShortText answerGiven={answerGiven} question={question} />
    } else if (question.type === 'FREE_LONG_TEXT') {
      return <FreeLongText answerGiven={answerGiven} question={question} />
    }
    return null
  }
}

let mapStateToProps = (state, props) => {
  let quizAppId = props.match.params.quizAppId
  let quizId = props.match.params.quizId
  let quizApp = state.entities.quizApps[quizAppId]
  let quiz = state.entities.quizess[quizId]
  let quizEngagementId = props.match.params.quizEngagementId
  return {
    quizApp,
    quiz,
    quizEngagement: state.entities.quizEngagements[quizEngagementId]
  }
}

let mapDispatchToProps = (dispatch, props) => {
  let quizAppId = props.match.params.quizAppId
  let quizId = props.match.params.quizId
  let quizEngagementId = props.match.params.quizEngagementId
  return {
    updateQuizEngagement: (quizEngagement) => dispatch(updateQuizEngagement({ quizAppId, quizId, quizEngagement })),
    finishQuizEngagementMarking: () => dispatch(finishQuizEngagementMarking({ quizAppId, quizId, quizEngagementId })),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizEngagement)
