// @flow
import React from 'react';

type Props = {
  message: string,
};

const Error = ({ message }: Props) => (
  <span>{message}</span>
);

export default Error;
