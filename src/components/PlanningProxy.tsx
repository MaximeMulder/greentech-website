import React, { ReactElement } from 'react';
import { useParams } from 'react-router';
import PlanningRoom from './PlanningRoom';
import { getRoom } from '../data';

interface PlanningProxyParams {
  room: string,
}

const PlanningProxy = (): ReactElement => {
  const room = useParams<PlanningProxyParams>().room;
  return (
    <PlanningRoom room={getRoom(room ? Number(room) : 0)} />
  );
};

export default PlanningProxy;
