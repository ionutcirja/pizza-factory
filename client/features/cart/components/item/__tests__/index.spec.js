import React from 'react';
import { shallow } from 'enzyme';
import { Item } from '..';

describe('Item component', () => {
  let propsToRender;
  
  beforeEach(() => {
    propsToRender = {
      id: '1',
      size: 'small',
      price: '10',
      toppings: ['option 1', 'option 2'],
      quantity: 3,
      actions: {
        updateQuantity: jest.fn(),
        removeFromCart: jest.fn(),
      },
      theme: {
        colours: {
          grey: 'string',
          darkBlue: 'string',
          blue: 'string',
        },
      },
    };
  });
  
  describe('render', () => {
    it('should render the size, price, quantity, a remove button'
      + ' and both a increase and decrease quantity buttons', () => {
      const wrapper = shallow(<Item {...propsToRender} />);
      expect(wrapper).toMatchSnapshot();
    });
  
    it('should render a disabled decrease quantity button'
      + ' if quantity prop value is less or equal than 1', () => {
      propsToRender.quantity = 1;
      const wrapper = shallow(<Item {...propsToRender} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
  
  describe('events handlers', () => {
    it('should call updateQuantity prop method on decrease quantity button click', () => {
      const wrapper = shallow(<Item {...propsToRender} />);
      wrapper.find('DecreaseBtn').props().onClick();
      expect(propsToRender.actions.updateQuantity).toHaveBeenCalledWith({
        id: '1',
        value: -1,
      });
    });
  
    it('should call updateQuantity prop method on decrease quantity button click', () => {
      const wrapper = shallow(<Item {...propsToRender} />);
      wrapper.find('IncreaseBtn').props().onClick();
      expect(propsToRender.actions.updateQuantity).toHaveBeenCalledWith({
        id: '1',
        value: 1,
      });
    });
  
    it('should call removeFromCart prop method on remove button click', () => {
      const wrapper = shallow(<Item {...propsToRender} />);
      wrapper.find('RemoveBtn').props().onClick();
      expect(propsToRender.actions.removeFromCart).toHaveBeenCalledWith({
        id: '1',
      });
    });
  });
});
