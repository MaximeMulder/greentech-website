import React, { ReactElement } from 'react';
import { ConferenceData, getConferenceRoom, getConference, RoomData } from './data';

interface ConferenceProps {
  conference: ConferenceData;
}

const showModal = (id: number) => {
  const conf: ConferenceData = getConference(id);
  const room: RoomData = getConferenceRoom(conf);
  const date: Date = new Date(conf.begin * 1000);

  document.getElementById('modal-title').innerText = conf.title;
  document.getElementById('modal-subtitle').innerText = conf.subtitle;
  document.getElementById('modal-presenters').innerText = conf.presenters.join(' - ');
  document.getElementById('modal-description').innerText = conf.description;
  document.getElementById('modal-misc').innerText = room.name + ' - ' + date.toLocaleDateString() + ' - ' + date.toLocaleTimeString();
  document.getElementById('modal-link').setAttribute('href', '#/lives/' + room.id); // TODO
  document.getElementById('modal').style.visibility = 'visible';
};

const Conference = (props: ConferenceProps): ReactElement => {
  const date: Date = new Date(props.conference.begin * 1000);
  return (
    <article onClick={() => showModal(props.conference.id)}>
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
