import React, { Component, ReactElement } from 'react';
import { Link, NavLink } from 'react-router-dom';

import burger from '../images/burger.svg';
import logo from '../images/logo-dark.svg';
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

    this.toggle = this.toggle.bind(this);
    this.fold = this.fold.bind(this);
  }

  componentDidMount(): void {
    window.matchMedia('(min-width: 860px)').addEventListener('change', this.fold);
  }

  render(): ReactElement {
    return (
      <header className="header">
        <Link to="/">
          <img className="header-logo" src={logo} alt="Logo GreenTech" />
        </Link>
        <img className="header-burger" src={burger} alt="Burger menu" onClick={this.toggle} />
        <nav className={'header-navigation' + (this.state.burger ? ' active' : '')}>
          <NavLink className="header-link" exact to="/" onClick={this.fold}>PRESENTATION</NavLink>
          <NavLink className="header-link" to="/conferences" onClick={this.fold}>CONFERENCES</NavLink>
          <NavLink className="header-link" to="/planning" onClick={this.fold}>PLANNIFICATION</NavLink>
          <NavLink className="header-link" to="/lives" onClick={this.fold}>DIFFUSIONS</NavLink>
        </nav>
      </header>
    );
  }

  toggle(): void {
    this.setState((state) => ({
      burger: !state.burger
    }));
  }

  fold(): void {
    this.setState({
      burger: false
    });
  }
}

export default Header;
