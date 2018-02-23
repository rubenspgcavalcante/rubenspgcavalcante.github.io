import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import modules from "./modules/core/reducers/modules";
import loading from "./modules/core/reducers/loading";

export default (() => {
  const store = createStore(createReducer(),
    composeWithDevTools(
      applyMiddleware(thunk)
    ));
  store.async = {};

  return store;
})();

export function registerReducer(store, name, reducer) {
  store.async[name] = reducer;
  store.replaceReducer(createReducer(store.async));
}

function createReducer(reducers) {
  return combineReducers({
    modules,
    loading,
    ...reducers
  });
}