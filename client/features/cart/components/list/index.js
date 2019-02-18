// @flow
import React from 'react';
import ShoppingItem from '../../containers/item';
import { CartList } from '../../style';

type Props = {
  list: Array<string>,
};

export const List = ({ list }: Props) => (
  <CartList>
    {list.map(item => (
      <ShoppingItem key={item} id={item} />
    ))}
  </CartList>
);

export default List;
