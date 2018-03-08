import React from "react";
import AsyncComponent from "modules/core/components/AsyncComponent";
import ProgressiveImageLoader from "modules/ui/components/ProgressiveImageLoader";
import { importWithTrace } from "modules/core/utils/image";

const thumbImporter = (projectName, ext) =>
  import(
    /* webpackChunkName: "project-" */
    /* webpackMode: "eager" */
    `assets/projects/${projectName}.${ext}`
    );

const thumbPromise = pName =>
  importWithTrace(thumbImporter(pName, 'png'), thumbImporter(pName, 'webp'));

export default ({ projectName, url }) =>
  <a rel="nofollow" href={url} target="_blank">
    <AsyncComponent
      promise={thumbPromise(projectName)}>{(path) =>
      <ProgressiveImageLoader className="card-img-top" image={path} alt={projectName}/>
    }
    </AsyncComponent>
  </a>