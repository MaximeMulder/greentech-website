import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { withModal } from './Modal';
import { ConferenceData, getConferenceRoom } from '../data';
import { getDate, getTime } from '../date';

import close from '../images/close.svg';

interface ConferenceModalProps {
  conference: ConferenceData;
  setModal: (element: ReactElement) => void;
}

const ConferenceModal = (props: ConferenceModalProps): ReactElement => {
  const date: Date = new Date(props.conference.begin * 1000);
  return (
    <div className="modal">
      <div className="modal-block">
        <img className="modal-close" src={close} onClick={() => props.setModal(null)} />
        <div className="modal-content">
          <div className="conference-title">{props.conference.title}</div>
          <br />
          <div className="conference-subtitle">{props.conference.subtitle}</div>
          <br />
          <div>{props.conference.presenters.join(' - ')}</div>
          <br />
          <div className="conference-description">{props.conference.description}</div>
          <br />
          <p>{getConferenceRoom(props.conference).name} - {getDate(date)} - {getTime(date)}</p>
        </div>
        <Link className="modal-button" to={'/lives/' + getConferenceRoom(props.conference).id} onClick={() => props.setModal(null)}>VOIR LE LIVE</Link>
      </div>
      <div className="modal-overlay" onClick={() => props.setModal(null)}></div>
    </div>
  );
};

export default withModal(ConferenceModal);
