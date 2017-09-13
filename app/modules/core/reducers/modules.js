import { MODULE_LOADED, MODULES_PRE_LOADED } from "../actions/index";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case MODULES_PRE_LOADED:
      return { ...state, ...payload };

    case MODULE_LOADED:
      return { ...state, [payload.id]: { ...payload } };
  }

  return state;
};