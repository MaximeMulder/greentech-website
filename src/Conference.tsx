import React, { ReactElement } from 'react';
import { ConferenceData, getConferenceRoom } from './data';

interface ConferenceProps {
  conference: ConferenceData;
}

const Conference = (props: ConferenceProps): ReactElement => {
  const date: Date = new Date(props.conference.begin * 1000);
  return (
    <article>
      <div className="left">
        <div className="roomName">
          {getConferenceRoom(props.conference).name}
        </div>
        <div className="date">
          {date.toLocaleDateString()}
          <br />
          {date.toLocaleTimeString()}
        </div>
      </div>
      <div>
        <div className="conference-title">{props.conference.title}</div>
        <div className="conference-subtitle">{props.conference.subtitle}</div>
        {props.conference.presenters.join(' - ')}
      </div>
    </article>
  );
};

export default Conference;
