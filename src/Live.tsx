import React, { ReactElement } from 'react';
import { useParams } from 'react-router';
import Timer from './Timer';
import { getRoomConferences, getRoom } from './data';

import './Live.scss';

interface LiveParams {
  live: string,
}

function Live(): ReactElement {
  const room = getRoom(Number(useParams<LiveParams>().live));
  return (
    <div className="live">
      <iframe className="live-video" src={room.live} title={room.name} />
      <div className="live-timer">
        <div className="live-catchphrase">LA DIFFUSION DEBUTE DANS :</div>
        <Timer time={getRoomConferences(room).reduce((a, b) => a.begin < b.begin ? a : b).begin} />
      </div>
    </div>
  );
}

export default Live;
