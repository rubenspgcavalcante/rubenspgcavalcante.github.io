import React from "react";
import { render } from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.sass";

import { AppEnv } from "./commons";
import RouterFactory from "./commons/modules/core/factories/router.factory";
import AppRouter from "./commons/modules/core/components/App";

import favicon from './assets/favicon.ico';

const faviconElement = document.querySelector('link[rel="shortcut icon"]');
faviconElement.href = favicon;

render(
  <AppRouter env={AppEnv} >
    {RouterFactory.buildRoutes()}
  </AppRouter>,
  document.getElementById('app')
);