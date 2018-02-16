import React from "react";
import styed from "styled-components";

const Card = styed.div`
  width: 280px
`;

export default ({title, projectName, page, picture, children}) =>
  <Card className="card">
    <a rel="nofollow" href={page} target="_blank">
      <img className="card-img-top" src={picture} alt={projectName}/>
    </a>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">
        {children}
      </p>
      <div className="btn-group">
        <a target="_blank" rel="nofollow" role="button" href={page}
           className="btn btn-primary btn-sm">
          Check live <i className="fa fa-external-link-square"/></a>
        <a role="button" rel="nofollow" href={`https://github.com/rubenspgcavalcante/${projectName}`}
           className="btn btn-secondary btn-sm" target="_blank">
          Check on Github <i className="fa fa-github"/></a>
      </div>
    </div>
  </Card>