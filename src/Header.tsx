import React, { Component, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import burger from './images/burger.svg';
import logo from './images/logo-dark.svg';
import './Header.scss';

interface HeaderState {
  burgerToggle: boolean
}

class Header extends Component<{}, HeaderState> {
  constructor(props: {}) {
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
        <img className="logo" src={logo} alt="Logo GreenTech" />
        <img className={'burger' + (this.state.burgerToggle && ' active')} src={burger} alt="Burger menu" onClick={this.handleClick} />
        <nav>
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
