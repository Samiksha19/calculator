import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise';

import valueReducer from './redux/reducers/valueReducer';

const logger = createLogger({
  predicate: (getState, action) => !!process.env.NODE_ENV
});

export default (initialState = {}) => (
  createStore(
    combineReducers({
      values: valueReducer
    }),
    initialState,
    applyMiddleware(logger, promiseMiddleware)
  )
);
