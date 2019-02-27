import React, { Component } from 'react';
import Näh1 from '../img/pexels-photo-461035.jpeg';
import Näh2 from '../img/pexels-photo-821735.jpeg';
import Näh3 from '../img/sewing-thimble-pins-safety-pins-37631.jpeg';
import { NavLink } from 'react-router-dom';

export default class Welcome extends Component {
  render() {
    return (
      <>
        <div className="Jumbotron">
          <h3 className="display-5 text-center text-dark text-uppercase">Book your course here:</h3>

            <div className="card-deck w-80 mx-auto">

              <div className="card text-white bg-secondary m-3 d-inline-block">
                <div className="card-body text-center ">
                  <h4 className="card-title text-light">Start now</h4>
                  <img className="card-img" src={Näh1} alt="Card" />
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <NavLink to="/beginner" className="btn btn-dark">Book Now!</NavLink>
                </div>
              </div>

              <div className="card text-white bg-secondary m-3 d-inline-block">
                <div className="card-body text-center ">
                  <h4 className="card-title text-light">Go further</h4>
                  <img className="card-img" src={Näh3} alt="Card" />
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <NavLink to="/average" className="btn btn-dark">Book Now!</NavLink>
                </div>
              </div>

              <div className="card text-white bg-secondary m-3 d-inline-block">
                <div className="card-body text-center ">
                  <h4 className="card-title text-light">Get professional</h4>
                  <img className="card-img" src={Näh2} alt="Card" />
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <NavLink to="/advanced" className="btn btn-dark">Book Now!</NavLink>
                </div>
              </div>


          </div>

        </div>
      </>
    );
  }
}
