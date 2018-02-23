import { LOAD_PROJECTS_SUCCESS } from "../actions";

export default function (state = { data: [] }, { type, payload }) {
  switch (type) {
    case LOAD_PROJECTS_SUCCESS:
      return { ...state, data: payload };
  }

  return state;
}