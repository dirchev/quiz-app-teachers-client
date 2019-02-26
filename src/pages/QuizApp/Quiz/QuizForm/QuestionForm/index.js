import React, { Component } from "react"
import './index.scss'
import uuid from 'uuid'

import MultipleChoiceQuestionMultipleCorrect from './AnswersForm/MultipleChoiceQuestionMultipleCorrect'
import MultipleChoiceQuestionOneCorrect from './AnswersForm/MultipleChoiceQuestionOneCorrect'
import Input from "components/Form/Input";
import Select from "components/Form/Select";
import Textarea from "components/Form/Textarea";
import FreeShortText from "./AnswersForm/FreeShortText";
import FreeLongText from "./AnswersForm/FreeLongText";

const QUESTION_TYPE_OPTIONS = [
  {
    value: 'MCQ_MULTIPLE_RIGHT',
    label: 'Multiple Choice Question with Multiple Right Answers'
  },
  {
    value: 'MCQ_ONE_RIGHT',
    label: 'Multiple Choice Question with One Right Answer'
  },
  {
    value: 'FREE_SHORT_TEXT',
    label: 'Free short text'
  },
  {
    value: 'FREE_LONG_TEXT',
    label: 'Free long text'
  },
]

class Question extends Component {
  constructor (props) {
    super(props)

    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleAnswersChange = this.handleAnswersChange.bind(this)
  }

  handleAnswersChange (newAnswers) {
    this.emitQuestionChange({
      answers: newAnswers
    })
  }

  handleFieldChange (field) {
    return event => {
      let value = event.target.value
      let change = {
        [field]: value
      }
      if (field === 'type') {
        change.answers = undefined
      }
      this.emitQuestionChange(change)
    }
  }

  componentDidCatch () {
    this.emitQuestionChange({
      answers: undefined
    })
  }

  emitQuestionChange (updatedQuestion) {
    this.props.onQuestionChange({
      ...this.props,
      ...updatedQuestion
    })
  }

  render () {
    return (
      <div>
        <h3 className="m-none">Question</h3>
        <form className="form">
          <Input
            label="Question Title"
            placeholder="Put question title here"
            type="text"
            onChange={this.handleFieldChange('title')}
            value={this.props.title}
            />
          <Textarea
            label="Question Content"
            placeholder="Put the content of the question here"
            onChange={this.handleFieldChange('content')}
            value={this.props.content}
            helpText="Put the actual question that has to be answered here."
          />
          <Input
            label="Points"
            type="number"
            min={0}
            max={100}
            step={1}
            placeholder="Put max number of points to be given for this question"
            onChange={this.handleFieldChange('points')}
            value={this.props.points}
          />
          <Select
            label="Question Type"
            placeholder="Select question type."
            onChange={this.handleFieldChange('type')}
            value={this.props.type}
            options={QUESTION_TYPE_OPTIONS}
            helpText="Depending on the question type, answers will be presented differently"
          />
          <hr/>
          {
            this.renderAnswersForm()
          }
        </form>
      </div>
    )
  }

  renderAnswersForm () {
    if (this.props.type === 'MCQ_MULTIPLE_RIGHT') {
      return <MultipleChoiceQuestionMultipleCorrect answers={this.props.answers} onAnswersChange={this.handleAnswersChange} />
    } else if (this.props.type === 'MCQ_ONE_RIGHT') {
      return <MultipleChoiceQuestionOneCorrect answers={this.props.answers} onAnswersChange={this.handleAnswersChange} />
    } else if (this.props.type === 'FREE_SHORT_TEXT') {
      return <FreeShortText />
    } else if (this.props.type === 'FREE_LONG_TEXT') {
      return <FreeLongText />
    }
    return null
  }
}

Question.defaultProps = {
  _id: uuid.v4(),
  title: '',
  content: '',
  type: '',
  points: 0,
}

export default Question
