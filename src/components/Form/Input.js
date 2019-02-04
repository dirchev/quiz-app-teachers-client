import React, { Component } from 'react'
import cn from 'classnames'
import uuid from 'uuid'

class Input extends Component {
  constructor () {
    super()
    this.inputId = uuid.v4()
  }

  getInputMessage () {
    if (this.props.error) {
      return this.props.error
    } else if (this.props.isLoading) {
      return 'Loading...'
    } else if (this.props.helpText) {
      return this.props.helpText
    } else {
      return null
    }
  }

  render () {
    return (
      <div className={cn('form-field', {
        'has-error': this.props.error,
        'is-successful': this.props.isSuccessful,
        'is-loading': this.props.isLoading,
      })}>
        <label htmlFor={this.inputId} className="label">{this.props.label}</label>
        <input
          type={this.props.type}
          className="input"
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
          id={this.inputId}
          />
        {
          this.getInputMessage()
          ? (
            <div className="input-message">
              {this.getInputMessage()}
            </div>
          ) : null
        }
      </div>
    )
  }
}

export default Input
