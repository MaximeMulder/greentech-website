import React, { ReactElement } from 'react';
import { RoomData, getRoomConferences, ConferenceData } from './data';
import PlanningGroup from './PlanningGroup';

interface PlanningLiveProps {
  room: RoomData;
}

function sorter(a: ConferenceData, b: ConferenceData): number {
  return a.begin - b.begin;
}

function reducer(groups: ConferenceData[][], conference: ConferenceData): ConferenceData[][] {
  for (const group of groups) {
    if (conference.begin == group[group.length - 1].end) {
      group.push(conference);
      return groups;
    }
  }

  groups.push([conference]);
  return groups;
}

const PlanningLive = (props: PlanningLiveProps): ReactElement => (
  <div className="planning-room">
    <h2 className="planning-room-name">{props.room.name}</h2>
    <div className="planning-room-groups">
      {getRoomConferences(props.room).sort(sorter).reduce(reducer, []).map((group, i) => (
        <PlanningGroup key={i} {...{ group }} />
      ))}
    </div>
  </div>
);

export default PlanningLive;
