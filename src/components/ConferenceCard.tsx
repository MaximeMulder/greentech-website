import React, { ReactElement } from 'react';
import ConferenceModal from './ConferenceModal';
import { withModal } from './Modal';
import { ConferenceData, getConferenceRoom } from '../data';
import { getDate, getTime } from '../date';

interface ConferenceCardProps {
  conference: ConferenceData;
  setModal: (element: ReactElement) => void;
}

const ConferenceCard = (props: ConferenceCardProps): ReactElement => {
  const date: Date = new Date(props.conference.begin * 1000);
  return (
    <article className="conference" onClick={() => props.setModal(<ConferenceModal conference={props.conference} />)}>
      <div className="conference-location">
        <div className="conference-room">
          {getConferenceRoom(props.conference).name}
        </div>
        <div className="conference-date">
          {getDate(date)} {getTime(date)}
        </div>
      </div>
      <div className="conference-information">
        <div className="conference-title">{props.conference.title}</div>
        <div className="conference-subtitle">{props.conference.subtitle}</div>
        {props.conference.presenters.join(' - ')}
      </div>
    </article>
  );
};

export default withModal(ConferenceCard);
