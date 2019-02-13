// @flow
import React from 'react';

type Props = {
  message: string,
};

const Loading = ({ message }: Props) => (
  <span>{message}</span>
);

export default Loading;
