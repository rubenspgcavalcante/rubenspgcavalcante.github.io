import {
  LOAD_PROJECTS,
  LOAD_PROJECTS_ERROR,
  LOAD_PROJECTS_SUCCESS
} from './index';

export const loadProjects = () => dispatch => {
  dispatch({ type: LOAD_PROJECTS });
  import(/* webpackChunkName: "projectsData" */
  /* webpackMode: "eager" */
  'modules/core/data/projects.json')
    .then(projects =>
      dispatch({ type: LOAD_PROJECTS_SUCCESS, payload: projects.default })
    )
    .catch(payload => dispatch({ type: LOAD_PROJECTS_ERROR, payload }));
};
