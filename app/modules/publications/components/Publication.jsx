import React from "react";
import AsyncComponent from "../../core/components/AsyncComponent";
import ProgressiveImageLoader from "../../ui/components/ProgressiveImageLoader";

export default ({ id, title, link }) =>
  <div className="publication">
    <div className="card">
      <div className="card-header text-center">
        <h6 className="card-title">{title}</h6>
      </div>
      <div className="card-body">
        <a rel="nofollow" href={link} target="_blank">
          <AsyncComponent promise={import(`assets/publications/${id}.png`)}>
            {(img) => <ProgressiveImageLoader image={img} alt={id}/>}
          </AsyncComponent>
        </a>
      </div>
      <div className="card-footer text-right">
        <small><i className="fa fa-medium text-muted"/> Published on Medium</small>
      </div>
    </div>
  </div>