// @flow
import math from 'mathjs';

export const computePrice = (
  basePrice: number,
  ingredients: Array<{name: string, value: number}>,
) => (
  math.format(
    math.add(
      math.bignumber(basePrice),
      ingredients.reduce(
        (acc, curr) => math.add(math.bignumber(acc), math.bignumber(curr.value)), math.bignumber(0),
      ),
    ),
  )
);
