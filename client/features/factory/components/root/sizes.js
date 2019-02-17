// @flow
import React from 'react';
import FormField from '../../../forms/components/form-field';
import { FieldWrapper } from '../../style';

type Props = {
  options: Array<string>,
};

const Sizes = ({ options }: Props) => (
  <FieldWrapper>
    <FormField
      name="size"
      type="select"
      label="Please select your desired size"
      placeholder="Select pizza size"
      options={options}
    />
  </FieldWrapper>
);

export default Sizes;
