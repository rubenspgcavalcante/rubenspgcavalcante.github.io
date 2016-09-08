import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory, hashHistory} from 'react-router';

// import the root reducer
import rootReducer from '../reducers/root';

// create an object for the default data
const defaultState = {};

const store = createStore(rootReducer, defaultState, window.devToolsExtension ? window.devToolsExtension() : f => f);
syncHistoryWithStore(hashHistory, store);

if (module.hot) {
    module.hot.accept('../reducers/root', () => {
        const nextRootReducer = require('../reducers/root').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;
