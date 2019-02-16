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
}, {});
