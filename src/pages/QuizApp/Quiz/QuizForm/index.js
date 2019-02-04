import React, { Component } from "react"
import './index.scss'
import QuizQuestions from "./QuizQuestions";
import QuizSettings from "./QuizSettings";
import updateQuiz from "actions/updateQuiz";
import initNewQuiz from "actions/initNewQuiz";
import { connect } from "react-redux";

const DEFAULT_QUIZ_STRUCTURE = {
  id: 'new',
  name: 'Programming 1',
  description: '',
  noOfAttempts: 0,
  isMandatory: false,
  deadline: '',
  questions: [
    {
      id: 1,
      title: 'OOP Fundamentals',
      content: 'Describe the three principles of object orientated programming',
      type: 'multiple-choice',
      anwsers: []
    },
    {
      id: 2,
      title: 'Abstract & Interface',
      content: 'Describe what is the difference between abstract classes and interfaces',
      type: 'multiple-choice',
      answers: [
        { text: 'a', points: 1 },
        { text: 'b', points: 5 },
        { text: 'c', points: 0 }
      ]
    }
  ]
}

class QuizForm extends Component {
  constructor (props) {
    super(props)
    this.handleQuestionsChange = this.handleQuestionsChange.bind(this)
    this.handleQuizChange = this.handleQuizChange.bind(this)
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

  render() {
    return (
      <div className="quiz-create">
        <QuizSettings quiz={this.props.quiz} onQuizChange={this.handleQuizChange} />
        <QuizQuestions questions={this.props.quiz.questions} onQuestionsChange={this.handleQuestionsChange} />
      </div>
    )
  }
}

let mapStateToProps = (state, props) => {
  let quizAppId = props.match.params.quizAppId
  let quizId = props.match.params.quizId || 'new'
  let quiz
  if (!state.entities.quizzes[quizId]) {
    quiz = DEFAULT_QUIZ_STRUCTURE
    quiz.quizAppId = quizAppId
  } else {
    quiz = state.entities.quizzes[quizId]
  }

  return {
    quizAppId: quizAppId,
    quiz: quiz,
  }
}

let mapDispatchToProps = (dispatch, props) => {
  return {
    onQuizChange: (newQuizData) => {
      dispatch(updateQuiz(newQuizData))
    },
    onInitNewQuiz: (quizData, quizAppId) => {
      dispatch(initNewQuiz(quizData, quizAppId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizForm)
