import React, { Component } from "react"
import './index.scss'
import QuizQuestions from "./QuizQuestions";
import QuizSettings from "./QuizSettings";
import { updateQuiz, saveQuiz, deleteQuiz } from "actions/quiz";
import initNewQuiz from "actions/initNewQuiz";
import { connect } from "react-redux";

const DEFAULT_QUIZ_STRUCTURE = {
  _id: 'new',
  name: 'Unnamed Quiz',
  description: '',
  noOfAttempts: 0,
  isMandatory: false,
  deadline: '',
  timeLimit: 0,
  questions: []
}

class QuizForm extends Component {
  constructor (props) {
    super(props)
    this.handleQuestionsChange = this.handleQuestionsChange.bind(this)
    this.handleQuizChange = this.handleQuizChange.bind(this)
    this.handleQuizSave = this.handleQuizSave.bind(this)
  }

  handleQuestionsChange (newQuestions) {
    this.handleQuizChange({questions: newQuestions})
  }

  handleQuizChange (newQuiz) {
    this.props.onQuizChange({
      ...this.props.quiz,
      ...newQuiz
    })
  }

  componentWillMount () {
    if (this.props.quiz._id === 'new') {
      this.props.onInitNewQuiz(this.props.quiz, this.props.quizAppId)
    }
  }

  handleQuizSave () {
    this.props.onQuizSave(this.props.quiz)
  }

  render() {
    return (
      <div className="quiz-create">
        <QuizSettings
          quiz={this.props.quiz}
          onQuizChange={this.handleQuizChange}
          onQuizSave={this.handleQuizSave}
          onQuizDelete={this.props.onQuizDelete}
        />
        <QuizQuestions
          questions={this.props.quiz.questions}
          onQuestionsChange={this.handleQuestionsChange}
        />
      </div>
    )
  }
}

let mapStateToProps = (state, props) => {
  let quizAppId = props.match.params.quizAppId
  let quizId = props.match.params.quizId || 'new'
  let quiz
  if (!state.entities.quizess[quizId]) {
    quiz = DEFAULT_QUIZ_STRUCTURE
    quiz.quizAppId = quizAppId
  } else {
    quiz = state.entities.quizess[quizId]
  }

  return {
    quizAppId: quizAppId,
    quiz: quiz,
  }
}

let mapDispatchToProps = (dispatch, props) => {
  let quizAppId = props.match.params.quizAppId
  let quizId = props.match.params.quizId
  let onQuizDelete

  if (quizId) {
    onQuizDelete =() => {
      dispatch(deleteQuiz({quizId, quizAppId, history: props.history}))
    }
  }

  return {
    onQuizChange: (newQuizData) => {
      dispatch(updateQuiz({quiz: newQuizData, quizAppId, history: props.history}))
    },
    onInitNewQuiz: (quizData, quizAppId) => {
      dispatch(initNewQuiz(quizData, quizAppId))
    },
    onQuizSave: (quizData) => {
      dispatch(saveQuiz({quiz: quizData, quizAppId, history: props.history}))
    },
    onQuizDelete: onQuizDelete
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizForm)
