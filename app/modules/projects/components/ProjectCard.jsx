import React from "react";
import styed from "styled-components";
import AsyncComponent from "../../core/components/AsyncComponent";

const Card = styed.div`
  width: 280px
`;

export default ({ title, project_name, page, picture, description }) =>
  <Card className="card">
    <a rel="nofollow" href={page} target="_blank">
      <AsyncComponent promise={import(`assets/projects/${project_name}.png`)}>{(path) =>
        <img className="card-img-top" src={path.src} alt={project_name}/>
      }
      </AsyncComponent>
    </a>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text" dangerouslySetInnerHTML={{ __html: description }}/>
      <div className="btn-group">
        <a target="_blank" rel="nofollow" role="button" href={page}
           className="btn btn-primary btn-sm">
          Check live <i className="fa fa-external-link-square"/></a>
        <a role="button" rel="nofollow" href={`https://github.com/rubenspgcavalcante/${project_name}`}
           className="btn btn-secondary btn-sm" target="_blank">
          Check on Github <i className="fa fa-github"/></a>
      </div>
    </div>
  </Card>