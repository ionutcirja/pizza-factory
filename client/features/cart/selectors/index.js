// @flow
import { createSelector } from 'reselect';
import type { State } from '../../../types';

export const cartListSelector = (state: State) => state.cart.list || {};

export const cartListNumSelector = createSelector(
  cartListSelector,
  list => Object.keys(list).reduce((acc, curr) => list[curr].quantity + acc, 0),
);
