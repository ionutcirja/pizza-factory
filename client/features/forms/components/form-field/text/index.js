// @flow
import React from 'react';
import type { FormFieldProps } from '../../../../../types';
import {
  FieldSet,
  Input,
  Error,
} from '../../../style';

type Props = FormFieldProps & {
  placeholder?: string,
  disabled?: boolean,
};

const TextField = ({
  field,
  placeholder,
  disabled,
  form,
}: Props) => (
  <FieldSet>
    <Input
      {...field}
      placeholder={placeholder}
      type="text"
      disabled={disabled}
    />
    {form.touched[field.name] && form.errors[field.name]
    && (
      <Error>
        {form.errors[field.name]}
      </Error>
    )}
  </FieldSet>
);

export default TextField;
