// @flow
import React, { Component } from 'react';
import FormField from '../../../forms/components/form-field';
import { IngredientsWrapper } from '../../style';

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
      <IngredientsWrapper>
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
      </IngredientsWrapper>
    );
  }
}

export default Ingredients;
