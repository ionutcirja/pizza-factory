// @flow
import { createSelector } from 'reselect';
import math from 'mathjs';
import type { State } from '../../../types';

export const cartListSelector = (state: State) => state.cart.list || {};

export const cartListNumSelector = createSelector(
  cartListSelector,
  list => Object.keys(list).reduce((acc, curr) => list[curr].quantity + acc, 0),
);

export const cartListIdsSelector = createSelector(
  cartListSelector,
  list => Object.keys(list).reduce((acc, curr) => [...acc, curr], []),
);

export const cartListTotalSelector = createSelector(
  cartListSelector,
  list => math.format(
    Object.keys(list).reduce((acc, curr) => (
      math.add(
        math.multiply(
          math.bignumber(list[curr].quantity),
          math.bignumber(list[curr].price),
        ),
        acc,
      )
    ), math.bignumber(0)),
  ),
);

export const cartIdSelector = (id: string) => createSelector(
  cartListSelector,
  list => ({
    ...list[id],
    price: math.format(
      math.multiply(
        math.bignumber(list[id].price),
        math.bignumber(list[id].quantity),
      ),
    ),
  }),
);
