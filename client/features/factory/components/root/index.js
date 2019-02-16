// @flow
import React, { Component } from 'react';
import { withTheme } from 'styled-components';
import math from 'mathjs';
import SizesQuery from '../../containers/sizes-query';
import IngredientsQuery from '../../containers/ingredients-query';
import Loading from '../loading';
import Error from '../error';
import Sizes from './sizes';
import Ingredients from './ingredients';
import {
  Form,
  ButtonsContainer,
  Button,
} from '../../style';

const computePrice = (basePrice: number, ingredients: Array<number>) => (
  math.format(
    math.add(
      math.bignumber(basePrice),
      ingredients.reduce(
        (acc, curr) => math.add(math.bignumber(acc), math.bignumber(curr)), math.bignumber(0),
      ),
    ),
  )
);

type Props = {
  values: {
    size: string,
    basePrice: number,
    toppings: Array<number>,
  },
  isValid: boolean,
  setFieldValue: Function,
  setFieldTouched: Function,
  setFieldError: Function,
  handleSubmit: Function,
  theme: {
    colours: {
      darkBlue: string,
      white: string,
      turquoise: string,
    },
  },
};

export class Factory extends Component<Props> {
  componentDidUpdate(prevProps: Props) {
    const {
      setFieldValue,
      setFieldTouched,
      setFieldError,
      values,
    } = this.props;
    
    if (values.size !== prevProps.values.size) {
      setFieldValue('toppings', []);
      setFieldTouched('toppings', false);
      setFieldError('toppings', '');
    }
  }
  
  render() {
    const {
      values,
      handleSubmit,
      isValid,
      setFieldValue,
      theme,
    } = this.props;
    
    return (
      <Form onSubmit={handleSubmit}>
        <SizesQuery
          LoadingWrapper={Loading}
          ErrorWrapper={Error}
          Component={Sizes}
        />
        {values.size
        && (
          <IngredientsQuery
            size={values.size.toUpperCase()}
            setFieldValue={setFieldValue}
            LoadingWrapper={Loading}
            ErrorWrapper={Error}
            Component={Ingredients}
          />
        )}
        <ButtonsContainer>
          <Button
            type="submit"
            disabled={!isValid}
            bgColour={theme.colours.darkBlue}
            colour={theme.colours.white}
            labelColour={theme.colours.turquoise}
          >
            Add to cart
            {values.basePrice > 0
            && (
              <span>
                {computePrice(values.basePrice, values.toppings)}
              </span>
            )}
          </Button>
        </ButtonsContainer>
      </Form>
    );
  }
}

export default withTheme(Factory);
