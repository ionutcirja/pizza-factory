// @flow
import React, { Component } from 'react';
import FormField from '../../../forms/components/form-field';

type Props = {
  basePrice: number,
  maxToppings: number | null,
  toppings: Array<{
    defaultSelected: boolean,
    topping: {
      name: string,
      price: number,
    }
  }>,
  setFieldValue: Function,
};

class Ingredients extends Component<Props> {
  componentDidMount() {
    this.setBasePriceValue();
  }
  
  componentDidUpdate(prevProps: Props) {
    const { basePrice } = this.props;
    if (basePrice !== prevProps.basePrice) {
      this.setBasePriceValue();
    }
  }
  
  setBasePriceValue() {
    const { setFieldValue, basePrice } = this.props;
    setFieldValue('basePrice', basePrice);
  }
  
  render() {
    const {
      maxToppings,
      toppings,
    } = this.props;
    
    return (
      <FormField
        name="toppings"
        type="checkbox_group"
        isFieldArray
        list={toppings.map(item => (
          {
            label: `${item.topping.name} (${item.topping.price})`,
            value: item.topping.price,
          }
        ))}
        maxAllowed={maxToppings}
      />
    );
  }
}

export default Ingredients;
