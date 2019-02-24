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
      <div
        className={cn('form-field', {
          'has-error': this.props.error,
          'is-successful': this.props.isSuccessful,
          'is-loading': this.props.isLoading,
        })}
      >
        {
          this.props.label
          ? (
            <label htmlFor={this.inputId} className="label">{this.props.label}</label>
          ) : null
        }
        <select id={this.inputId} value={this.props.value} onChange={this.props.onChange} className="select">
          {
            this.props.placeholder
            ? (
                <option key='__placehlder' value={null}>{this.props.placeholder}</option>
            ) : null
          }
          {
            this.props.options.map((option) => {
              return (
                <option key={option.value} value={option.value}>{option.label}</option>
              )
            })
          }
        </select>
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
