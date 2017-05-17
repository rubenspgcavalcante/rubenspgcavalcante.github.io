import {hashHistory} from 'react-router';
import store from '../store/store';
import { syncHistoryWithStore } from "react-router-redux";

export default syncHistoryWithStore(hashHistory, store);