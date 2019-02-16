// @flow
import React from 'react';
import { withTheme } from 'styled-components';
import type { FormFieldProps } from '../../../../../types';
import {
  FieldSet,
  Select,
  Error,
  Label,
} from '../../../style';

type Props = FormFieldProps & {
  options: Array<string>,
  label: string,
  placeholder?: string,
  disabled?: boolean,
  theme: {
    colours: {
      grey: string,
      black: string,
      red: string,
    }
  }
};

export const SelectField = ({
  field,
  label,
  placeholder,
  disabled,
  form,
  options,
  theme,
}: Props) => (
  <FieldSet>
    <Label
      htmlFor={field.name}
      colour={theme.colours.grey}
    >
      {label}
    </Label>
    <Select
      error={form.touched[field.name] && form.errors[field.name]}
      colour={theme.colours.black}
      borderColour={theme.colours.grey}
      borderErrorColour={theme.colours.red}
    >
      <select
        {...field}
        id={field.name}
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
      </select>
    </Select>
    {form.touched[field.name] && form.errors[field.name]
    && (
      <Error colour={theme.colours.red}>
        {form.errors[field.name]}
      </Error>
    )}
  </FieldSet>
);

export default withTheme(SelectField);
