import { createStore } from "redux";

// import the root reducer
import rootReducer from "../reducers/root";

// create an object for the default data
const defaultState = {};

const store = createStore(rootReducer, defaultState, window.devToolsExtension ? window.devToolsExtension() : f => f);

if (module.hot) {
  module.hot.accept('../reducers/root', () => {
    const nextRootReducer = require('../reducers/root').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
