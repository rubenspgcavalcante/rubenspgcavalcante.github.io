import React, {Component} from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import store from '../store/store';

//Already binds the provider with the application store and receives the application environment
export default class AppRouter extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={hashHistory}>
                    <Route path="/" component={this.props.env}>
                        {this.props.children}
                    </Route>
                </Router>
            </Provider>
        )
    }
}