import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'

export default class Average extends Component {
  render() {
    return (
      <>
        <Route exact path="/average" render={ () =>
          <div className="Jumbotron">
            <h3 className="display-5 text-center text-secondary mt-4 mb-3 text-uppercase">Available Average Courses</h3>

            <div className="card-deck">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Course 1</h4>
                  <p className="card-text text-muted">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <NavLink to="/basket" className="btn btn-dark">Book Now!</NavLink>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Course 2</h4>
                  <p className="card-text text-muted">This card has supporting text below as a natural lead-in to additional content.</p>
                  <NavLink to="/basket" className="btn btn-dark align-self-end">Book Now!</NavLink>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Course 3</h4>
                  <p className="card-text text-muted">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                  <NavLink to="/basket" className="btn btn-dark">Book Now!</NavLink>
                </div>
              </div>
            </div>

          </div>
        } />
      </>
    );
  }
}
