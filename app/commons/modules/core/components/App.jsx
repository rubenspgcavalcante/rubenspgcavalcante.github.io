import React, { Component } from "react";
import { hashHistory, Route, Router } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import { Provider } from "react-redux";
import store from "../store/store";

const history = syncHistoryWithStore(hashHistory, store);

//Already binds the provider with the application store and receives the application environment
export default class App extends Component {
  render() {
    const ConnectedTemplate = this.props.env;

    return (
      <Provider store={store} >
        <Router history={history} >
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