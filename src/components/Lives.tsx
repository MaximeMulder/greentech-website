import React, { ReactElement } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Content from './Content';
import Live from './Live';
import Rooms from './Rooms';

const Lives = (): ReactElement => (
  <Content>
    <Rooms to="/lives/" />
    <Routes>
      <Route path=":live" element={<Live />} />
      <Route path="*" element={<Navigate to="/lives/0" />} />
    </Routes>
  </Content>
);

export default Lives;
