import React, { ReactElement } from 'react';
import { useParams } from 'react-router';
import Timer from './Timer';
import { getRoomConferences, getRoom } from '../data';

import './Live.scss';

const Live = (): ReactElement => {
  const room = getRoom(Number(useParams().live));
  const conferences = getRoomConferences(room);
  const time = Date.now() / 1000;
  let conference = conferences.find((conference) => time >= conference.begin && time <= conference.end);
  if (!conference) {
    const nexts = conferences.filter((conference) => time < conference.begin);
    if (nexts.length > 0) {
      conference = nexts.reduce((a, b) => a.begin < b.begin ? a : b);
    } else {
      conference = conferences.reduce((a, b) => a.begin > b.begin ? a : b);
    }
  }

  return (
    <div className="live">
      <iframe className="live-video" src={conference.url} title={conference.title} allowFullScreen />
      <div className="live-description">
        {time < conference.begin ? (
          'LA PROCHAINE CONFERENCE DEBUTE DANS :'
        ) : time > conference.end ? (
          'DERNIERE CONFERENCE :'
        ) : (
          'CONFERENCE EN COURS :'
        )}
        <br />
        {time >= conference.begin ? (
          normalize(conference.title)
        ) : (
          <Timer time={conference.begin} />
        )}
      </div>
    </div>
  );
};

function normalize(string: string) {
  return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export default Live;
