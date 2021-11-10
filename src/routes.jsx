import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from 'scenes/Home';
import Work from 'scenes/Work';
import Resume from 'scenes/Resume';
import WorkPost from 'scenes/Work Post';
import Error from 'scenes/Error';

const Routes = () => (
  <Switch>
    <Redirect from="/home" to="/" />
    <Route exact path="/" component={Home} />
    <Route exact path="/work" component={Work} />
    <Route exact path="/resume" component={Resume} />
    <Route path="/work/:workPost" component={WorkPost} />
    <Route component={Error} />
  </Switch>
);

export default Routes;
