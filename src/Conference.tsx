import React, { ReactElement } from 'react';
import { ConferenceData, getConferenceRoom } from './data';
import { Link } from 'react-router-dom';

import cross from './images/cross.svg';

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
        <div className="modal-block">
          <div className="modal-content">
            <div className="modal-close">
              <span className="modal-close-button" onClick={() => closeModal('modal-' + props.conference.id)}><img src={cross} width="20" height="20"></img></span>
            </div>
            <div className="conference-title">{props.conference.title}</div>
            <br />
            <div className="conference-subtitle">{props.conference.subtitle}</div>
            <br />
            {props.conference.presenters.join(' - ')}
            <br /><br />
            <div className="conference-description">{props.conference.description}</div>
            <br />
            <p>{getConferenceRoom(props.conference).name} - {date.toLocaleDateString()} - {date.toLocaleTimeString()}</p>
            <br />
          </div>
          <Link className="btn" to={'/lives/' + getConferenceRoom(props.conference).id}>VOIR LE LIVE</Link>
        </div>
        <div className="modal-around" onClick={() => closeModal('modal-' + props.conference.id)}></div>
      </div>
    </React.Fragment>
  );
};

export default Conference;
