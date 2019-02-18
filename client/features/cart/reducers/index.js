// @flow
import { handleActions } from 'redux-actions';
import type { Cart, Action } from '../../../types';
import * as Actions from '../actions';

export default handleActions({
  [Actions.addToCart]: (state: Cart, action: Action) => ({
    ...state,
    list: {
      ...state.list,
      ...action.payload,
    },
  }),
  [Actions.updateQuantity]: (state: Cart, action: Action) => {
    const { id, value } = action.payload;
    return {
      ...state,
      list: {
        ...state.list,
        [id]: {
          ...state.list[id],
          quantity: state.list[id].quantity + value,
        },
      },
    };
  },
  [Actions.removeFromCart]: (state: Cart, action: Action) => {
    const { id } = action.payload;
    return {
      ...state,
      list: Object.keys(state.list).reduce((acc, curr) => (
        curr !== id
          ? { ...acc, [curr]: state.list[curr] }
          : { ...acc }
      ), {}),
    };
  },
  [Actions.orderRequest]: (state: Cart) => ({
    ...state,
    loading: true,
    message: '',
  }),
  [Actions.orderSuccess]: (state: Cart) => ({
    ...state,
    loading: false,
    message: 'Order successful.',
  }),
  [Actions.orderError]: (state: Cart) => ({
    ...state,
    loading: false,
    message: 'We could not take your order right now. Please try again later.',
  }),
}, {});
