import { combineReducers } from 'redux';
import { reducers as coreReducers } from './modules/core/index';

export default combineReducers({ ...coreReducers })