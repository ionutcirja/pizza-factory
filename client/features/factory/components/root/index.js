// @flow
import React from 'react';
import { withTheme } from 'styled-components';
import { Link } from 'react-router-dom';
import { computePrice } from '../../utils';
import SizesQuery from '../../containers/sizes-query';
import IngredientsQuery from '../../containers/ingredients-query';
import LoadingWrapper from '../loading';
import ErrorWrapper from '../error';
import Sizes from './sizes';
import Ingredients from './ingredients';
import {
  Form,
  ButtonsContainer,
  Button,
} from '../../style';


type Props = {
  values: {
    size: string,
    basePrice: number,
    toppings: Array<{name: string, value: string}>,
  },
  isValid: boolean,
  setFieldValue: Function,
  setFieldTouched: Function,
  setFieldError: Function,
  handleSubmit: Function,
  canCheckout: boolean,
  theme: {
    colours: {
      darkBlue: string,
      white: string,
      turquoise: string,
      red: string,
    },
  },
};

export const Factory = ({
  values,
  handleSubmit,
  isValid,
  setFieldValue,
  setFieldTouched,
  setFieldError,
  canCheckout,
  theme,
}: Props) => (
  <Form onSubmit={handleSubmit}>
    <SizesQuery
      LoadingWrapper={LoadingWrapper}
      ErrorWrapper={ErrorWrapper}
      Component={Sizes}
    />
    {values.size
    && (
      <IngredientsQuery
        size={values.size.toUpperCase()}
        setFieldValue={setFieldValue}
        setFieldTouched={setFieldTouched}
        setFieldError={setFieldError}
        LoadingWrapper={LoadingWrapper}
        ErrorWrapper={ErrorWrapper}
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
            {`(${computePrice(values.basePrice, values.toppings)})`}
          </span>
        )}
      </Button>
      {canCheckout
      && (
        <Link to="/cart">
          <Button
            type="button"
            bgColour={theme.colours.red}
            colour={theme.colours.white}
          >
            Checkout
          </Button>
        </Link>
      )}
    </ButtonsContainer>
  </Form>
);

export default withTheme(Factory);
