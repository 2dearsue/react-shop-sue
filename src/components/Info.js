import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

export default class Info extends Component {
  render() {

    return (
      <>
        <div className="container p-5 bg-light">
          <Switch>
              <Route path="/beginner/course-1" render={ () => <div className="container"><p className="text-center">Hey this is more info about the course-1... blblablalbla </p></div>} />
              <Route exact path="/beginner/course-2" render={ () => <div className="container"> <p className="text-center">Hey this is more info about the course-2... blblablalbla </p></div>} />
              <Route exact path="/beginner/course-3" render={ () => <div className="container"> <p className="text-center">Hey this is more info about the course-3... blblablalbla </p></div>} />
          </Switch>
        </div>
      </>
    );
  }
}
