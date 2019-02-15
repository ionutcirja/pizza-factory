// @flow
import React, { Fragment } from 'react';
import FormField from '../../../forms/components/form-field';

type Props = {
  maxToppings: number | null,
  toppings: Array<{
    defaultSelected: boolean,
    topping: {
      name: string,
      price: number,
    }
  }>
};

const Ingredients = ({
  maxToppings,
  toppings,
}: Props) => (
  <Fragment>
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
  </Fragment>
);

export default Ingredients;
