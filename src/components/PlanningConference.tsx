import React, { ReactElement } from 'react';
import ConferenceModal from './ConferenceModal';
import { withModal } from './Modal';
import PlanningTime from './PlanningTime';
import { ConferenceData } from '../data';

interface PlanningConferenceProps {
  conference: ConferenceData;
  setModal: (modal: ReactElement) => void;
}

const PlanningConference = (props: PlanningConferenceProps): ReactElement => (
  <div className="planning-conference" style={{
    height: (props.conference.end - props.conference.begin) / 40
  }} onClick={() => props.setModal(<ConferenceModal conference={props.conference} />)}>
    <PlanningTime time={props.conference.begin} limit={'start'} />
    {props.conference.title}
  </div>
);

export default withModal(PlanningConference);
