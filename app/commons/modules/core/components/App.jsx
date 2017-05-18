import React, { Component } from "react";
import { Route, Router } from "react-router";
import { Provider } from "react-redux";
import ReactGA from "react-ga";

import store from "../store/store";
import history from "../routes/history";

//Already binds the provider with the application store and receives the application environment
export default class App extends Component {
  render() {
    const ConnectedTemplate = this.props.env;
    return (
      <Provider store={store} >
        <Router history={history} onUpdate={trackPage} >
          <Route path="/" component={this.props.env} >
            <ConnectedTemplate>
              {this.props.children}
            </ConnectedTemplate>
          </Route>
        </Router>
      </Provider>
    )
  }
}

function trackPage() {
  const { pathname, search } = window.location;
  const page = pathname + search;

  ReactGA.set({ page });
  ReactGA.pageview(page);
}