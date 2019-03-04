import React, { Component } from 'react';
import Welcome from './Welcome';
import NavList from './NavList';
import { BasketContainer } from './Basket';
import { BeginnerContainer } from './Beginner';
// import Info from './Info';
import { AdvancedContainer } from './Advanced';
import { AverageContainer } from './Average';
import { LogoutContainer } from './Logout';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import { FaShoppingBasket } from 'react-icons/fa';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <NavList />
          <NavLink to="/basket"><FaShoppingBasket className="basket text-dark"/></NavLink>
          <Route path="/basket" render= {() => <BasketContainer /> } />
          <Route path="/logout" render= {() => <LogoutContainer /> } />

          <Route exact path="/" render= {() => <Welcome /> } />

          <Switch>
            <Route path="/beginner" render= {() => <BeginnerContainer /> } />
            <Route path="/average" render= {() => <AverageContainer /> } />
            <Route path="/advanced" render= {() => <AdvancedContainer /> } />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}
