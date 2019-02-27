import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Info from './Info';

export default class Beginner extends Component {
  render() {
    return (
      <>
      <div className="Jumbotron">
      <Route exact path="/beginner" render={ () =>
        <div className="Jumbotron">
          <h3 className="display-5 text-center text-secondary mt-4 mb-3 text-uppercase">Available Beginner Courses</h3>

          <div className="container">

            <div className="card mb-2">
              <div className="card-body">
                <h4 className="card-title">Course 1</h4>
                <p className="card-text text-muted">This is a wider card with supporting text below as a n to additionaler.</p>
                <NavLink to="/basket" className="btn btn-dark mr-3">Book Now!</NavLink>
                <NavLink to="/beginner/course-1" className="btn border-dark">more Info</NavLink>
              </div>
            </div>

            <div className="card mb-2">
              <div className="card-body">
                <h4 className="card-title">Course 2</h4>
                <p className="card-text text-muted">This card has supporting text below as a natural lead-in tot.</p>
                <NavLink to="/basket" className="btn btn-dark mr-3">Book Now!</NavLink>
                <NavLink to="/beginner/course-2" className="btn border-dark">more Info</NavLink>
              </div>
            </div>

            <div className="card mb-2">
              <div className="card-body">
                <h4 className="card-title">Course 3</h4>
                <p className="card-text text-muted">This is a wider card with supporting text below as a natural lcontent. </p>
                <NavLink to="/basket" className="btn btn-dark mr-3">Book Now!</NavLink>
                <NavLink to="/beginner/course-3" className="btn border-dark">more Info</NavLink>
              </div>
            </div>

          </div>
        </div>
      } />
        <Route path="/beginner/course-1" render={ () =><Info /> } />
        <Route path="/beginner/course-2" render={ () =><Info /> } />
        <Route path="/beginner/course-3" render={ () =><Info /> } />
      </div>
      </>
    );
  }
}
