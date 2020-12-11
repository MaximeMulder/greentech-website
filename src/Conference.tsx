import React, { ReactElement } from 'react';
import { ConferenceData, getConferenceRoom } from './data';

interface ConferenceProps {
  conference: ConferenceData;
}
const showModal = (name: string) => {
  document.getElementById(name).style.visibility = 'visible';
};

const closeModal = (name: string) => {
  document.getElementById(name).style.visibility = 'hidden';
};

const Conference = (props: ConferenceProps): ReactElement => {
  const date: Date = new Date(props.conference.begin * 1000);
  return (
    <React.Fragment>
      <article onClick={() => showModal('modal-' + props.conference.id)}>
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

      <div id={'modal-' + props.conference.id} className="modal">
        <div className="modal-content">
          <div className="conference-title">{props.conference.title}</div>
          <div className="conference-subtitle">{props.conference.subtitle}</div>
          {props.conference.presenters.join(' - ')}
          <div className="conference-description">{props.conference.description}</div>
          <button onClick={() => closeModal('modal-' + props.conference.id)}>close</button>
        </div>
        <div className="modal-around" onClick={() => closeModal('modal-' + props.conference.id)}></div>
      </div>
    </React.Fragment>
  );
};

export default Conference;
