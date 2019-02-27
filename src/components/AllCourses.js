import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Beginner from './Beginner';
import Average from './Average';
import Advanced from './Advanced';

export default class AllCourses extends Component {
  render() {
    return (
      <>
        <Route exact path="/courses" render={ () =>
          <div className="Jumbotron">
            <h3 className="display-5 text-center text-secondary mt-4 text-uppercase">Book your course here:</h3>
          </div>
          } />
          <Switch>
            <Route path="/courses/beginner" render= {() => <Beginner /> } />
            <Route path="/courses/average" component={ Average }  />
            <Route path="/courses/advanced" component={ Advanced }  />
          </Switch>
      </>
    );
  }
}
