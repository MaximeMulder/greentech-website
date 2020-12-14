import React, { ReactElement } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Content from './Content';
import Live from './Live';
import Rooms from './Rooms';

const Lives = (): ReactElement => (
  <Content>
    <Rooms to="/lives/" />
    <Switch>
      <Route path="/lives/:live" component={Live} />
      <Redirect to="/lives/0" />
    </Switch>
  </Content>
);

export default Lives;
