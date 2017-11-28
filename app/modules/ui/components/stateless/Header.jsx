import React, { PureComponent } from 'react';
import find from 'lodash/find';
import values from 'lodash/values';

import CSSTransitionGroup from 'react-addons-css-transition-group';

import '../style/_header.scss';
import Banner from "./Banner";

export default class Header extends PureComponent {
  state = { ready: false };

  componentWillReceiveProps({ modules, location }) {
    const { module$ } = find(values(modules), { route: location.pathname });
    if (module$) {
      this.setState({ ready: false });
      module$.subscribe(() => this.setState({ ready: true }));
    }
    else this.setState({ ready: true });
  }

  render() {
    if (!this.state.ready) {
      return null
    }

    const { modules, location } = this.props;
    const { title, subtitle, picture } = find(values(modules), { route: location.pathname });

    return (
      <div className="jumbotron">
        <CSSTransitionGroup transitionName='banner-change' transitionEnterTimeout={1000} transitionLeaveTimeout={1000}
                            transitionEnter={false}>

          <Banner PICTURE={picture} key={picture}/>

        </CSSTransitionGroup>
        <div className="container">
          <h1 className="display-3">{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  }
}