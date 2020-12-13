import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { getRooms } from './data';

import './Rooms.scss';

interface RoomsProps {
  to: string;
}

const Rooms = (props: RoomsProps): ReactElement => (
  <div className="rooms">
    {getRooms().map((room) => (
      <NavLink key={room.id} className="room" to={props.to + room.id}>{room.name}</NavLink>
    ))}
  </div>
);

export default Rooms;
