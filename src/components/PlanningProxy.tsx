import React, { ReactElement } from 'react';
import { useParams } from 'react-router';
import PlanningRoom from './PlanningRoom';
import { getRoom } from '../data';

const PlanningProxy = (): ReactElement => {
  const room = useParams().room;
  return (
    <PlanningRoom room={getRoom(room ? Number(room) : 0)} />
  );
};

export default PlanningProxy;
