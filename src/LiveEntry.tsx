import React from 'react';
import { LiveData } from './Data';

interface LiveEntryProps {
    live: LiveData;
}

const LiveEntry = (props: LiveEntryProps) => (
  <React.Fragment>
    <iframe title={props.live.name} src={props.live.video} width="720" height="480"></iframe>
  </React.Fragment>
);

export default LiveEntry;
