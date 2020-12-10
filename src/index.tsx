import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import data from './data';
import Header from './Header';
import Presentation from './Presentation';
import Conferences from './Conferences';
import Planning from './Planning';
import Lives from './Lives';
import './index.scss';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Presentation} />
      <Route path="/conferences">
        <Conferences conferences={data.conferences} />
      </Route>
      <Route path="/planning" component={Planning} />
      <Route path="/lives">
        <Lives lives={data.lives} />
      </Route>
    </Switch>
  </Router>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
