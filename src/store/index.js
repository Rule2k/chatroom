/*
 * Npm import
 */
import { createStore, applyMiddleware, compose } from 'redux';

/*
 * Local import
 */
// Reducer
import reducer from 'src/store/reducer';
import socketMiddleware from './socketMiddleware';

/*
 * Code
 */
const appliedMiddlewares = applyMiddleware(socketMiddleware);

const devTools = [
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
];

const enhancers = compose(appliedMiddlewares, ...devTools);

// createStore
const store = createStore(reducer, enhancers);

/*
 * Export
 */
export default store;
