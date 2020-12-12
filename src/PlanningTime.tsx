import React, { ReactElement } from 'react';

interface PlanningTimeProps {
  time: number;
  limit: 'start' | 'end'
}

const PlanningTime = (props: PlanningTimeProps): ReactElement => {
  const date = new Date(props.time * 1000);
  return (
    <div className={`planning-time planning-${props.limit}`}>
      {date.getHours().toString().padStart(2, '0')}:{date.getMinutes().toString().padStart(2, '0')}
    </div>
  );
};

export default PlanningTime;
