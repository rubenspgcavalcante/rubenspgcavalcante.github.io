import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import runtime from 'serviceworker-webpack-plugin/lib/runtime';

import values from 'lodash/values';
import keyBy from 'lodash/keyBy';

import Routes from './Routes';
import store from './store';
import * as modules from './modules';
import './style/app.scss';

import Content from 'modules/ui/components/stateless/Content';
import { Header, Nav } from 'modules/ui/index';
import { modulesPreLoaded } from './modules/core/actions/modules';

if ('serviceWorker' in navigator) {
  runtime.register();
}

store.dispatch(modulesPreLoaded(keyBy(values(modules), 'id')));

render(
  <Provider store={store}>
    <Router>
      <div>
        <Nav />
        <Header />
        <Content>
          <Routes />
        </Content>
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
);
