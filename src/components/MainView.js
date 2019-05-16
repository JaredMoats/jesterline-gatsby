import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import HowItWorks from "./HowItWorks";
import Faq from "./Faq";

class MainView extends Component {
  render() {
    return(
      <Switch>
        <Route exact path="/" component={ Home }></Route>
        <Route exact path="/how-it-works" component={ HowItWorks }></Route>
        <Route exact path="/faq" component={ Faq }></Route>
      </Switch>
    );
  }
}

export default MainView;
