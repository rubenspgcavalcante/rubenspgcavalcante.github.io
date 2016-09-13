import {bindActionCreators} from "redux";
import { connect } from 'react-redux';

import {MainTemplate, ArticleEntry} from './modules/ui/index';
import {store, AppRouter, ActionFactory} from "./modules/core/index";

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
    ArticleEntry,
    AppEnv,
    store
};