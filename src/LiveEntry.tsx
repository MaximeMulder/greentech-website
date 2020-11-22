import React from 'react';
import data, { LiveData } from './Data';

const LiveEntry = (props: LiveData): JSX.Element => {

  const time_until_live: number = data.conferences.filter(e => e.live == props.id)[0].begin - ~~((new Date()).getTime() / 1000);
  console.log(time_until_live);
  const days :number = ~~(time_until_live / 86400);
  let remainder :number = time_until_live % 86400;
  const hours :number = ~~(remainder / 3600);
  remainder = remainder % 3600;
  const minutes :number = ~~(remainder / 60);
  const seconds :number = remainder % 60;

  return <React.Fragment>
    <iframe title={props.name} src={props.video} width="720" height="480"></iframe>
    La conférence débute dans : {days ? days + ' J' : ''} {hours ? hours + ' H' : ''} {minutes} MIN {seconds} SEC
  </React.Fragment>;

};

export default LiveEntry;
