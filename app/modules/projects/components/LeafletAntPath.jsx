import React from "react";
import { src as leafletAntPathPic } from "assets/projects/leaflet-ant-path.png"
import ProjectCard from "./ProjectCard";

export default () =>
  <ProjectCard title="Leaflet Ant Path" projectName='leaflet-ant-path' picture={leafletAntPathPic}
               page='http://rubenspgcavalcante.github.io/leaflet-ant-path'>
    A <a href="http://leafletjs.com/" target="_blank" rel="nofollow">Leaflet</a> plugin, to
    create animated polylines, showing where's the start and end using a small dots flux
    similar to ants walking in a line.
  </ProjectCard>