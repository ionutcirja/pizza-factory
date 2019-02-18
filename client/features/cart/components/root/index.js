// @flow
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { withTheme } from 'styled-components';
import ShoppingList from '../list';
import Total from '../../containers/total';
import {
  CartWrapper,
  Message,
} from '../../style';
import {
  Button,
  ButtonsContainer,
} from '../../../factory/style';

type Props = {
  list: Array<string>,
  theme: {
    colours: {
      red: string,
      white: string,
      darkBlue: string,
    },
  },
};

export const Cart = ({ list, theme }: Props) => (
  <CartWrapper>
    {list.length > 0
      ? (
        <Fragment>
          <ShoppingList list={list} />
          <Total />
        </Fragment>
      )
      : (
        <Message colour={theme.colours.red}>
          You didn&apos;t add anything yet in your shopping bag.
        </Message>
      )
    }
    <ButtonsContainer>
      {list.length > 0
      && (
        <Button
          type="button"
          bgColour={theme.colours.red}
          colour={theme.colours.white}
        >
          Place order
        </Button>
      )}
      <Link to="/">
        <Button
          type="button"
          bgColour={theme.colours.darkBlue}
          colour={theme.colours.white}
        >
          {list.length > 0 ? 'Continue shopping' : 'Go to factory'}
        </Button>
      </Link>
    </ButtonsContainer>
  </CartWrapper>
);

export default withTheme(Cart);
