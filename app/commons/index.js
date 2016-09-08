import {bindActionCreators} from "redux";
import { connect } from 'react-redux';

import MainTemplate from "./components/MainTemplate.jsx";
import ArticleEntry from "./components/ArticleEntry.jsx";
import ActionFactory from "./factories/actions.factory";

import store from "./store/store";

//Map the used properties from state
function mapStatesToProps(state) {
    return {
        // Set initial state here
    };
}

//Bind the action factory to the dispatcher
function mapDispatchToProps(dispatcher) {
    return bindActionCreators(new ActionFactory(), dispatcher);
}

const AppEnv = connect(mapStatesToProps, mapDispatchToProps)(MainTemplate);
module.exports = {
    AppEnv,
    ArticleEntry,
    store
};