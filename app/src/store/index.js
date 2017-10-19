/*
 * Npm import
 */
import { applyMiddleware, compose, createStore } from 'redux';


/*
 * Local import
 */
import reducer from './reducer';


/*
 * Code
 */
// DevTools
let devTools = [];
if (window.devToolsExtension) {
  devTools = [window.devToolsExtension()];
}

// Store
const store = createStore(reducer, ...devTools);


/*
 * Export default
 */
export default store;
