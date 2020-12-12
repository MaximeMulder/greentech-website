import React, { ReactElement } from 'react';
import ConferenceCard from './ConferenceCard';
import { getConferences } from './data';

import './Conferences.scss';

const Conferences = (): ReactElement => (
  <React.Fragment>
    {getConferences().map((conference) => (
      <ConferenceCard key={conference.id} {...{ conference }} />
    ))}
  </div>
);

export default Conferences;
