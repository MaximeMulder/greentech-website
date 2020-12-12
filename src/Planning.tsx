import React, { ReactElement } from 'react';
import PlanningRoom from './PlanningRoom';
import { getRooms } from './data';

import './Planning.scss';

const Planning = (): ReactElement => (
  <div className="planning">
    {getRooms().map((room) => (
      <PlanningRoom key={room.id} {...{ room }} />
    ))}
  </div>
);

export default Planning;
