import React, { ReactElement } from 'react';
import Timer from './Timer';
import { getConferences } from './data';

import cameraImage from './images/logo-dark.svg';
import greenDiscover from './images/logo-dark.svg';
import './Presentation.scss';

const Presentation = (): ReactElement => (
  <React.Fragment>
    <div className="background-green">
      <div className="overlay-gray">
        <h1 className="main-title">GreenTech</h1>
        <p>Webinaire sur les thématiques Ville Durable et Industrie 4.0 organisé par des étudiants du CESI Rouen.</p>
      </div>
    </div>
    <div className="container-fluid discover">
      <div className="row discover__row">
        <div className="col-xl-6 col-sm-12 discover__left mobile-pad">
          <img src={cameraImage} className="discover__main-image" />
        </div>
        <div className="col-xl-6 col-sm-12 discover__right">
          <img src={greenDiscover} className="discover__sec-image" />
          <a href="#">
            <div className="bg-button">
              Decouvrez notre programme
            </div>
          </a>
        </div>
      </div>
    </div>
    <div className="container-fluid chronometer">
      <div className="chronometer__title">
        Debut des conferences dans :
      </div>
      <div className="chronometer__value">
        <Timer time={getConferences().reduce((a, b) => a.begin < b.begin ? a : b).begin} />
      </div>
    </div>
  </React.Fragment>
);

export default Presentation;
