import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import Timer from './Timer';
import { getConferences } from './data';

import logo from './images/logo-dark.svg';
import './Presentation.scss';

const Presentation = (): ReactElement => (
  <React.Fragment>
    <div className="presentation-background">
      <h1 className="presentation-title">GREENTECH</h1>
      <p className="presentation-paragraph">WEBINAIRE SUR LES THEMATIQUES VILLE DURABLE ET INDUSTRIE 4.0 ORGANISE PAR LES ETUDIANTS DU CESI ROUEN.</p>
    </div>
    <div className="presentation-program">
      <img className="presentation-logo" src={logo} />
      <Link className="presentation-button" to="/planning">DECOUVREZ NOTRE PROGRAMME </Link>
    </div>
    <div className="presentation-timer">
      <div className="presentation-catchphrase">DEBUT DES CONFERENCES DANS:</div>
      <Timer time={getConferences().reduce((a, b) => a.begin < b.begin ? a : b).begin} />
    </div>
  </React.Fragment>
);

export default Presentation;
