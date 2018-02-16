import React from "react";
import { src as leafletAntPath } from "assets/projects/leaflet-ant-path.png"
import styed from "styled-components";

const Card = styed.div`
  width: 280px
`;

export default () =>
  <Card className="card">
    <a rel="nofollow" href="https://github.com/rubenspgcavalcante/leaflet-ant-path">
      <img className="card-img-top" src={leafletAntPath} alt="Leaflet Ant Path"/>
    </a>
    <div className="card-body">
      <h5 className="card-title">Leaflet Ant Path</h5>
      <p className="card-text">
        A <a href="http://leafletjs.com/" target="_blank" rel="nofollow">Leaflet</a> plugin, to
        create animated polylines, showing where's the start and end using a small dots flux
        similar to ants walking in a line.
      </p>
      <div className="btn-group">
        <a target="_blank" rel="nofollow" role="button" href="http://rubenspgcavalcante.github.io/leaflet-ant-path"
           className="btn btn-primary btn-sm">
          Check live <i className="fa fa-external-link-square"/></a>
        <a role="button" rel="nofollow" href="https://github.com/rubenspgcavalcante/leaflet-ant-path"
           className="btn btn-secondary btn-sm">
          Check on Github <i className="fa fa-github"/></a>
      </div>
    </div>
  </Card>