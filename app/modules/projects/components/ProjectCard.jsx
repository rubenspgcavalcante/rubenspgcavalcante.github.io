import React from "react";
import Thumb from "./Thumb";
import { getRepoUrl } from "../../core/utils/github";

export default ({ title, project_name, page, picture, description }) =>
  <div className="card">
    <Thumb projectName={project_name} url={page || getRepoUrl(project_name)}/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text" dangerouslySetInnerHTML={{ __html: description }}/>
    </div>
    <div className="card-footer text-center">
      <div className="btn-group">
        {page
          ? <a target="_blank" rel="nofollow" role="button" href={page}
               className="btn btn-primary btn-sm">
            Check live <i className="fa fa-external-link-square"/></a>
          : null
        }
        <a role="button" rel="nofollow" href={getRepoUrl(project_name)}
           className="btn btn-secondary btn-sm" target="_blank">
          Check on Github <i className="fa fa-github"/></a>
      </div>
    </div>
  </div>