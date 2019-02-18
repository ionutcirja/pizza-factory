// @flow
import React from 'react';
import { withTheme } from 'styled-components';
import { TotalWrapper } from '../../style';

type Props = {
  price: string,
  theme: {
    colours: {
      darkBlue: string,
    },
  },
};

export const Total = ({ price, theme }: Props) => (
  <TotalWrapper
    colour={theme.colours.darkBlue}
  >
    {`Total: ${price}`}
  </TotalWrapper>
);

export default withTheme(Total);
