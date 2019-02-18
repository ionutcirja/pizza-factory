// @flow
import {
  takeLatest,
  call,
  put,
  select,
} from 'redux-saga/effects';
import { sendOrder } from '../services';
import {
  ORDER_REQUEST,
  orderSuccess,
  orderError,
} from '../actions';
import { cartListSelector } from '../selectors';

export function* requestOrder(): Generator<*, *, *> {
  const list = yield select(cartListSelector);
  
  try {
    yield call(sendOrder, list);
    yield put(orderSuccess());
  } catch (error) {
    yield put(orderError(error));
  }
}

export function* watchCartRequests(): Generator<*, *, *> {
  yield takeLatest(ORDER_REQUEST, requestOrder);
}
