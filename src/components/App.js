import React, { Component } from 'react';
import Welcome from './Welcome';
import NavList from './NavList';
import Basket from './Basket';
import Beginner from './Beginner';
import Advanced from './Advanced';
import Average from './Average';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import { FaShoppingBasket } from 'react-icons/fa';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <NavList />
          <NavLink to="/basket"><FaShoppingBasket className="basket text-dark"/></NavLink>
          <Route path="/basket" render= {() => <Basket /> } />

          <Route exact path="/" render= {() => <Welcome /> } />

          <Switch>
            <Route path="/beginner" render= {() => <Beginner /> } />
            <Route path="/average" render= {() => <Average /> } />
            <Route path="/advanced" render= {() => <Advanced /> } />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}
