// @flow
import { fork, all } from 'redux-saga/effects';
import { watchCartRequests } from '../features/cart/sagas';

export default function* (): Generator<*, *, *> {
  yield all([
    fork(watchCartRequests),
  ]);
}
