// @flow
import { handleActions } from 'redux-actions';
import type { Cart } from '../../../types';
import * as Actions from '../actions';

export default handleActions({
  [Actions.addToCart]: (state: Cart) => ({
    ...state,
  }),
}, {});
