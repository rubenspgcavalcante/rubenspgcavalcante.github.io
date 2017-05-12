import React, { Component } from "react";
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from "react-redux";
import store from "../store/store";
import MainTemplate from "../../ui/components/MainTemplate";

const history = syncHistoryWithStore(hashHistory, store);

//Already binds the provider with the application store and receives the application environment
export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Router history={history} >
          <Route path="/" component={this.props.env} >
            <MainTemplate>
              {this.props.children}
            </MainTemplate>
          </Route>
        </Router>
      </Provider>
    )
  }
}