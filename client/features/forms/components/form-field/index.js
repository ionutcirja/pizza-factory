// @flow
import React from 'react';
import { Field } from 'formik';
import TextField from './text';
import SelectField from './select';

const fieldComponentMap = {
  text: TextField,
  select: SelectField,
};

const getFieldComponent = (type: string = 'text') => fieldComponentMap[type];

type Props = {
  type?: string,
};

const FormField = ({ type, ...rest }: Props) => (
  <Field
    {...rest}
    component={getFieldComponent(type)}
  />
);

FormField.defaultProps = {
  type: 'text',
};

export default FormField;
