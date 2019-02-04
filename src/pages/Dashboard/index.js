import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { loadQuizApps as loadQuizAppsAction } from 'actions/quizApps'
import "./index.scss"

class Dashboard extends Component {
  componentWillMount () {
    this.props.loadQuizApps()
  }

  render() {
    return (
      <div className="container">
        <div className="title-header">
          <h1>My Quiz Applications</h1>
          <Link to="/quiz-app/create" className="button button-primary">Create...</Link>
        </div>
        <div className="quiz-apps-listing">
          {
            this.props.quizApps.map((item) => {
              return (
                <Link key={item._id} to={"/quiz-app/" + item._id} className="tile tile-primary">
                  <h2>{item.name}</h2>
                </Link>
              )
            })
          }
        </div>
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    loading: state.loading['QUIZ_APPS'],
    error: state.error['QUIZ_APPS'],
    quizApps: state.quizApps.map(id => state.entities.quizApps[id])
  }
}

let mapDispatchToProps = dispatch => {
  return {
    loadQuizApps: () => dispatch(loadQuizAppsAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
