/* eslint-disable no-underscore-dangle */
// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import type { State } from '../types';
import reducer from '../reducers';

export default (initialState: State, debug: boolean = true) => {
  const composeEnhancers = (debug && global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];
  
  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware)),
  );
  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  
  return store;
};
