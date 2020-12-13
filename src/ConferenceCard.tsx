import React, { ReactElement } from 'react';
import { withModal } from './Modal';
import ConferenceModal from './ConferenceModal';
import { ConferenceData, getConferenceRoom } from './data';

interface ConferenceCardProps {
  conference: ConferenceData;
  setModal: (element: ReactElement) => void;
}

const ConferenceCard = (props: ConferenceCardProps): ReactElement => {
  const date: Date = new Date(props.conference.begin * 1000);
  return (
    <article className="conference-card" onClick={() => props.setModal(<ConferenceModal conference={props.conference} />)}>
      <div className="left">
        <div className="roomName">
          {getConferenceRoom(props.conference).name}
        </div>
        <div className="date">
          {date.toLocaleDateString()} &nbsp; {date.toLocaleTimeString()}
        </div>
      </div>
      <div className="conference-summary">
        <div className="conference-title">{props.conference.title}</div>
        <div className="conference-subtitle">{props.conference.subtitle}</div>
        {props.conference.presenters.join(' - ')}
      </div>
    </article>
  );
};

export default withModal(ConferenceCard);
