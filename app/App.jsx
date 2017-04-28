import React from "react";
import { render } from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.sass";

import { AppEnv } from "./commons";
import RouterFactory from "./commons/modules/core/factories/router.factory";
import AppRouter from "./commons/modules/core/components/AppRouter.jsx";

const faviconElement = document.querySelector('link[rel="shortcut icon"]');
faviconElement.href = favicon;

const appRouter = (
  <AppRouter env={AppEnv} >
    {RouterFactory.buildRoutes()}
  </AppRouter>
);

render(appRouter, document.getElementById('root'));