import React, { ReactElement } from 'react';
import data from './data';
import PlanningLive from './PlanningLive';

const Planning = (): ReactElement => (
  <React.Fragment>
    {data.lives.map((live) => (
      <PlanningLive key={live.id} live={live} />
    ))}
  </React.Fragment>
);

export default Planning;
