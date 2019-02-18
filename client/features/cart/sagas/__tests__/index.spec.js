import {
  call,
  takeLatest,
  put,
  select,
} from 'redux-saga/effects';
import * as services from '../../services';
import * as selector from '../../selectors';
import * as sagas from '..';

describe('Cart sagas', () => {
  describe('watchCartRequest', () => {
    it('should wait for a ORDER_REQUEST action', () => {
      const generator = sagas.watchCartRequests();
      expect(generator.next().value).toEqual(
        takeLatest('ORDER_REQUEST', sagas.requestOrder),
      );
      expect(generator.next().done).toEqual(true);
    });
  });
  
  describe('requestOrder', () => {
    const list = {
      1: {
        size: 'small',
      },
    };
    
    it('should select cart list, call sendOrder services method and'
      + ' dispatch a ORDER_SUCCESS action in case of success', () => {
      const generator = sagas.requestOrder();
      expect(generator.next().value).toEqual(select(selector.cartListSelector));
      expect(generator.next(list).value).toEqual(call(services.sendOrder, list));
      expect(generator.next().value).toEqual(
        put({
          type: 'ORDER_SUCCESS',
        }),
      );
      expect(generator.next().done).toEqual(true);
    });
    
    it('should select cart list, call sendOrder services and'
      + ' dispatch a ORDER_ERROR action in case of error', () => {
      const error = { message: 'error' };
      const generator = sagas.requestOrder();
      expect(generator.next().value).toEqual(select(selector.cartListSelector));
      expect(generator.next(list).value).toEqual(call(services.sendOrder, list));
      expect(generator.throw(error).value).toEqual(
        put({
          type: 'ORDER_ERROR',
          payload: error,
        }),
      );
      expect(generator.next().done).toEqual(true);
    });
  });
});
