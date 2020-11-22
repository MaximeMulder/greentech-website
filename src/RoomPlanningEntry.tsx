import React from 'react';
import { ConferenceData } from './Data';

interface RoomPlanningEntryProps {
    conferences: ConferenceData[];
}

const RoomPlanningEntry = (props: RoomPlanningEntryProps) => {

  let arr = [];
  for(let i = 8; i <= 18; i++) {
    arr.push(i);
    <React.Fragment>
        i 
        {props.conferences.map(conference => (
          <React.Fragment>
            <div>
              {conference.name}
            </div>
          </React.Fragment>
        ))}
    </React.Fragment>
  }

};

export default RoomPlanningEntry;
