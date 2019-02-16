// @flow
import React from 'react';
import { withTheme } from 'styled-components';
import type { FormFieldProps } from '../../../../../types';
import {
  FieldSet,
  Input,
  Error, Label,
} from '../../../style';

type Props = FormFieldProps & {
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

export const TextField = ({
  field,
  placeholder,
  disabled,
  form,
  label,
  theme,
}: Props) => (
  <FieldSet>
    <Label
      htmlFor={field.name}
      colour={theme.colours.grey}
    >
      {label}
    </Label>
    <Input
      {...field}
      id={field.name}
      placeholder={placeholder}
      type="text"
      disabled={disabled}
      error={form.touched[field.name] && form.errors[field.name]}
      colour={theme.colours.black}
      borderColour={theme.colours.grey}
      borderErrorColour={theme.colours.red}
    />
    {form.touched[field.name] && form.errors[field.name]
    && (
      <Error colour={theme.colours.red}>
        {form.errors[field.name]}
      </Error>
    )}
  </FieldSet>
);

export default withTheme(TextField);
