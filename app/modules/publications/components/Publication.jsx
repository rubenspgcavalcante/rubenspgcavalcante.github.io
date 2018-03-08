import React from "react";
import AsyncComponent from "../../core/components/AsyncComponent";
import ProgressiveImageLoader from "../../ui/components/ProgressiveImageLoader";
import { importWithTrace } from "../../core/utils/image";

const pubImporter = (pubName, ext) =>
  import(
    /* webpackChunkName: "publication-" */
    /* webpackMode: "eager" */
    `assets/publications/${pubName}.${ext}`
    );

const pubPromise = pubName =>
  importWithTrace(pubImporter(pubName, 'png'), pubImporter(pubName, 'webp'));

export default ({ id, title, link }) =>
  <div className="publication">
    <div className="card">
      <div className="card-header text-center">
        <h6 className="card-title">{title}</h6>
      </div>
      <div className="card-body">
        <a rel="nofollow" href={link} target="_blank">
          <AsyncComponent promise={pubPromise(id)}>
            {(img) => <ProgressiveImageLoader image={img} alt={id}/>}
          </AsyncComponent>
        </a>
      </div>
      <div className="card-footer text-right">
        <small><i className="fa fa-medium text-muted"/> Published on Medium</small>
      </div>
    </div>
  </div>