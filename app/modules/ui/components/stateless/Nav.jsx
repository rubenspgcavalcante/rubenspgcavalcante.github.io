import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import $ from "jquery";
import values from 'lodash/values';
import sortBy from 'lodash/sortBy';

import '../style/_nav.scss';

const RouteLink = ({ label, route, active, onClick }) =>
  <li className='nav-item'><Link onClick={onClick} className={`nav-link ${active ? 'active' : ''}`}
                                 to={route}>{label}</Link></li>;

export default class Nav extends PureComponent {
  render() {
    const { location, modules } = this.props;

    return (
      <nav className="navbar navbar-dark navbar-expand-md fixed-top bg-dark">
        <a className="navbar-brand" href="#">Rubens Pinheiro</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#appNavbar"
                aria-controls="appNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>

        <div className="collapse navbar-collapse" id="appNavbar" ref={nav => this.nav = nav}>
          <ul className="navbar-nav mr-auto">
            {sortBy(values(modules), 'order').map(({ id, label, route }) =>
              <RouteLink key={id} onClick={() => $(this.nav).collapse('hide')} route={route} label={label}
                         active={location.pathname === route}/>)
            }
          </ul>
        </div>
      </nav>
    );
  }
}