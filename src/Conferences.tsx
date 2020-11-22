import React from 'react';
import ConferenceEntry from './ConferenceEntry';
import { ConferenceData } from './Data';
import './Conferences.scss';

interface ConferencesProps {
  conferences: Array<ConferenceData>;
}

const Conferences = (props: ConferencesProps): JSX.Element => (
  <React.Fragment>
    {props.conferences.map(conference => (
      <ConferenceEntry key={conference.id} {...conference} />
    ))}
  </React.Fragment>
);

export default Conferences;
