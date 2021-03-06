import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { incrementAdvanced } from '../redux/redux';
import { connect } from 'react-redux';
import Info from './Info';

class Advanced extends Component {
  render() {
    return (
      <>
      <Route exact path="/advanced" render={ () =>
        <div className="Jumbotron">
          <h3 className="display-5 text-center text-secondary mt-4 mb-3 text-uppercase">Available Avanced Courses</h3>

          <div className="container">
          <div className="card-deck">
            <div className="card mb-2">
              <div className="card-body">
                <h4 className="card-title">Course 1</h4>
                <p className="card-text text-muted">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <NavLink to="/basket"
                  onClick={this.props.incrementAdvanced}
                  className="btn btn-dark mr-3">Add to Cart</NavLink>
                <NavLink to="/advanced/course-1" className="btn border-dark">more Info</NavLink>
              </div>
            </div>
            <div className="card mb-2">
              <div className="card-body">
                <h4 className="card-title">Course 2</h4>
                <p className="card-text text-muted">This card has supporting text below as a natural lead-in to additional content.</p>
                <NavLink to="/basket"
                  onClick={this.props.incrementAdvanced}
                  className="btn btn-dark mr-3">Add to Cart</NavLink>
                <NavLink to="/advanced/course-2" className="btn border-dark">more Info</NavLink>
              </div>
            </div>
            <div className="card mb-2">
              <div className="card-body">
                <h4 className="card-title">Course 3</h4>
                <p className="card-text text-muted">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <NavLink to="/basket"
                  onClick={this.props.incrementAdvanced}
                  className="btn btn-dark mr-3">Add to Cart</NavLink>
                <NavLink to="/advanced/course-3" className="btn border-dark">more Info</NavLink>
              </div>
            </div>

          </div>
          </div>
        </div>
      } />
       <Route path="/advanced/course-1" render={ () => <Info /> } />
       <Route path="/advanced/course-2" render={ () => <Info /> } />
       <Route path="/advanced/course-3" render={ () => <Info /> } />
     </>
   );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    incrementAdvanced: () => dispatch(incrementAdvanced())
  }
}

export const AdvancedContainer = connect(null, mapDispatchToProps)(Advanced)
