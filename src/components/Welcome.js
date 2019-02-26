import React, { Component } from 'react';
import Näh1 from '../img/pexels-photo-461035.jpeg';
import Näh2 from '../img/pexels-photo-821735.jpeg';
import Näh3 from '../img/sewing-thimble-pins-safety-pins-37631.jpeg';

export default class Welcome extends Component {
  render() {
    return (
      <>
        <div className="Jumbotron">

        <h3 className="display-5 text-center text-secondary mt-4 text-uppercase">Book your course here:</h3>
          <div className="card-deck m-3">
            <div className="card text-white bg-secondary m-3 d-inline-block">
              <div className="card-body">
                <h4 className="card-title text-center text-light">Beginner</h4>
                <img className="card-img" src={Näh1} alt="Card" />
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <a href="#!" class="card-link text-dark border border-dark p-2 rounded">Sign Up</a>
              </div>
            </div>
            <div className="card text-white bg-secondary m-3 d-inline-block">
              <div className="card-body">
                <h4 className="card-title text-center text-light">Average</h4>
                <img className="card-img" src={Näh2} alt="Card" />
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <a href="#!" class="card-link text-dark border border-dark p-2 rounded">Sign Up</a>
              </div>
            </div>
            <div className="card text-white bg-secondary m-3 d-inline-block">
              <div className="card-body">
                <h4 className="card-title text-center text-light">Advanced</h4>
                <img className="card-img" src={Näh3} alt="Card" />
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <a href="#!" class="card-link text-dark border border-dark p-2 rounded">Sign Up</a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
