import React, { ReactElement } from 'react';
import data from './data';
import PlanningLive from './PlanningLive';
import './Planning.scss';

const Planning = (): ReactElement => (
  <main id="planning">
    {data.lives.map((live) => (
      <PlanningLive key={live.id} live={live} />
    ))}
  </main>
);

export default Planning;
