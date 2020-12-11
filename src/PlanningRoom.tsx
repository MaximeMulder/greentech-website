import React, { ReactElement } from 'react';
import { RoomData, getRoomConferences, ConferenceData } from './data';
import PlanningGroup from './PlanningGroup';

interface PlanningLiveProps {
  room: RoomData;
}

const PlanningLive = (props: PlanningLiveProps): ReactElement => {
  const groups: ConferenceData[][] = [];
  for (const conference of getRoomConferences(props.room).sort((a, b) => a.begin - b.begin)) {
    const group = groups[groups.length - 1];
    if (conference.begin === group?.[group.length - 1].end) {
      group.push(conference);
    } else {
      groups.push([conference]);
    }
  }

  return (
    <div className="planning-room">
      <h2 className="planning-room-name">{props.room.name}</h2>
      <div className="planning-groups">
        {groups.map((group, i) => (
          <PlanningGroup key={i} {...{ group, next: groups[i + 1] }} />
        ))}
      </div>
    </div>
  );
};

export default PlanningLive;
