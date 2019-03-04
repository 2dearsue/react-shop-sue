import React, { Component } from 'react';
import Welcome from './Welcome';
import NavList from './NavList';
import { BasketContainer } from './Basket';
import { BeginnerContainer } from './Beginner';
import Info from './Info';
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
              <Route exact path="/beginner" render= {() => <BeginnerContainer /> } />
              <Route path="/beginner/course-1" render= {() => <Info /> } />
              <Route path="/beginner/course-2" render= {() => <Info /> } />
              <Route path="/beginner/course-3" render= {() => <Info /> } />
            </Switch>
            <Switch>
              <Route exact path="/average" render= {() => <AverageContainer /> } />
              <Route path="/average/course-1" render= {() => <Info /> } />
              <Route path="/average/course-2" render= {() => <Info /> } />
              <Route path="/average/course-3" render= {() => <Info /> } />
            </Switch>
            <Switch>
            <Route exact path="/advanced" render= {() => <AdvancedContainer /> } />
            <Route path="/advanced/course-1" render= {() => <Info /> } />
            <Route path="/advanced/course-2" render= {() => <Info /> } />
            <Route path="/advanced/course-3" render= {() => <Info /> } />
            </Switch>

        </>
      </BrowserRouter>
    );
  }
}
