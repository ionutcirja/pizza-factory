// @flow
import React, { Component } from 'react';
import { withTheme } from 'styled-components';
import type { FormFieldProps } from '../../../../../types';
import {
  FieldSet,
  Label,
  Checkbox,
  Error,
} from '../../../style';

type Props = FormFieldProps & {
  maxAllowed: number | null,
  label: string,
  list: Array<{
    label: string,
    value: any,
    disabled?: boolean,
  }>,
  theme: {
    colours: {
      grey: string,
      black: string,
      red: string,
      blue: string,
    }
  }
};

export class CheckboxGroupField extends Component<Props> {
  onChange = (evt: SyntheticInputEvent<*>) => {
    const { field, form } = this.props;
    const { value } = evt.target;
    
    if (field.value.includes(value)) {
      const nextValue = field.value.filter(
        item => item !== value,
      );
      form.setFieldValue(field.name, nextValue);
    } else {
      const nextValue = field.value.concat(value);
      form.setFieldValue(field.name, nextValue);
    }
  };
  
  render() {
    const {
      field,
      list,
      maxAllowed,
      form,
      label,
      theme,
    } = this.props;
    
    console.log(form.touched[field.name], form.errors[field.name]);
    
    return (
      <FieldSet>
        { /* eslint-disable jsx-a11y/label-has-for */ }
        <Label as="legend" colour={theme.colours.grey}>
          {label}
        </Label>
        { /* eslint-enable */ }
        {list.map(({ value }, index) => (
          <div key={value}>
            <Checkbox
              {...field}
              type="checkbox"
              id={`${field.name}.${index}`}
              name={`${field.name}.${index}`}
              value={value}
              checked={field.value.includes(String(value))}
              disabled={maxAllowed
                && field.value.length >= maxAllowed
                && !field.value.includes(String(value))
              }
              error={form.touched[field.name] && form.errors[field.name]}
              borderColour={theme.colours.grey}
              borderErrorColour={theme.colours.red}
              checkColour={theme.colours.blue}
              onChange={this.onChange}
            />
            <Label
              htmlFor={`${field.name}.${index}`}
              colour={theme.colours.grey}
            >
              {value}
            </Label>
          </div>
        ))}
        {form.touched[field.name] && form.errors[field.name] && (
          <Error colour={theme.colours.red}>
            {form.errors[field.name]}
          </Error>
        )}
      </FieldSet>
    );
  }
}

export default withTheme(CheckboxGroupField);
