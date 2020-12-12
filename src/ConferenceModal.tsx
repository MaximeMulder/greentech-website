import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { withModal } from './Modal';

import { ConferenceData, getConferenceRoom } from './data';

import cross from './images/cross.svg';

interface ConferenceModalProps {
  conference: ConferenceData;
  setModal: (element: ReactElement) => void;
}

const ConferenceModal = (props: ConferenceModalProps): ReactElement => {
  const date: Date = new Date(props.conference.begin * 1000);
  return (
    <div className="modal">
      <div className="modal-block">
        <div className="modal-content">
          <div className="modal-close">
            <img src={cross} width="20" height="20" onClick={() => props.setModal(null)}></img>
          </div>
          <div className="conference-title">{props.conference.title}</div>
          <br />
          <div className="conference-subtitle">{props.conference.subtitle}</div>
          <br />
          <div>{props.conference.presenters.join(' - ')}</div>
          <br />
          <div className="conference-description">{props.conference.description}</div>
          <br />
          <p>{getConferenceRoom(props.conference).name} - {date.toLocaleDateString()} - {date.toLocaleTimeString()}</p>
        </div>
        <Link className="btn" to={'/lives/' + getConferenceRoom(props.conference).id} onClick={() => props.setModal(null)}>VOIR LE LIVE</Link>
      </div>
      <div className="modal-around" onClick={() => props.setModal(null)}></div>
    </div>
  );
};

export default withModal(ConferenceModal);
