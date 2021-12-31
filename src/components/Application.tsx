import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Conferences from './Conferences';
import Footer from './Footer';
import Header from './Header';
import Lives from './Lives';
import Presentation from './Presentation';
import Planning from './Planning';
import { ModalProvider } from './Modal';

import './Application.scss';

const Application = (): ReactElement => (
  <BrowserRouter>
    <ModalProvider>
      <div className="application">
        <Header />
        <Routes>
          <Route path="/*" element={<Presentation />} />
          <Route path="/conferences" element={<Conferences />} />
          <Route path="/planning/*" element={<Planning />} />
          <Route path="/lives/*" element={<Lives />} />
        </Routes>
        <Footer />
      </div>
    </ModalProvider>
  </BrowserRouter>
);

export default Application;
