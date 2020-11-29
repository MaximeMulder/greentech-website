import React, { ReactElement } from 'react';
import { LiveData, getLiveConferences } from './data';
import PlanningConference from './PlanningConference';

interface PlanningLiveProps {
    live: LiveData;
}

const PlanningLive = (props: PlanningLiveProps): ReactElement => (
  <div className="roomComponent">
    <h2 className="roomTitle">{props.live.name}</h2>
    {getLiveConferences(props.live).map((conference) => (
      <React.Fragment key={conference.id}>
        <PlanningConference conference={conference}/>
      </React.Fragment>
    ))}
    <table>
      <tr>8h</tr>
      <tr/><tr/><tr/>
      <tr>12h</tr>
      <tr/><tr/><tr/>
      <tr>16h</tr>
      <tr/><tr/><tr/>
    </table>
  </div>
);

export default PlanningLive;
