import React, { ReactElement } from 'react';
import ConferenceCard from './ConferenceCard';
import { ConferenceData } from './data';
import './Conferences.scss';

interface ConferencesProps {
  conferences: ConferenceData[];
}

const Conferences = (props: ConferencesProps): ReactElement => (
  <React.Fragment>
    {props.conferences.map((conference) => (
      <ConferenceCard key={conference.id} {...{ conference }} />
    ))}
  </React.Fragment>
);

export default Conferences;
