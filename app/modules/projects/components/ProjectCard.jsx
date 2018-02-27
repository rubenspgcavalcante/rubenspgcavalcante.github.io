import React from "react";
import styled from "styled-components";
import AsyncComponent from "modules/core/components/AsyncComponent";
import ProgressiveImageLoader from "modules/ui/components/ProgressiveImageLoader";

const Card = styled.div`
  width: 280px;
`;

const repoUrl = name => `https://github.com/rubenspgcavalcante/${name}`;

export default ({ title, project_name, page, picture, description }) =>
  <Card className="card">
    <a rel="nofollow" href={page || repoUrl(project_name)} target="_blank">
      <AsyncComponent promise={import(`assets/projects/${project_name}.png`)}>{(path) =>
        <ProgressiveImageLoader className="card-img-top" image={path} alt={project_name}/>
      }
      </AsyncComponent>
    </a>
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
        <a role="button" rel="nofollow" href={repoUrl(project_name)}
           className="btn btn-secondary btn-sm" target="_blank">
          Check on Github <i className="fa fa-github"/></a>
      </div>
    </div>
  </Card>