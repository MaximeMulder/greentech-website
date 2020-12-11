import React, { Component, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from './images/logo-dark.svg';
import './Header.scss';

interface HeaderState {
  burgerToggle: boolean
}

class Header extends Component<unknown, HeaderState> {
  constructor(props: never) {
    super(props);
    this.state = { burgerToggle: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(): void {
    this.setState((state) => ({
      burgerToggle: !state.burgerToggle
    }));
  }

  render(): ReactElement {
    return (
      <header>
        <img src={Logo} alt="Logo GreenTech" />
        <div id="burgerToggle" className={this.state.burgerToggle ? 'pressed' : ''} onClick={this.handleClick}>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="34px" height="27px" viewBox="0 0 34 27" enableBackground="new 0 0 34 27">
            <rect fill="#FFFFFF" width="34" height="4" />
            <rect y="11" fill="#FFFFFF" width="34" height="4" />
            <rect y="23" fill="#FFFFFF" width="34" height="4" />
          </svg>
        </div>
        <nav onClick={this.handleClick}>
          <NavLink className="header-link" exact to="/">PRESENTATION</NavLink>
          <NavLink className="header-link" to="/conferences">CONFERENCES</NavLink>
          <NavLink className="header-link" to="/planning">PLANNIFICATION</NavLink>
          <NavLink className="header-link" to="/lives">DIFFUSIONS</NavLink>
        </nav>
      </header>
    );
  }
}

export default Header;
