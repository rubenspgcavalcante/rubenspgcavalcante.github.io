import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/defer';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/share';

/**
 * Module lazy definer, generates a Observable that produces a module with a route, a component and a label
 * @param order: number
 * @param id : string
 * @param label: string
 * @param module : function() => Promise<Object>
 * @param route : string
 *
 * @returns {{route: string, module$: Observable}}
 */
export const defineModule = (order, id, label, route, module) => {
  return {
    order,
    id,
    label,
    route,
    module$: Observable.defer(() => Observable.fromPromise(module())).share()
  };
};
