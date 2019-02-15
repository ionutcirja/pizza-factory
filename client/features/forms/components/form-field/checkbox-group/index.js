// @flow
import React, { Component } from 'react';
import type { FormFieldProps } from '../../../../../types';
import {
  FieldSet,
  Input,
  Error,
} from '../../../style';

type Props = FormFieldProps & {
  maxAllowed: number | null,
  list: Array<{
    label: string,
    value: any,
    disabled?: boolean,
  }>,
};

class CheckboxGroupField extends Component<Props> {
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
    } = this.props;
    
    return (
      <FieldSet>
        {list.map(({ value }, index) => (
          <Input
            key={value}
            {...field}
            type="checkbox"
            name={`${field.name}.${index}`}
            value={value}
            checked={field.value.includes(String(value))}
            disabled={maxAllowed
              && field.value.length >= maxAllowed
              && !field.value.includes(String(value))
            }
            onChange={this.onChange}
          />
        ))}
        {form.touched[field.name] && form.errors[field.name] && (
          <Error>{form.errors[field.name]}</Error>
        )}
      </FieldSet>
    );
  }
}

export default CheckboxGroupField;
