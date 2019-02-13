// @flow
import React from 'react';
import type { FormFieldProps } from '../../../../../types';
import {
  FieldSet,
  Select,
  Error,
} from '../../../style';

type Props = FormFieldProps & {
  options: Array<string>,
  placeholder?: string,
  disabled?: boolean,
};

const SelectField = ({
  field,
  placeholder,
  disabled,
  form,
  options,
}: Props) => (
  <FieldSet>
    <Select
      {...field}
      disabled={disabled}
    >
      {placeholder && (
        <option
          value=""
          disabled
        >
          {placeholder}
        </option>
      )}
      {options.map(option => (
        <option
          key={option}
          value={option}
        >
          {option}
        </option>
      ))}
    </Select>
    {form.touched[field.name] && form.errors[field.name]
    && (
      <Error>
        {form.errors[field.name]}
      </Error>
    )}
  </FieldSet>
);

export default SelectField;
