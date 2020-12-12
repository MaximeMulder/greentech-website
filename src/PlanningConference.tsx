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
    {props.conference.title}
    <PlanningTime time={props.conference.begin} limit={'start'} />
  </div>
);

export default PlanningConference;
