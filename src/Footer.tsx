import React, { ReactElement } from 'react';
import './Footer.scss';
import TwitterLogo from './images/twitter.svg';
import LinkedinLogo from './images/linkedin.png';
import MailLogo from './images/mail.png';

const Footer = (): ReactElement => (
  <footer>
    <div className="container-fluid main-container">
      <div className="row">
        <div className="col-xl-6 col-sm-12 bar">
          <div>
            <p>Partenaires</p>
          </div>
        </div>
        <div className="col-xl-6 col-sm-12 underbar">
          <div>
            <p>Contact</p>
            <div className="partner container">
              <div className="row">
                <div className="col-4">
                  <a href="https://twitter.com"><img src={TwitterLogo} /></a>
                </div>
                <div className="col-4">
                  <a href="https://linkedin.com"><img src={LinkedinLogo} /></a>
                </div>
                <div className="col-4">
                  <a href="mailto:nullepart@mozilla.org"><img src={MailLogo} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
