import React, { Component } from "react";

class Tables extends Component {
  render() {
    return (
      <div>
        <h3>Tables</h3>
        <div className="code-example">
          <div className="view">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Dimitar</td>
                  <td>Mirchev</td>
                  <td>@dirchev</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>John</td>
                  <td>Pete</td>
                  <td>@j.pete</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Sam</td>
                  <td>Fling</td>
                  <td>@sam.f</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="description">
            Normal Table
          </div>
          <pre className="code">
            {`
              <table className="table">
                ...
              </table>
            `}
          </pre>
        </div>

        <div className="code-example">
          <div className="view">
            <table className="table table-small">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Dimitar</td>
                  <td>Mirchev</td>
                  <td>@dirchev</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>John</td>
                  <td>Pete</td>
                  <td>@j.pete</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Sam</td>
                  <td>Fling</td>
                  <td>@sam.f</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="description">
            Small Table
          </div>
          <pre className="code">
            {`
              <table className="table table-small"></table>
            `}
          </pre>
        </div>

        <div className="code-example">
          <div className="view">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Dimitar</td>
                  <td>Mirchev</td>
                  <td>@dirchev</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>John</td>
                  <td>Pete</td>
                  <td>@j.pete</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Sam</td>
                  <td>Fling</td>
                  <td>@sam.f</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="description">
            Table Head Options
            There are .thead-dark and .thead-light
          </div>
          <pre className="code">
            {`
              <table className="table">
                <thead className="thead-dark">
                  ...
                </thead>
                ...
              </table>
            `}
          </pre>
        </div>

        <div className="code-example">
          <div className="view">
            <table className="table table-stripped">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Dimitar</td>
                  <td>Mirchev</td>
                  <td>@dirchev</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>John</td>
                  <td>Pete</td>
                  <td>@j.pete</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Sam</td>
                  <td>Fling</td>
                  <td>@sam.f</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="description">
            Stripped Table
          </div>
          <pre className="code">
            {`
              <table className="table table-stripped">
                ...
              </table>
            `}
          </pre>
        </div>

        <div className="code-example">
          <div className="view">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Dimitar</td>
                  <td>Mirchev</td>
                  <td>@dirchev</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>John</td>
                  <td>Pete</td>
                  <td>@j.pete</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Sam</td>
                  <td>Fling</td>
                  <td>@sam.f</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="description">
            Bordered Table
          </div>
          <pre className="code">
            {`
              <table className="table table-bordered">
                ...
              </table>
            `}
          </pre>
        </div>

        <div className="code-example">
          <div className="view">
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Dimitar</td>
                  <td>Mirchev</td>
                  <td>@dirchev</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>John</td>
                  <td>Pete</td>
                  <td>@j.pete</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Sam</td>
                  <td>Fling</td>
                  <td>@sam.f</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="description">
            Borderless Table
          </div>
          <pre className="code">
            {`
              <table className="table table-borderless">
                ...
              </table>
            `}
          </pre>
        </div>
      </div>
    );
  }
}

export default Tables;
