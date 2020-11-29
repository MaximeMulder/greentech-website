import React, { ReactElement } from 'react';
import data, { getLiveConferences } from './data';
import PlanningLive from './PlanningLive';

const Planning = (): ReactElement => (
  <React.Fragment>
    {data.lives.map((live) => (
      <React.Fragment key={live.id}>
        <PlanningLive live={live} />
      </React.Fragment>
    ))}
  </React.Fragment>
);

export default Planning;
