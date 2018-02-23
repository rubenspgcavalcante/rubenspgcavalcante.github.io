import React, { PureComponent } from 'react';
import ProjectCard from "./ProjectCard";

export default class Projects extends PureComponent {
  static propTypes = {};

  componentDidMount() {
    this.props.loadProjects();
  }

  render() {
    const { data } = this.props.projects || {};
    if (!data) return null;

    return (
      <div id="projects">
        {data.map((project, idx) => <ProjectCard key={idx} {...project} />)}
      </div>
    );
  }
};