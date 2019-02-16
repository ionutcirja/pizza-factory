// @flow
import { withFormik } from 'formik';
import * as Yup from 'yup';
import Component from '../../components/root';

type Values = {
  [key: string]: any,
};

const ValidationSchema = Yup.object().shape({
  size: Yup.string()
    .required('Please select a size.'),
  toppings: Yup.array()
    .min(1, 'Please select at least one topping.'),
});

const mapPropsToValues = () => ({
  size: '',
  basePrice: 0,
  toppings: [],
});

const handleSubmit = (values: Values) => {
  console.log(values);
};

export default withFormik({
  displayName: 'factory-form',
  validationSchema: ValidationSchema,
  mapPropsToValues,
  handleSubmit,
})(Component);
