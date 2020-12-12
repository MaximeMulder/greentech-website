import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { withModal } from './Modal';

import { ConferenceData, getConferenceRoom } from './data';

import cross from './images/cross.svg';

interface ConferenceModalProps {
  conference: ConferenceData;
  setModal: (element: ReactElement) => void;
}

const ConferenceModal = (props: ConferenceModalProps): ReactElement => (
  <div id="modal" className="modal">
    <div className="modal-block">
      <div className="modal-content">
        <div className="modal-close">
          <span className="modal-close-button" onClick={() => props.setModal(null)}><img src={cross} width="20" height="20"></img></span>
        </div>
        <div id="modal-title" className="conference-title"></div>
        <br />
        <div id="modal-subtitle" className="conference-subtitle"></div>
        <br />
        <div id="modal-presenters"></div>
        <br />
        <div id="modal-description" className="conference-description"></div>
        <br />
        <p id="modal-misc"></p>
      </div>
      <Link id="modal-link" className="btn" to={'/lives/' + getConferenceRoom(props.conference).id}>VOIR LE LIVE</Link>
    </div>
    <div className="modal-around" onClick={() => props.setModal(null)}></div>
  </div>
);

export default withModal(ConferenceModal);
