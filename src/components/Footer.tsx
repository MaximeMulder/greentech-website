import React, { ReactElement } from 'react';

import cesi from '../images/cesi.svg';
import mail from '../images/mail.svg';
import linkedin from '../images/linkedin.svg';
import twitter from '../images/twitter.svg';
import './Footer.scss';

const Footer = (): ReactElement => (
  <footer className="footer">
    <div className="footer-part">
      <div className="footer-title">Partenaires</div>
      <div className="footer-list">
        <img className="footer-image" src={cesi} />
      </div>
    </div>
    <div className="footer-part">
      <div className="footer-title">Contact</div>
      <div className="footer-list">
        <a href="https://twitter.com/greentechrouen" target="_blank" rel="noreferrer">
          <img className="footer-image" src={twitter} />
        </a>
        <a href="https://www.linkedin.com/company/greentech-rouen/" target="_blank" rel="noreferrer">
          <img className="footer-image" src={linkedin} />
        </a>
        <a href="mailto:greentech.rouen@gmail.com" target="_blank" rel="noreferrer">
          <img className="footer-image" src={mail} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
