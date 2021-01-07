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
  const current_conference: ConferenceData = conferences.find((a) => (a.begin <= current_time && current_time <= a.end));
  if (current_conference) {
    return (
      <div className="live">
        <iframe className="live-video" src={current_conference.url} title={current_conference.title} />
        <div className="live-conf-title">Conference en cours : <br />{current_conference.title}</div>
      </div>
    );
  } else {
    const next_conference = conferences.filter((a) => a.begin > current_time).reduce((a, b) => a.begin < b.begin ? a : b);
    return (
      <div className="live">
        <iframe className="live-video" src={next_conference.url} title={next_conference.title} />
        <div className="live-timer">
          <div className="live-catchphrase">La prochaine conference debute dans :</div>
          <Timer time={next_conference.begin} />
        </div>
      </div>
    );
  }
}

export default Live;
