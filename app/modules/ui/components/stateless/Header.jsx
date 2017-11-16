import React from 'react';
import find from 'lodash/find';
import values from 'lodash/values';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import '../style/_header.scss';
import Banner from "./Banner";

export default ({ modules, location }) => {
  const module = find(values(modules), { route: location.pathname });
  if (!module) {
    return null;
  }

  const { title, subtitle, picture } = module;
  return (
    <div className="jumbotron" >
      <CSSTransitionGroup transitionName='banner-change' transitionEnterTimeout={1000} transitionLeaveTimeout={1000}
                          transitionEnter={false} >
        <Banner PICTURE={picture} key={picture} />
      </CSSTransitionGroup >
      <div className="container" >
        <h1 className="display-3" >{title}</h1 >
        <p >{subtitle}</p >
      </div >
    </div >
  );
}