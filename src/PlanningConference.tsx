import React, { ReactElement } from 'react';
import { ConferenceData } from './data';

interface PlanningConferenceProps {
    conference: ConferenceData;
}

const PlanningConference = (props: PlanningConferenceProps): ReactElement => {
  // TODO : y calculus
  return (
    <div> {/* style={}> */}
      <h2 className="conferenceTitle">
        {props.conference.name}
      </h2>
    </div>
  );
};

export default PlanningConference;
