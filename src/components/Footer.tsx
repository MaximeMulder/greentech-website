import React, { ReactElement } from 'react';

import mail from '../images/mail.png';
import linkedin from '../images/linkedin.png';
import twitter from '../images/twitter.svg';
import './Footer.scss';

const Footer = (): ReactElement => (
  <footer className="footer">
    <div className="footer-part">
      <div className="footer-title">Partenaires</div>
      <div className="footer-list"></div>
    </div>
    <div className="footer-part">
      <div className="footer-title">Contact</div>
      <div className="footer-list">
        <a href="https://twitter.com/greentechrouen">
          <img className="footer-logo" src={twitter} />
        </a>
        <a href="https://www.linkedin.com/company/greentech-rouen/">
          <img className="footer-logo" src={linkedin} />
        </a>
        <a href="mailto:greentech.rouen@gmail.com">
          <img className="footer-logo" src={mail} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
