import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Home from 'scenes/Home';
import Work from 'scenes/Work';
import WorkPost from 'scenes/Work Post';
// import NotFound from 'scenes/Not Found';

const Routes = () => (
  <Switch>
    <Redirect from="/home" to="/" />
    <Route exact path="/" component={Home} />
    <Route exact path="/work" component={Work} />
    <Route exact path="/work/:workPost" component={WorkPost} />
  </Switch>
);

export default Routes;
