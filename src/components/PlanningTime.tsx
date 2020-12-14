import React, { ReactElement } from 'react';
import { getTime } from '../date';

interface PlanningTimeProps {
  time: number;
  limit: 'start' | 'end'
}

const PlanningTime = (props: PlanningTimeProps): ReactElement => (
  <div className={`planning-time planning-${props.limit}`}>
    {getTime(new Date(props.time * 1000))}
  </div>
);

export default PlanningTime;
