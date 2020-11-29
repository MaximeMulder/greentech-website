import React, { ReactElement } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { LiveData } from './Data';
import Live from './Live';

interface LivesProps {
  lives: LiveData[];
}

const Lives = (props: LivesProps): ReactElement => (
  <React.Fragment>
    {props.lives.map((live) => (
      <React.Fragment key={live.id}>
        <Link to={'/lives/' + live.id}>{live.name}</Link><br />
      </React.Fragment>
    ))}
    <Switch>
      <Route path="/lives/:live" component={Live} />
      <Redirect from="/lives/" to="/lives/0" />
    </Switch>
  </React.Fragment>
);

export default Lives;
