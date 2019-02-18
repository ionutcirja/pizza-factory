// @flow
import React, { Component, Fragment } from 'react';
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
  loading: boolean,
  message: string,
  actions: {
    orderRequest: Function,
  },
  theme: {
    colours: {
      red: string,
      white: string,
      darkBlue: string,
    },
  },
};

export class Cart extends Component<Props> {
  sendOrder = () => {
    const { actions } = this.props;
    actions.orderRequest();
  };
  
  render() {
    const {
      message,
      loading,
      list,
      theme,
    } = this.props;
    
    return (
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
        {message
        && (
          <Message colour={theme.colours.red}>
            {message}
          </Message>
        )}
        <ButtonsContainer>
          {list.length > 0
          && (
            <Button
              type="button"
              bgColour={theme.colours.red}
              colour={theme.colours.white}
              onClick={this.sendOrder}
              disabled={loading}
            >
              {!loading ? 'Place order' : 'Sending order'}
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
  }
}

export default withTheme(Cart);
