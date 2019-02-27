import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { FaShoppingBasket } from 'react-icons/fa';


export default class NavList extends Component {

  render() {
    return (
      <>
      <div className="d-inline">
        <ul className="nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link text-dark">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/beginner" className="nav-link text-dark">Beginner</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/average" className="nav-link text-dark">Average</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/advanced" className="nav-link text-dark">Advanced</NavLink>
          </li>
        </ul>
      </div>
      </>
    )
  }
}

// NavLinks are going to change our url at that is descisive!!!
