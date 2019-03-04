import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { applyMiddleware } from '../redux/redux';

class Logout extends Component {

  // componentDidMount() {
  //   setTimeout(() => this.setState({isRedirectSet:true}), 5000);
  // }

 render() {
   return (
     <>
     <Route exact path="/logout" render={ () =>
      <div className="container my-4 w-60">
        <div className="jumbotron bg-white border border-dark text-center">
          <h3 className="lead">We have received your order.</h3><br></br>
          <h3 className="lead">The total cost of your order is</h3>
          <h2 className="title">{this.props.totalCost}<span>€</span></h2>
          <h3 className="lead">See you soon!</h3>
        </div>
      </div>
      } />

      {this.props.applyMiddleware && <Redirect to="/" />}

     </>
   );
 }
}

const mapStateToProps = state => {
  return {
    totalCost: state.totalCost,
  }
}


// const mapDispatchToProps = dispatch => {
//   return {
//     isRedirectSet: () => dispatch(isRedirectSet()),
//   }
// }

export const LogoutContainer = connect(mapStateToProps, null)(Logout)
