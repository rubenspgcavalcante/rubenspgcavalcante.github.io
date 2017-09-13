import loading from './reducers/loading';
import modules from './reducers/modules';

import _AsyncModuleRenderer from './components/containers/AsyncModuleRenderer';

export const AsyncModuleRenderer = _AsyncModuleRenderer;

export const reducers = { modules, loading };