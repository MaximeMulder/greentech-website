import React from 'react';
import data, { ConferenceData } from './Data';
import RoomPlanningEntry from './RoomPlanningEntry';

interface ConfRoomDic {
  [key: string]: ConferenceData[]
}

const Planning = (): JSX.Element => {

  const rooms: ConfRoomDic = { 'room': [] };
  data.conferences.map(e => rooms[e.room].push(e));
  return <React.Fragment>
    {Object.values(rooms).map((e, i) =>
      'Salle ' + i +
      <RoomPlanningEntry key={i} conferences={e} />
    )}
  </React.Fragment>;

};

export default Planning;
