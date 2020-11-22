import React from 'react';
import { ConferenceData } from './Data';

const ConferenceEntry = (props: ConferenceData): JSX.Element => {

  const date: Date = new Date(props.begin * 1000);

  return <React.Fragment>
    <article>
      <div className="left">
        <div className="roomName">
          {props.room}
        </div>
        <div className="date">
          {date.toLocaleDateString()}&nbsp;
          {date.toLocaleTimeString()}
        </div>
      </div>
      <div>
        <div className="name">{props.name}</div>
        <div className="description">{props.description}</div>
        {props.presenters.map((presenter) => presenter[0]).join(' - ')}
      </div>
    </article>
  </React.Fragment>;

};

export default ConferenceEntry;
