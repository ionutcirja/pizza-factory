// @flow
import React, { Component } from 'react';
import SizesQuery from '../../containers/sizes-query';
import IngredientsQuery from '../../containers/ingredients-query';
import Loading from '../loading';
import Error from '../error';
import Sizes from './sizes';
import Ingredients from './ingredients';

type Props = {
  values: {
    size: string,
  },
  isValid: boolean,
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
    const {
      values,
      handleSubmit,
      isValid,
    } = this.props;
    
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
        <button
          type="submit"
          disabled={!isValid}
        >
          Add to cart
        </button>
        
      </form>
    );
  }
}

export default Factory;
