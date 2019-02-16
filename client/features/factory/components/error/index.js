// @flow
import React from 'react';
import { withTheme } from 'styled-components';
import { Message } from '../../style';

type Props = {
  message: string,
  theme: {
    colours: {
      red: string,
    },
  },
};

export const Error = ({ message, theme }: Props) => (
  <Message colour={theme.colours.red}>
    {message}
  </Message>
);

export default withTheme(Error);
