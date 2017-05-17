import React from 'react';
import { IndexRoute, Route } from "react-router";
import routes from "../routes/routes";
import history from "../routes/history";
import googleAnalytics from "../../utils/google-analytics";

export default class RouterFactory {
  static syncRoutesWithGoogleAnalytics() {
    history.listen((location, action) => {
      googleAnalytics.pageView(location.pathname);
    });
  }

  static buildRoutes() {
    return routes.map(route => {
      if (route.index) {
        return <IndexRoute key="index-route" {...route}/>
      }
      else {
        return <Route key={route.path} {...route} ></Route>
      }
    })

  }
}