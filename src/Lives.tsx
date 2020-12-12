import React, { ReactElement } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Live from './Live';
import { getRooms } from './data';

const Lives = (): ReactElement => (
  <React.Fragment>
    {getRooms().map((room) => (
      <React.Fragment key={room.id}>
        <Link to={'/lives/' + room.id}>{room.name}</Link><br />
      </React.Fragment>
    ))}
    <Switch>
      <Route path="/lives/:live" component={Live} />
      <Redirect from="/lives/" to="/lives/0" />
    </Switch>
  </React.Fragment>
);

export default Lives;
