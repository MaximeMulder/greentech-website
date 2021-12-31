import React, { ReactElement } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Content from './Content';
import PlanningProxy from './PlanningProxy';
import PlanningRoom from './PlanningRoom';
import Rooms from './Rooms';
import { getRooms } from '../data';

import './Planning.scss';

interface PlanningState {
  large: boolean;
}

class Planning extends React.Component<{}, PlanningState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      large: window.matchMedia('(min-width: 860px)').matches
    };
  }

  componentDidMount(): void {
    const handler = (event: MediaQueryListEvent) => this.setState({
      large: event.matches
    });

    window.matchMedia('(min-width: 860px)').addEventListener('change', handler);
  }

  render(): ReactElement {
    return (
      <Content>
        {this.state.large ? (
          <div className="planning">
            {getRooms().map((room) => (
              <div key={room.id} className="planning-colomn">
                <div className="room">{room.name}</div>
                <PlanningRoom {...{ room }} />
              </div>
            ))}
          </div>
        ) : (
          <React.Fragment>
            <Rooms to="/planning/" />
            <Routes>
              <Route path=":room" element={<PlanningProxy />} />
              <Route path="*" element={<Navigate to="/planning/0" />} />
            </Routes>
          </React.Fragment>
        )}
      </Content>
    );
  }
}

export default Planning;
