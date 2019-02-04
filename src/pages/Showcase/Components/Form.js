import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div>
        <h3>Form</h3>

        <div className="code-example">
          <div className="view">
            <form className="form">
              <div className="form-field">
                <label className="label" htmlFor="example1a">Username</label>
                <input className="input" placeholder="Put your username here" id="example1a" type="text"/>
              </div>

              <div className="form-field">
                <label className="label" htmlFor="example2a">Message</label>
                <textarea className="input" placeholder="Put your message here" id="example2a"></textarea>
              </div>

              <div className="controls">
                <button className="button button-light button-outline">Cancel</button>
                <button className="button button-blue">Submit</button>
              </div>
            </form>
          </div>
          <div className="description">
            Normal Form
          </div>
          <pre className="code">
            {`
            <form className="form">
              <div className="form-field">
                <label className="label" htmlFor="example1">Username</label>
                <input className="input" placeholder="Put your username here" id="example1" type="text"/>
              </div>

              <div className="form-field">
                <label className="label" htmlFor="example2">Message</label>
                <textarea className="input" placeholder="Put your message here" id="example2"></textarea>
              </div>

              <div className="controls">
                <button className="button button-light button-outline">Cancel</button>
                <button className="button button-blue">Submit</button>
              </div>
            </form>
            `}
          </pre>
        </div>

        <div className="code-example">
          <div className="view">
            <form className="form inline">
              <div className="form-field">
                <label className="label" htmlFor="example10">Username</label>
                <input className="input" placeholder="Put your username here" id="example10" type="text"/>
              </div>

              <div className="form-field">
                <label className="label" htmlFor="example20">Message</label>
                <textarea className="input" placeholder="Put your message here" id="example20"></textarea>
              </div>

              <div className="controls">
                <button className="button button-light button-outline">Cancel</button>
                <button className="button button-blue">Submit</button>
              </div>
            </form>
          </div>
          <div className="description">
            Inline Form
          </div>
          <pre className="code">
            {`
            <form className="form inline">
              <div className="form-field">
                <label className="label" htmlFor="example1">Username</label>
                <input className="input" placeholder="Put your username here" id="example1" type="text"/>
              </div>

              <div className="form-field">
                <label className="label" htmlFor="example2">Message</label>
                <textarea className="input" placeholder="Put your message here" id="example2"></textarea>
              </div>

              <div className="controls">
                <button className="button button-light button-outline">Cancel</button>
                <button className="button button-blue">Submit</button>
              </div>
            </form>
            `}
          </pre>
        </div>

        <div className="code-example">
          <div className="view">
            <form className="form">
              <div className="form-field">
                <label className="label" htmlFor="example11">Username</label>
                <input className="input" placeholder="Put your username here" id="example11" type="text"/>
                <span className="input-message">Help text goes here</span>
              </div>

              <div className="form-field">
                <label className="label" htmlFor="example21">Message</label>
                <textarea className="input" placeholder="Put your message here" id="example21"></textarea>
                <span className="input-message">Help text goes here</span>
              </div>
            </form>

            <hr/>

            <form className="form inline">
              <div className="form-field">
                <label className="label" htmlFor="example12">Username</label>
                <input className="input" placeholder="Put your username here" id="example12" type="text"/>
                <span className="input-message">Help text goes here</span>
              </div>

              <div className="form-field">
                <label className="label" htmlFor="example22">Message</label>
                <textarea className="input" placeholder="Put your message here" id="example22"></textarea>
                <span className="input-message">Help text goes here</span>
              </div>
            </form>
          </div>
          <div className="description">
            Input help text
          </div>
          <pre className="code">
            {`
            <form className="form">
              <div className="form-field">
                <label className="label" htmlFor="example1">Username</label>
                <input className="input" placeholder="Put your username here" id="example1" type="text"/>
                <span className="input-message">Help text goes here</span>
              </div>

              <div className="form-field">
                <label className="label" htmlFor="example2">Message</label>
                <textarea className="input" placeholder="Put your message here" id="example2"></textarea>
                <span className="input-message">Help text goes here</span>
              </div>
            </form>

            <hr/>

            <form className="form inline">
              <div className="form-field">
                <label className="label" htmlFor="example1">Username</label>
                <input className="input" placeholder="Put your username here" id="example1" type="text"/>
                <span className="input-message">Help text goes here</span>
              </div>

              <div className="form-field">
                <label className="label" htmlFor="example2">Message</label>
                <textarea className="input" placeholder="Put your message here" id="example2"></textarea>
                <span className="input-message">Help text goes here</span>
              </div>
            </form>
            `}
          </pre>
        </div>

        <div className="code-example">
          <div className="view">
            <form className="form">
              <div className="form-field is-successful">
                <label className="label" htmlFor="example13">Username</label>
                <input className="input" placeholder="Put your username here" id="example13" type="text"/>
                <span className="input-message">Success message!</span>
              </div>

              <div className="form-field is-loading">
                <label className="label" htmlFor="example23">Message</label>
                <textarea className="input" placeholder="Put your message here" id="example23"></textarea>
                <span className="input-message">Help text goes here</span>
              </div>

              <div className="form-field has-error">
                <label className="label" htmlFor="example33">Message</label>
                <textarea className="input" placeholder="Put your message here" id="example33"></textarea>
                <span className="input-message">Oops, there is an error</span>
              </div>
            </form>
          </div>
          <div className="description">
            Input states
          </div>
          <pre className="code">
            {`
            <form className="form">
              <div className="form-field is-successful">
                <label className="label" htmlFor="example1">Username</label>
                <input className="input" placeholder="Put your username here" id="example1" type="text"/>
                <span className="input-message">Success message!</span>
              </div>

              <div className="form-field is-loading">
                <label className="label" htmlFor="example2">Message</label>
                <textarea className="input" placeholder="Put your message here" id="example2"></textarea>
                <span className="input-message">Help text goes here</span>
              </div>

              <div className="form-field has-error">
                <label className="label" htmlFor="example2">Message</label>
                <textarea className="input" placeholder="Put your message here" id="example2"></textarea>
                <span className="input-message">Oops, there is an error</span>
              </div>
            </form>
            `}
          </pre>
        </div>
      </div>
    )
  }
}

export default Form;
