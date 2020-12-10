import React, { ReactElement } from 'react';
import { ConferenceData } from './data';

interface PlanningConferenceProps {
    conference: ConferenceData;
}

const PlanningConference = (props: PlanningConferenceProps): ReactElement => (
  <div className="planning-conference">
    <h2 className="planning-conference-title">
      {props.conference.title}
    </h2>
  </div>
);

export default PlanningConference;
