import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Conferences from './Conferences';
import Header from './Header';
import Lives from './Lives';
import Presentation from './Presentation';
import Planning from './Planning';
import { ModalProvider } from './Modal';

import './index.scss';

const App = () => (
  <Router>
    <ModalProvider>
      <Header />
      <Switch>
        <Route exact path="/" component={Presentation} />
        <Route path="/conferences" component={Conferences} />
        <Route path="/planning" component={Planning} />
        <Route path="/lives" component={Lives} />
      </Switch>
    </ModalProvider>
  </Router>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
