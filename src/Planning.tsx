import React, { ReactElement } from 'react';
import data, { getLiveConferences } from './data';
import RoomPlanningEntry from './RoomPlanningEntry';

const Planning = (): ReactElement => (
  <React.Fragment>
    {data.lives.map((live) => (
      <React.Fragment key={live.id}>
        {live.name}
        <RoomPlanningEntry conferences={getLiveConferences(live)} />
      </React.Fragment>
    ))}
  </React.Fragment>
);

export default Planning;
