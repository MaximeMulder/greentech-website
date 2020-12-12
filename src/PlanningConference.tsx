import React, { ReactElement } from 'react';
import PlanningTime from './PlanningTime';
import { ConferenceData } from './data';

interface PlanningConferenceProps {
    conference: ConferenceData;
}

const PlanningConference = (props: PlanningConferenceProps): ReactElement => (
  <div className="planning-conference" style={{
    height: (props.conference.end - props.conference.begin) / 40
  }}>
    <PlanningTime time={props.conference.begin} limit={'start'} />
    {props.conference.title}
  </div>
);

export default PlanningConference;
