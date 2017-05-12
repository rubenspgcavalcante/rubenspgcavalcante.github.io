import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { ArticleEntry, MainTemplate } from "./modules/ui/index";
import { ActionFactory, store } from "./modules/core/index";

//Map the used properties from state
function mapStatesToProps(state) {
  return {
    // Set initial state here
  };
}
const AppEnv = connect(mapStatesToProps)(MainTemplate);

module.exports = {
  ArticleEntry,
  AppEnv,
  store
};