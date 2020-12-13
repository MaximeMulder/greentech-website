import React, { Component, ReactElement } from 'react';
import { Link, NavLink } from 'react-router-dom';

import burger from './images/burger.svg';
import logo from './images/logo-dark.svg';
import './Header.scss';

interface HeaderState {
  burger: boolean
}

class Header extends Component<{}, HeaderState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      burger: false
    };

    this.burger = this.burger.bind(this);
  }

  componentDidMount(): void {
    const handler = () => this.setState(() => ({
      burger: false,
    }));

    window.matchMedia('(min-width: 720px)').addEventListener('change', handler);
  }

  burger(): void {
    this.setState((state) => ({
      burger: !state.burger
    }));
  }

  render(): ReactElement {
    return (
      <header className="header">
        <Link to="/">
          <img className="header-logo" src={logo} alt="Logo GreenTech" />
        </Link>
        <img className="header-burger" src={burger} alt="Burger menu" onClick={this.burger} />
        <nav className={'header-navigation' + (this.state.burger ? ' active' : '')}>
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
