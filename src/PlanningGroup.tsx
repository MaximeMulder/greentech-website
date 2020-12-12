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
    <PlanningTime time={props.group[props.group.length - 1].end} limit={'end'} />
    {props.group.map((conference) => (
      <PlanningConference key={conference.id} {...{ conference }} />
    ))}
  </div>
);

export default PlanningGroup;
