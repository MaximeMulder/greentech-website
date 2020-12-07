import React, { ReactElement } from 'react';
import { ConferenceData } from './data';

interface PlanningConferenceProps {
    conference: ConferenceData;
}

const PlanningConference = (props: PlanningConferenceProps): ReactElement => {
  const hour = new Date(props.conference.begin * 1000).getHours();
  console.log(hour);
  const styles = {
    marginTop: (hour - 9) * 25 + 'px'
  };

  return (
    <div className="conference" style={styles}>
      <h2 className="conferenceTitle">
        {props.conference.name}
      </h2>
    </div>
  );
};

export default PlanningConference;
