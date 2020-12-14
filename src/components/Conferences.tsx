import React, { ReactElement } from 'react';
import ConferenceCard from './ConferenceCard';
import Content from './Content';
import { getConferences } from '../data';

import './Conferences.scss';

const Conferences = (): ReactElement => (
  <Content>
    <div className="conferences">
      {getConferences().map((conference) => (
        <ConferenceCard key={conference.id} {...{ conference }} />
      ))}
    </div>
  </Content>
);

export default Conferences;
