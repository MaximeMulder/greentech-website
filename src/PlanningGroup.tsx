import React, { ReactElement } from 'react';
import PlanningConference from './PlanningConference';
import { ConferenceData } from './data';

interface PlanningGroupProps {
  group: ConferenceData[];
}

const PlanningGroup = (props: PlanningGroupProps): ReactElement => (
  <div className="planning-group">
    {props.group.map((conference) => (
      <PlanningConference key={conference.id} {...{ conference }} />
    ))}
  </div>
);

export default PlanningGroup;
