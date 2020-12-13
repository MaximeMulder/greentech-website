import React, { ReactElement } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Live from './Live';
import Rooms from './Rooms';

const Lives = (): ReactElement => (
  <React.Fragment>
    <Rooms to="/lives/" />
    <Switch>
      <Route path="/lives/:live" component={Live} />
      <Redirect to="/lives/0" />
    </Switch>
  </React.Fragment>
);

export default Lives;
