import React, { Component } from "react"
import { connect } from "react-redux"
import { listQuizEngagements } from "actions/quizEngagements"
import { format } from "date-fns";
import { Link } from "react-router-dom"
import { groupBy } from 'lodash'
import QuizReleaseMarksButton from './QuizReleaseMarksButton'
import { quizess } from "../../../endpoints";

class QuizEngagements extends Component {
  componentWillMount () {
    this.props.listQuizEngagements()
  }

  getQuizEngagementsGrouped () {
    return groupBy(this.props.quizEngagements, (item) => {
      return item.student._id
    })
  }

  render() {
    let quizEngagementsGrouped = this.getQuizEngagementsGrouped()
    return (
      <div>
      <div className="title-header">
        <h1>Quiz Engagements <span className="subhead">({this.props.quizEngagements.length})</span></h1>
        <div className="controls">
          <QuizReleaseMarksButton quizId={this.props.quizId} quizAppId={this.props.quizAppId} />
          <a href={quizess.stats({quizAppId: this.props.quizAppId, quizId: this.props.quizId})} className="button button-pink button-small" target="_blank">Get Stats </a>
        </div>

      </div>
        <table className="table table-bordered table-small">
          <thead className="thead-dark">
            <tr>
              <td>Name</td>
              <td>Date</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {
              Object.keys(quizEngagementsGrouped).map((studentId) => {
                let quizEngagements = quizEngagementsGrouped[studentId]
                return quizEngagements.map((quizEngagement, quizEngagementIndex) => {
                  let student = quizEngagement.student
                  return (
                    <tr key={quizEngagement._id}>
                      {
                        quizEngagementIndex === 0
                        ? (
                          <td rowSpan={quizEngagements.length}>{student.name}</td>
                        ) : null
                      }
                      <td>
                        <span>{format(quizEngagement.finishedAt, 'DD/MM/YYYY HH:mm')}</span>
                        {
                          quizEngagement.marked
                          ? (
                            <span className="badge badge-success">marked</span>
                          ) : null
                        }
                      </td>
                      <td>
                        <Link
                          to={`/quiz-app/${this.props.quizAppId}/quiz/${this.props.quizId}/engagements/${quizEngagement._id}`}
                          className="button button-small button-primary"
                          >
                        Open
                        </Link>
                      </td>
                    </tr>
                  )
                })
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

let mapStateToProps = (state, props) => {
  let quizAppId = props.match.params.quizAppId
  let quizId = props.match.params.quizId
  let quiz = state.entities.quizess[quizId]
  return {
    quizAppId,
    quizId,
    quizEngagements: (quiz.quizEngagements || []).map(_id => state.entities.quizEngagements[_id]).filter(i => i)
  }
}

let mapDispatchToProps = (dispatch, props) => {
  let quizAppId = props.match.params.quizAppId
  let quizId = props.match.params.quizId
  return {
    listQuizEngagements: () => dispatch(listQuizEngagements({quizAppId, quizId})),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizEngagements)
