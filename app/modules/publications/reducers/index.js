import { LOAD_PUBLICATIONS_SUCCESS } from "../actions";

export default function (state = { data: null }, { type, payload }) {

  switch (type) {
    case LOAD_PUBLICATIONS_SUCCESS:
      return { ...state, data: payload };
  }

  return state;
}