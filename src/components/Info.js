import React, { Component } from 'react';
import { Route } from 'react-router-dom';

export default class Info extends Component {
  render() {

    return (
      <div className="">

          <Route path="/beginner/course-1" render={ () => <div className="card bg-white col-4 offset-4"> <p className="text-center">Hey this is more info about the course-1... blblablalbla </p></div>} />
          <Route path="/beginner/course-2" render={ () => <div className="card bg-white col-4 offset-4"> <p className="text-center">Hey this is more info about the course-2... blblablalbla </p></div>} />
          <Route path="/beginner/course-3" render={ () => <div className="card bg-white col-4 offset-4"> <p className="text-center">Hey this is more info about the course-3... blblablalbla </p></div>} />
      </div>
    )
  }
}
