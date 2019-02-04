import React, { Component } from "react";
import {Link} from 'react-router-dom';
import { connect } from "react-redux"
import registerAction from 'actions/register'
import Input from 'components/Form/Input'

class RegisterForm extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  getErrorForField (field) {
    if (!this.props.registerStatus.error) return ''
    let errors = []
    for (let error of this.props.registerStatus.error) {
      if (error.path === field) errors.push(error.message)
    }
    return errors.join('. ')
  }

  handleChange (field) {
    return (event) => {
      let value = event.target.value
      this.setState({
        [field]: value
      })
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.registerUser(this.state)
  }

  render() {
    if (this.props.registerStatus.loading) {
      return (
        <div>Loading</div>
      )
    }
    if (this.props.registerStatus.success) {
      return (
        <div className="alert alert-success">
          <h4>Success!</h4>
          <p>
            You have registered successfully, {this.state.name}. You can
            now <Link to="/login" className="alert-link">login</Link> to
            your account.
          </p>
        </div>
      )
    }
    return (
      <div>
        {
          this.getErrorForField('base')
          ? (
            <div className="alert alert-danger">{this.getErrorForField('base')}</div>
          )
          : null
        }
        <form onSubmit={this.handleSubmit} className="form">
          <Input
            error={this.getErrorForField('name')}
            label="Name"
            type="text"
            className="input"
            placeholder='Please enter your name.'
            value={this.state.name}
            onChange={this.handleChange('name')}
          />
          <Input
            error={this.getErrorForField('email')}
            label="Email"
            type="text"
            className="input"
            placeholder='Please enter your email.'
            value={this.state.email}
            onChange={this.handleChange('email')}
          />
          <Input
            error={this.getErrorForField('password')}
            label="Password"
            type="password"
            className="input"
            placeholder='Please enter your password.'
            value={this.state.password}
            onChange={this.handleChange('password')}
          />
          <div className="controls separated">
            <Link to="/login" className="button button-primary button-link">Already have an account?</Link>
            <button onClick={this.handleSubmit} className="button button-primary">Register</button>
          </div>
        </form>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    registerStatus: state.statuses.register
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    registerUser: formData => dispatch(registerAction(formData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)
