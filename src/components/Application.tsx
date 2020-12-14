import React, { ReactElement } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
        <Switch>
          <Route exact path="/" component={Presentation} />
          <Route path="/conferences" component={Conferences} />
          <Route path="/planning" component={Planning} />
          <Route path="/lives" component={Lives} />
        </Switch>
        <Footer />
      </div>
    </ModalProvider>
  </BrowserRouter>
);

export default Application;
