import React, { Component, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

class Header extends Component {
  constructor(props: never) {
    super(props);

    this.burgerToggle = this.burgerToggle.bind(this);
  }

  burgerToggle() {
    document.getElementById('burgerToggle').classList.toggle('pressed');
  }

  render(): ReactElement {
    return (
      <header>
        <img src="greentech-logo.png" alt="Logo GreenTech" />
        <div id="burgerToggle" onClick={this.burgerToggle}>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="34px" height="27px" viewBox="0 0 34 27" enableBackground="new 0 0 34 27">
            <rect fill="#FFFFFF" width="34" height="4"/>
            <rect y="11" fill="#FFFFFF" width="34" height="4"/>
            <rect y="23" fill="#FFFFFF" width="34" height="4"/>
          </svg>
        </div>
        <nav onClick={this.burgerToggle}>
          <Link to="/">Présentation</Link>
          <Link to="/conferences">Conférences</Link>
          <Link to="/planning">Plannification</Link>
          <Link to="/lives">Diffusions</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
