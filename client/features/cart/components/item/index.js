// @flow
import React, { Component } from 'react';
import { withTheme } from 'styled-components';
import {
  CartItem,
  RemoveBtn,
  Description,
  QuantityWrapper,
  Quantity,
  Price,
  IncreaseBtn,
  DecreaseBtn,
} from '../../style';

type Props = {
  id: string,
  size: string,
  price: string,
  toppings: Array<string>,
  quantity: number,
  actions: {
    updateQuantity: Function,
    removeFromCart: Function,
  },
  theme: {
    colours: {
      grey: string,
      darkBlue: string,
      blue: string,
    },
  },
};

export class Item extends Component<Props> {
  decreaseQuantity = () => {
    const { id, actions } = this.props;
    actions.updateQuantity({ id, value: -1 });
  };
  
  increaseQuantity = () => {
    const { id, actions } = this.props;
    actions.updateQuantity({ id, value: 1 });
  };
  
  remove = () => {
    const { id, actions } = this.props;
    actions.removeFromCart({ id });
  };
  
  render() {
    const {
      size,
      price,
      toppings,
      quantity,
      theme,
    } = this.props;
    
    return (
      <CartItem
        borderColour={theme.colours.grey}
      >
        <RemoveBtn
          colour={theme.colours.grey}
          onClick={this.remove}
        />
        <Description
          sizeColour={theme.colours.darkBlue}
          ingredientsColour={theme.colours.grey}
        >
          <span>{size}</span>
          <span>{`(${toppings.join(', ')})`}</span>
        </Description>
        <QuantityWrapper
          colour={theme.colours.darkBlue}
        >
          <DecreaseBtn
            colour={theme.colours.blue}
            disabledColour={theme.colours.grey}
            disabled={quantity <= 1}
            onClick={this.decreaseQuantity}
          />
          <Quantity
            colour={theme.colours.darkBlue}
          >
            {quantity}
          </Quantity>
          <IncreaseBtn
            colour={theme.colours.blue}
            disabledColour={theme.colours.grey}
            onClick={this.increaseQuantity}
          />
        </QuantityWrapper>
        <Price
          colour={theme.colours.darkBlue}
        >
          {price}
        </Price>
      </CartItem>
    );
  }
}
export default withTheme(Item);
