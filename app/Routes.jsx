import React from 'react';
import { Route } from "react-router-dom";
import { AsyncModuleRenderer } from 'modules/core/index';
import * as modules from './modules';

export default () => (
  <div>
    {Object.keys(modules).map((moduleKey) => {
      const moduleDef = modules[moduleKey];
      const { order, id, label, route, module$ } = moduleDef;

      const LazyComponent = () =>
        <AsyncModuleRenderer order={order} label={label} id={id} module$={module$} route={route}/>;

      return <Route key={id} path={route} component={LazyComponent} exact={true}/>;
    })}
  </div>
);