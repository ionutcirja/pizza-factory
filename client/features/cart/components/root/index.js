// @flow
import React from 'react';
import { withTheme } from 'styled-components';
import {
  CartWrapper,
  Message,
} from '../../styles';

type Props = {
  theme: {
    colours: {
      red: string,
    },
  },
};

const Cart = ({ theme }: Props) => (
  <CartWrapper>
    <Message colour={theme.colours.red}>
      Shopping cart
    </Message>
  </CartWrapper>
);

export default withTheme(Cart);
