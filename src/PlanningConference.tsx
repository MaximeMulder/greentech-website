import React, { ReactElement } from 'react';
import { ConferenceData } from './data';

interface PlanningConferenceProps {
    conference: ConferenceData;
}

const PlanningConference = (props: PlanningConferenceProps): ReactElement => (
  <div className="planning-conference" style={{
    height: (props.conference.end - props.conference.begin) / 40
  }}>
    {props.conference.title}
  </div>
);

export default PlanningConference;
