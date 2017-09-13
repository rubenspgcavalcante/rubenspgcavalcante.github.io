import React from 'react';
import { Link } from 'react-router-dom';
import values from 'lodash/values';
import sortBy from 'lodash/sortBy';

const RouteLink = ({ label, route, active }) =>
  <li className='nav-item' ><Link className={`nav-link ${active ? 'active' : ''}`} to={route} >{label}</Link ></li >;

export default ({ modules, location }) => (
  <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark" >
    <a className="navbar-brand" href="#" >Navbar</a >
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation" >
      <span className="navbar-toggler-icon" />
    </button >

    <div className="collapse navbar-collapse" id="navbarsExampleDefault" >
      <ul className="navbar-nav mr-auto" >
        {sortBy(values(modules), 'order').map(({ id, label, route }) =>
          <RouteLink key={id} route={route} label={label} active={location.pathname === route} />)
        }
      </ul >
    </div >
  </nav >
);