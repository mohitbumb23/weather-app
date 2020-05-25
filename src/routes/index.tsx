import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Homepage from '../containers/Homepage';
import { ROUTES } from '../constant';

const routes = (
  <Switch>
    <Route path={ROUTES.HOMEPAGE} exact component={Homepage} />
    <Redirect from='/*' to={ROUTES.HOMEPAGE} />
  </Switch>
);

export default routes;
