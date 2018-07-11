import { createStore } from 'redux';
import rootReducer from './rootReducer';

/* eslint-disable no-underscore-dangle */
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const rootStore = createStore(
  rootReducer, enhancer
);

export default rootStore;

/* eslint-enable */
