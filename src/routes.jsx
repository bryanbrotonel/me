import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from 'scenes/Home';
import Work from 'scenes/Work';
// import NotFound from 'scenes/Not Found';

const Routes = () => (
  <Switch>
    <Redirect from="/home" to="/" />
    <Route exact path="/" component={Home} />
    <Route exact path="/Work" component={Work} />
    {/* <Route component={NotFound} /> */}
  </Switch>
);

export default Routes;
