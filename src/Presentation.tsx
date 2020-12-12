import React, { Component, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import './Presentation.scss';
import cameraImage from './images/logo-dark.svg';
import greenDiscover from './images/logo-dark.svg';

const Presentation = (): ReactElement => (
  <React.Fragment>
    <div className="container-fluid background-green">
      <div className="overlay-gray">
        <h1 className="main-title">GreenTech</h1>
      </div>
    </div>
    <div className="container-fluid discover">
      <div className="row">
        <div className="col-6">
          <img src={cameraImage} className="discover__main-image" />
        </div>
        <div className="col-6">
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
        Début des conférences dans :
      </div>
      <div className="chronometer__value">
        23 Jours 04 heures 50 min et 12 sec
      </div>

    </div>
  </React.Fragment>
);

export default Presentation;
class Test {
  render(): ReactElement {
    return (
      <div className="container-fluid">
        Test2
      </div>
    );
  }
}
