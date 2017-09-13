import { defineModule } from "./modules/core/utils/module";

export const HOME = defineModule(0, 'home', 'Home', '/', () => import(/* webpackChunkName: "home" */ 'modules/home/index'));

export const PROJECTS = defineModule(1, 'projects', 'Projects', '/projects', () => import(/* webpackChunkName: "projects" */ 'modules/projects/index'));
