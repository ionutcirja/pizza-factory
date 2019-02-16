// @flow
import React from 'react';
import FormField from '../../../forms/components/form-field';

type Props = {
  options: Array<string>,
};

const Sizes = ({ options }: Props) => (
  <FormField
    name="size"
    type="select"
    label="Please select your desired size"
    placeholder="Select pizza size"
    options={options}
  />
);

export default Sizes;
