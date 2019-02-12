// @flow
import React from 'react';
import { Field } from 'formik';
import TextField from './text';

const fieldComponentMap = {
  text: TextField,
};

const getFieldComponent = (type: string = 'text') => fieldComponentMap[type];

type Props = {
  type?: 'text',
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
