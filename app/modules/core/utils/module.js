import { defer, from } from "rxjs";
import { share } from "rxjs/operators";

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
    module$: defer(() => from(module())).pipe(share())
  };
};
