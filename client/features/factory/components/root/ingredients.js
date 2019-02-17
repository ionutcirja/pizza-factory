// @flow
import React, { Component } from 'react';
import FormField from '../../../forms/components/form-field';
import { FieldWrapper } from '../../style';

type Props = {
  basePrice: number,
  maxToppings: number | null,
  toppings: Array<{
    defaultSelected: boolean,
    topping: {
      name: string,
      price: number,
    },
  }>,
  setFieldValue: Function,
  setFieldTouched: Function,
  setFieldError: Function,
};

class Ingredients extends Component<Props> {
  componentDidMount() {
    this.setFieldsDefaultValues();
  }
  
  componentDidUpdate(prevProps: Props) {
    const { basePrice } = this.props;
    if (basePrice !== prevProps.basePrice) {
      this.setFieldsDefaultValues();
    }
  }
  
  setFieldsDefaultValues() {
    this.setBasePriceValue();
    this.setToppingsValue();
  }
  
  setBasePriceValue() {
    const { setFieldValue, basePrice } = this.props;
    setFieldValue('basePrice', basePrice);
  }
  
  setToppingsValue() {
    const {
      setFieldValue,
      setFieldTouched,
      setFieldError,
      toppings,
    } = this.props;
    
    setFieldTouched('toppings', false);
    setFieldError('toppings', '');
    setFieldValue(
      'toppings',
      toppings
        .filter(item => item.defaultSelected)
        .map(({ topping }) => ({
          name: topping.name,
          value: String(topping.price),
        })),
    );
  }
  
  render() {
    const {
      maxToppings,
      toppings,
    } = this.props;
    
    return (
      <FieldWrapper>
        <FormField
          name="toppings"
          type="checkbox_group"
          label={`Please select your desired toppings${maxToppings ? ` (maximum ${maxToppings})` : ''}`}
          isFieldArray
          list={toppings.map(item => (
            {
              name: item.topping.name,
              value: item.topping.price,
            }
          ))}
          maxAllowed={maxToppings}
        />
      </FieldWrapper>
    );
  }
}

export default Ingredients;
