import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from 'scenes/Home';
import About from 'scenes/About';
// import NotFound from 'scenes/Not Found';

const Routes = () => (
  <Switch>
    <Redirect from="/home" to="/" />
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    {/* <Route component={NotFound} /> */}
  </Switch>
);

export default Routes;
