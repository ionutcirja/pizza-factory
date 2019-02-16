// @flow
import React, { Component } from 'react';
import { withTheme } from 'styled-components';
import type { FormFieldProps } from '../../../../../types';
import {
  FieldSet,
  Label,
  Checkbox,
  CheckboxWrapper,
  Error,
} from '../../../style';

type Props = FormFieldProps & {
  maxAllowed: number | null,
  label: string,
  list: Array<{
    name: string,
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

const hasValue = (
  valuesList: Array<{ name: string, value: any}>,
  itemToFind: { name: string, value: any },
) => (
  valuesList.filter(item => (item.name === itemToFind.name && item.value === itemToFind.value))
    .length > 0
);

export class CheckboxGroupField extends Component<Props> {
  onChange = (evt: SyntheticInputEvent<*>) => {
    const { field, form } = this.props;
    const { value, name } = evt.target;
    
    if (hasValue(field.value, { name, value })) {
      const nextValue = field.value.filter(
        item => item.value !== value && item.name !== value,
      );
      form.setFieldValue(field.name, nextValue);
    } else {
      const nextValue = field.value.concat({ name, value });
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
    
    console.log(field.value);
    
    return (
      <FieldSet>
        { /* eslint-disable jsx-a11y/label-has-for */ }
        <Label as="legend" colour={theme.colours.grey}>
          {label}
        </Label>
        { /* eslint-enable */ }
        {list.map(({ value, name }) => (
          <CheckboxWrapper key={value}>
            <Checkbox
              {...field}
              type="checkbox"
              id={`${name}`}
              name={`${name}`}
              value={value}
              checked={hasValue(field.value, { name, value: String(value) })}
              disabled={maxAllowed
                && field.value.length >= maxAllowed
                && !hasValue(field.value, { name, value: String(value) })
              }
              error={form.touched[field.name] && form.errors[field.name]}
              borderColour={theme.colours.grey}
              borderErrorColour={theme.colours.red}
              checkColour={theme.colours.blue}
              onChange={this.onChange}
            />
            <Label
              htmlFor={`${name}`}
              colour={theme.colours.grey}
            >
              {`${name} (${value})`}
            </Label>
          </CheckboxWrapper>
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
