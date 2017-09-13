import { MODULE_LOADED, MODULES_PRE_LOADED } from "./index";

export const modulesPreLoaded = (modules) => ({ type: MODULES_PRE_LOADED, payload: modules });

export const moduleLoaded = (module) => ({ type: MODULE_LOADED, payload: module });