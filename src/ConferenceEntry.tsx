import React from 'react';

interface ConferenceEntryProps {
  room: string;
  date: string; // TODO: date type
  name: string;
  description: string;
  authors: string[];
}

const ConferenceEntry = (props: ConferenceEntryProps) => (
  <React.Fragment>
    <div>
      {props.room}
      {props.date}
    </div>
    <div>
      <h3>{props.name}</h3>
      {props.description}<br />
      {props.authors.join(' - ')}
    </div>
  </React.Fragment>
);

export default ConferenceEntry;
