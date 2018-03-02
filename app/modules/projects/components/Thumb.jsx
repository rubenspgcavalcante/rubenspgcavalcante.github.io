import React from "react";
import AsyncComponent from "modules/core/components/AsyncComponent";
import ProgressiveImageLoader from "modules/ui/components/ProgressiveImageLoader";

export default ({ projectName, url }) =>
  <a rel="nofollow" href={url} target="_blank">
    <AsyncComponent
      promise={import(
        /* webpackChunkName: "project-" */
        /* webpackMode: "eager" */
        `assets/projects/${projectName}.png`
        )}>{(path) =>
      <ProgressiveImageLoader className="card-img-top" image={path} alt={projectName}/>
    }
    </AsyncComponent>
  </a>