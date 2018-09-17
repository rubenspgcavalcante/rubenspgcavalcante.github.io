import {
  LOAD_PUBLICATIONS,
  LOAD_PUBLICATIONS_ERROR,
  LOAD_PUBLICATIONS_SUCCESS
} from "./index";

export const loadPublications = () => dispatch => {
  dispatch({ type: LOAD_PUBLICATIONS });
  import(/* webpackChunkName: "publicationsData" */
  /* webpackMode: "eager" */
  "modules/core/data/publications.json")
    .then(publications =>
      dispatch({
        type: LOAD_PUBLICATIONS_SUCCESS,
        payload: publications.default
      })
    )
    .catch(payload => dispatch({ type: LOAD_PUBLICATIONS_ERROR, payload }));
};
