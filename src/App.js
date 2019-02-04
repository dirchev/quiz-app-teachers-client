import React, { Component } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import QuizApp from './pages/QuizApp';
import QuizAppCreate from './pages/QuizAppCreate'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Showcase from './pages/Showcase'
import Navigation from './components/Navigation'
import { Provider, connect } from 'react-redux'
import PrivateRoute from './components/PrivateRoute'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Showcase} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />

            {/* ProtectedRoutes */}
            <PrivateRoute exact path={['/dashboard', '/profile', '/quiz-app/create']} component={Navigation} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/profile" component={Profile} />

            {/* Quiz App */}
            <Switch>
              <PrivateRoute exact path="/quiz-app/create" component={QuizAppCreate} />
              <PrivateRoute path="/quiz-app/:quizAppId" component={QuizApp} />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
