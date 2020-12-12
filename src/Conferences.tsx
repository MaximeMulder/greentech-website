import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import Conference from './Conference';
import { ConferenceData } from './data';
import './Conferences.scss';
import cross from './images/cross.svg';

interface ConferencesProps {
  conferences: ConferenceData[];
}

const closeModal = () => {
  document.getElementById('modal').style.visibility = 'hidden';
};

const Conferences = (props: ConferencesProps): ReactElement => (
  <React.Fragment>
    {props.conferences.map((conference) => (
      <Conference key={conference.id} {...{ conference }} />
    ))}

    <div id="modal" className="modal">
      <div className="modal-block">
        <div className="modal-content">
          <div className="modal-close">
            <span className="modal-close-button" onClick={closeModal}><img src={cross} width="20" height="20"></img></span>
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
        <Link id="modal-link" className="btn" to="">VOIR LE LIVE</Link>
      </div>
      <div className="modal-around" onClick={closeModal}></div>
    </div>
  </React.Fragment>
);

export default Conferences;
