import React, { Component } from 'react';
import { Route } from 'react-router-dom';

export default class Info extends Component {
  render() {

    return (
      <div className="container w-50 mt-5 mx-auto">
          <Route path="/beginner/course-1" render={ () => <div className="card bg-white p-4"> <h2 className="lead display-4 text-center">This is Beginner Course-1 Info Text</h2><p className="text-center">Hey this is more info about the course-1... blblablalbla </p></div>} />
          <Route path="/beginner/course-2" render={ () => <div className="card bg-white p-4"> <h2 className="lead display-4 text-center">This is Beginner Course-2 Info Text</h2><p className="text-center">Hey this is more info about the course-2... blblablalbla </p></div>} />
          <Route path="/beginner/course-3" render={ () => <div className="card bg-white p-4"> <h2 className="lead display-4 text-center">This is Beginner Course-3 Info Text</h2><p className="text-center">Hey this is more info about the course-3... blblablalbla </p></div>} />
          <Route path="/average/course-1" render={ () => <div className="card bg-white p-4"> <h2 className="lead display-4 text-center">This is Average Course-1 Info Text</h2><p className="text-center">Hey this is more info about the course-1... blblablalbla </p></div>} />
          <Route path="/average/course-2" render={ () => <div className="card bg-white p-4"> <h2 className="lead display-4 text-center">This is Average Course-2 Info Text</h2><p className="text-center">Hey this is more info about the course-2... blblablalbla </p></div>} />
          <Route path="/average/course-3" render={ () => <div className="card bg-white p-4"> <h2 className="lead display-4 text-center">This is Average Course-3 Info Text</h2><p className="text-center">Hey this is more info about the course-3... blblablalbla </p></div>} />
          <Route path="/advanced/course-1" render={ () => <div className="card bg-white p-4"> <h2 className="lead display-4 text-center">This is Advanced Course-1 Info Text</h2><p className="text-center">Hey this is more info about the course-1... blblablalbla </p></div>} />
          <Route path="/advanced/course-2" render={ () => <div className="card bg-white p-4"> <h2 className="lead display-4 text-center">This is Advanced Course-2 Info Text</h2><p className="text-center">Hey this is more info about the course-2... blblablalbla </p></div>} />
          <Route path="/advanced/course-3" render={ () => <div className="card bg-white p-4"> <h2 className="lead display-4 text-center">This is Advanced Course-3 Info Text</h2><p className="text-center">Hey this is more info about the course-3... blblablalbla </p></div>} />
      </div>
    )
  }
}
