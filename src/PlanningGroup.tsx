import React, { ReactElement } from 'react';
import PlanningConference from './PlanningConference';
import PlanningTime from './PlanningTime';
import { ConferenceData } from './data';

interface PlanningGroupProps {
  group: ConferenceData[];
  next: ConferenceData[];
}

const PlanningGroup = (props: PlanningGroupProps): ReactElement => (
  <div className="planning-group" style={{
    marginBottom: props.next && (props.next[0].begin - props.group[props.group.length - 1].end) / 40
  }}>
    {props.group.map((conference) => (
      <PlanningConference key={conference.id} {...{ conference }} />
    ))}
    <PlanningTime time={props.group[props.group.length - 1].end} limit={'end'} />
  </div>
);

export default PlanningGroup;
