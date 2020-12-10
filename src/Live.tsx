import React, { ReactElement } from 'react';
import { useParams } from 'react-router';
import { getRoomConferences, getRoom } from './data';

interface LiveParams {
  live: string,
}

function Live(): ReactElement {
  const room = getRoom(Number(useParams<LiveParams>().live));
  const time_until_live = getRoomConferences(room)[0].begin - Math.floor(Date.now() / 1000);
  console.log(time_until_live);
  const days = Math.floor(time_until_live / 86400);
  let remainder = time_until_live % 86400;
  const hours = Math.floor(remainder / 3600);
  remainder = remainder % 3600;
  const minutes = Math.floor(remainder / 60);
  const seconds = remainder % 60;
  return (
    <React.Fragment>
      <iframe title={room.name} src={room.live} width="720" height="480"></iframe>
    La conférence débute dans : {days ? days + ' J' : ''} {hours ? hours + ' H' : ''} {minutes} MIN {seconds} SEC
    </React.Fragment>
  );
}

export default Live;
