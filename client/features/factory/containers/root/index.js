// @flow
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import * as Yup from 'yup';
import uuid from 'uuid/v1';
import { computePrice } from '../../utils';
import * as Actions from '../../../cart/actions';
import { cartListNumSelector } from '../../../cart/selectors';
import type { State } from '../../../../types';
import Component from '../../components/root';

type Values = {
  size: string,
  basePrice: number,
  toppings: Array<{
    name: string,
    value: string,
  }>,
};

type Bag = {
  props: {
    actions: {
      addToCart: Function,
    },
  },
  resetForm: Function,
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

const handleSubmit = (values: Values, bag: Bag) => {
  const { props, resetForm } = bag;
  props.actions.addToCart({
    [uuid()]: {
      size: values.size,
      price: computePrice(values.basePrice, values.toppings),
      toppings: values.toppings.reduce((acc, curr) => [...acc, curr.name], []),
      quantity: 1,
    },
  });
  resetForm();
};

export const Form = withFormik({
  displayName: 'factory-form',
  validationSchema: ValidationSchema,
  mapPropsToValues,
  handleSubmit,
})(Component);

const mapStateToProps = (state: State) => ({
  canCheckout: cartListNumSelector(state) > 0,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);
