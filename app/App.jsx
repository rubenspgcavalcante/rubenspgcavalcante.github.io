import Raven from "raven";
import React from "react";
import { render } from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.sass";

import GoogleAnalytics from './commons/modules/utils/google-analytics';
import { MainTemplate } from "./commons";
import RouterFactory from "./commons/modules/core/factories/router.factory";
import AppRouter from "./commons/modules/core/components/App";

import favicon from "./assets/favicon.ico";

const faviconElement = document.querySelector('link[rel="shortcut icon"]');
faviconElement.href = favicon;

if (process.env.NODE_ENV === 'production') {
  Raven.config('https://82884bd883754f9986c7489eb06340eb@sentry.io/162535').install();
  GoogleAnalytics.install();
}

render(
  <AppRouter env={MainTemplate} >
    {RouterFactory.buildRoutes()}
  </AppRouter>,
  document.getElementById('app')
);