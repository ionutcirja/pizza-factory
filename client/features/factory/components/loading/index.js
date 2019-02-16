// @flow
import React from 'react';
import { withTheme } from 'styled-components';
import { Message } from '../../style';

type Props = {
  message: string,
  theme: {
    colours: {
      blue: string,
    },
  },
};

export const Loading = ({ message, theme }: Props) => (
  <Message colour={theme.colours.blue}>
    {message}
  </Message>
);

export default withTheme(Loading);
