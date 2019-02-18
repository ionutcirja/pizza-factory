import React from 'react';
import { shallow } from 'enzyme';
import { Cart } from '..';

describe('Cart component', () => {
  let propsToRender;
  
  beforeEach(() => {
    propsToRender = {
      list: ['1', '2', '3'],
      actions: {
        orderRequest: jest.fn(),
      },
      theme: {
        colours: {
          red: 'red',
          white: 'white',
          darkBlue: 'dark blue',
        },
      },
    };
  });
  
  describe('render', () => {
    it('should render a shopping cart list, a place order button and a continue shopping button'
      + ' if list prop length is bigger than 0', () => {
      const wrapper = shallow(<Cart {...propsToRender} />);
      expect(wrapper).toMatchSnapshot();
    });
  
    it('should render a go to shopping button and a message'
      + ' if list prop length is equal with 0', () => {
      propsToRender.list = [];
      const wrapper = shallow(<Cart {...propsToRender} />);
      expect(wrapper).toMatchSnapshot();
    });
  
    it('should render an order message if message prop value is truthy', () => {
      propsToRender.message = 'some message';
      const wrapper = shallow(<Cart {...propsToRender} />);
      expect(wrapper).toMatchSnapshot();
    });
  
    it('should render a disable order button if loading prop value is truthy', () => {
      propsToRender.loading = 'true';
      const wrapper = shallow(<Cart {...propsToRender} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
  
  describe('events handlers', () => {
    it('should call orderRequest prop method on order button click', () => {
      const wrapper = shallow(<Cart {...propsToRender} />);
      wrapper.find('Button').at(0).props().onClick();
      expect(propsToRender.actions.orderRequest).toHaveBeenCalled();
    });
  });
});
