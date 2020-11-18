import React from 'react';
import ReactDOM from 'react-dom';
import ConferenceEntry from './ConferenceEntry';
import Header from './Header';

const App = () => (
  <React.Fragment>
    <Header />
    <h1>GreenTech Rouen 2020</h1>
    {<ConferenceEntry room='Room 001' date='2016-01-04 10:34:23' name='conf' description='desc' authors={['a', 'b', 'c']} />}
  </React.Fragment>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
