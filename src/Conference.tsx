import React, { ReactElement } from 'react';
import { ConferenceData, getConferenceLive } from './data';

interface ConferenceProps {
  conference: ConferenceData;
}

const Conference = (props: ConferenceProps): ReactElement => {
  const date: Date = new Date(props.conference.begin * 1000);
  return (
    <article>
      <div className="left">
        <div className="roomName">
          {getConferenceLive(props.conference)}
        </div>
        <div className="date">
          {date.toLocaleDateString()}
          <br />
          {date.toLocaleTimeString()}
        </div>
      </div>
      <div>
        <div className="name">{props.conference.name}</div>
        <div className="description">{props.conference.description}</div>
        {props.conference.presenters.map((presenter) => presenter[0]).join(' - ')}
      </div>
    </article>
  );
};

export default Conference;
