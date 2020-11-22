import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <React.Fragment>
    <header>
      <img src="greentech-logo.png" alt="Logo GreenTech" />
      <div>
        <Link to="/">Présentation</Link>
        <Link to="/conferences">Conférences</Link>
        <Link to="/planning">Plannification</Link>
        <Link to="/lives">Diffusions</Link>
      </div>
    </header>
  </React.Fragment>
);

export default Header;
