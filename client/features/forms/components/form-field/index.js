// @flow
import React, { Component } from 'react';
import { Field } from 'formik';
import TextField from './text';
import SelectField from './select';
import CheckboxGroupField from './checkbox-group';
import type { FormFieldProps } from '../../../../types';

const fieldComponentMap = {
  text: TextField,
  select: SelectField,
  checkbox_group: CheckboxGroupField,
};

const getFieldComponent = (type: string = 'text') => fieldComponentMap[type];


type WrapperProps = FormFieldProps & {
  type: string,
  isFieldArray: boolean,
};

export class FieldWrapper extends Component<WrapperProps> {
  componentWillUnmount() {
    const {
      isFieldArray,
      field,
      form,
    } = this.props;
    
    form.setFieldValue(field.name, isFieldArray ? [] : '');
    form.setFieldError(field.name, '');
    form.setFieldTouched(field.name, false);
  }
  
  render() {
    const { type, ...rest } = this.props;
    const FieldComponent = getFieldComponent(type);
    return <FieldComponent {...rest} />;
  }
}

type Props = {
  name: string,
  type?: string,
};

const FormField = (props: Props) => (
  <Field
    {...props}
    component={FieldWrapper}
  />
);

FormField.defaultProps = {
  type: 'text',
};

export default FormField;
