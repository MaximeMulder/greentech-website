import React, { ReactElement } from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import PlanningProxy from './PlanningProxy';
import PlanningRoom from './PlanningRoom';
import { getRooms } from './data';

import './Planning.scss';

interface PlanningState {
  large: boolean;
}

class Planning extends React.Component<{}, PlanningState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      large: window.matchMedia('(min-width: 720px)').matches
    };
  }

  componentDidMount(): void {
    const handler = (event: MediaQueryListEvent) => this.setState({
      large: event.matches
    });

    window.matchMedia('(min-width: 720px)').addEventListener('change', handler);
  }

  render(): ReactElement {
    return this.state.large ? (
      <div className="planning-colomns">
        {getRooms().map((room) => (
          <div key={room.id} className="planning-colomn">
            <h2 className="planning-room-name">{room.name}</h2>
            <PlanningRoom {...{ room }} />
          </div>
        ))}
      </div>
    ) : (
      <React.Fragment>
        <div className="planning-rooms">
          {getRooms().map((room) => (
            <NavLink key={room.id} className="planning-room-name" to={'/planning/' + room.id}>{room.name}</NavLink>
          ))}
        </div>
        <Switch>
          <Route path="/planning/:room" component={PlanningProxy} />
          <Redirect to="/planning/0" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Planning;
