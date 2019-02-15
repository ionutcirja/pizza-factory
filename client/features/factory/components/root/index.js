// @flow
import React, { Component, Fragment } from 'react';
import SizesQuery from '../../containers/sizes-query';
import IngredientsQuery from '../../containers/ingredients-query';
import FormField from '../../../forms/components/form-field';
import Loading from '../loading';
import Error from '../error';

type SizesProps = {
  options: Array<string>,
};

export const Sizes = ({ options }: SizesProps) => (
  <FormField
    name="size"
    type="select"
    placeholder="Select pizza size"
    options={options}
  />
);

type IngredientsProps = {
  maxToppings: number | null,
  toppings: Array<{
    defaultSelected: boolean,
    topping: {
      name: string,
      price: number,
    }
  }>
};

export const Ingredients = ({
  maxToppings,
  toppings,
}: IngredientsProps) => (
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

type Props = {
  values: {
    size: string,
  },
  setFieldValue: Function,
  handleSubmit: Function,
};

class Factory extends Component<Props> {
  componentDidUpdate(prevProps: Props) {
    const { setFieldValue, values } = this.props;
    if (values.size !== prevProps.values.size) {
      setFieldValue('toppings', []);
    }
  }
  
  render() {
    const { values, handleSubmit } = this.props;
    
    return (
      <form onSubmit={handleSubmit}>
        <SizesQuery
          LoadingWrapper={Loading}
          ErrorWrapper={Error}
          Component={Sizes}
        />
        {values.size
        && (
          <IngredientsQuery
            size={values.size.toUpperCase()}
            LoadingWrapper={Loading}
            ErrorWrapper={Error}
            Component={Ingredients}
          />
        )}
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Factory;
