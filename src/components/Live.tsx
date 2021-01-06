import React, { ReactElement } from 'react';
import { useParams } from 'react-router';
import Timer from './Timer';
import { getRoomConferences, getRoom, ConferenceData } from '../data';

import './Live.scss';

interface LiveParams {
  live: string,
}

function Live(): ReactElement {
  const room = getRoom(Number(useParams<LiveParams>().live));
  const conferences = getRoomConferences(room);
  const current_time = (new Date()).getTime() / 1000;
  const current_conference: ConferenceData = conferences.find((a) => (room.id == a.room && a.begin <= current_time && current_time <= a.end));
  return (
    <div className="live">
      <iframe className="live-video" src={current_conference ? current_conference.url : room.live} title={room.name} />
      {current_conference ? (
        <div className="live-conf-title">Conference en cours : <br />{current_conference.title}</div>
      ) : (
        <div className="live-timer">
          <div className="live-catchphrase">LA DIFFUSION DEBUTE DANS :</div>
          <Timer time={conferences.reduce((a, b) => a.begin < b.begin ? a : b).begin} />
        </div>
      )}
    </div>
  );
}

export default Live;
