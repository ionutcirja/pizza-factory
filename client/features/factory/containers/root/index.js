// @flow
import { withFormik } from 'formik';
import * as Yup from 'yup';
import Factory from '../../components/root';

type Values = {
  [key: string]: any,
};

const ValidationSchema = Yup.object().shape({
  size: Yup.string()
    .required('Please select a size'),
});

const mapPropsToValues = () => ({
  size: '',
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
})(Factory);
