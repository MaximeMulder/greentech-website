import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import Modal, { withModal } from './Modal';
import { ConferenceData, getConferenceRoom } from '../data';
import { getDate, getTime } from '../date';

interface ConferenceModalProps {
  conference: ConferenceData;
  setModal: (element: ReactElement) => void;
}

const ConferenceModal = (props: ConferenceModalProps): ReactElement => {
  const date = new Date(props.conference.begin * 1000);
  return (
    <Modal setModal={props.setModal}>
      <div>
        <div className="conference-title">{props.conference.title}</div>
        <br />
        <div className="conference-subtitle">{props.conference.subtitle}</div>
        <br />
        <div>{props.conference.presenters.join(' - ')}</div>
        <br />
        <div className="conference-description">{props.conference.description}</div>
        <br />
        <p>{getConferenceRoom(props.conference).name} - {getDate(date)} - {getTime(date)}</p>
        <br />
      </div>
      <Link className="conference-button" to={'/lives/' + getConferenceRoom(props.conference).id} onClick={() => props.setModal(null)}>VOIR LE LIVE</Link>
    </Modal>
  );
};

export default withModal(ConferenceModal);
