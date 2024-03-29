import React, { Component } from "react"
import './index.scss'
import uuid from 'uuid'

import QuestionForm from "./QuestionForm/index.js"

const DEFAULT_NEW_QUESTION = {
  title: "",
  content: "",
  defaultFeedback: "",
  points: 10
}

class QuizQuestions extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedQuestionIndex: 0
    }

    this.addNewQuestion = this.addNewQuestion.bind(this)
    this.handleQuestionChange = this.handleQuestionChange.bind(this)
  }

  selectQuestion (index) {
    return (e) => {
      e.preventDefault()
      this.setState({
        selectedQuestionIndex: index
      })
    }
  }

  getSelectedQuestion () {
    return this.props.questions[this.state.selectedQuestionIndex]
  }


  addNewQuestion () {
    this.props.onQuestionsChange([
      ...this.props.questions,
      {
        ...DEFAULT_NEW_QUESTION,
        _id: uuid.v4()
      }
    ])
  }

  handleQuestionChange (newQuestionData) {
    this.props.onQuestionsChange([
      ...this.props.questions.slice(0, this.state.selectedQuestionIndex),
      newQuestionData,
      ...this.props.questions.slice(this.state.selectedQuestionIndex + 1)
    ])
  }

  render() {
    return (
      <div className="quiz-create-questions">
        <div className="tabs">
          <div className="tabs-navigation">
            {
              this.props.questions.map((question, index) => {
                let isActive = index === this.state.selectedQuestionIndex
                return (
                  <button
                    key={index}
                    className={`tabs-navigation-item ${isActive ? 'active' : ''}`}
                    onClick={this.selectQuestion(index)}
                  >
                    Question {index + 1}
                  </button>
                )
              })
            }
          </div>
          <div className="tabs-buttons">
            <button className="tabs-buttons-item primary" onClick={this.addNewQuestion}>Add question</button>
          </div>
          <div className="tabs-content">
            <QuestionForm {...this.getSelectedQuestion()} onQuestionChange={this.handleQuestionChange} />
          </div>
        </div>
      </div>
    )
  }
}

export default QuizQuestions
