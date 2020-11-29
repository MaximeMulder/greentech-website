import React, { ReactElement } from 'react';
import Conference from './Conference';
import { ConferenceData } from './data';
import './Conferences.scss';

interface ConferencesProps {
  conferences: ConferenceData[];
}

const Conferences = (props: ConferencesProps): ReactElement => (
  <React.Fragment>
    {props.conferences.map((conference) => (
      <Conference key={conference.id} {...{ conference }} />
    ))}
  </React.Fragment>
);

export default Conferences;
