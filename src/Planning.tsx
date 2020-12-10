import React, { ReactElement } from 'react';
import data from './data';
import PlanningRoom from './PlanningRoom';
import './Planning.scss';

const Planning = (): ReactElement => (
  <div className="planning">
    {data.rooms.map((room) => (
      <PlanningRoom key={room.id} {...{ room }} />
    ))}
  </div>
);

export default Planning;
