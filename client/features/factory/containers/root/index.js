// @flow
import { withFormik } from 'formik';
import * as Yup from 'yup';
import Factory from '../../components/root';

const ValidationSchema = Yup.object().shape({
  size: Yup.string()
    .required('Please select a size'),
});

const mapPropsToValues = () => ({
  size: '',
});

export default withFormik({
  displayName: 'factory-form',
  validationSchema: ValidationSchema,
  mapPropsToValues,
})(Factory);
