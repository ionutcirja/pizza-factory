import React from 'react';
import { shallow } from 'enzyme';
import { Cart } from '..';

describe('Cart component', () => {
  let propsToRender;
  
  beforeEach(() => {
    propsToRender = {
      list: ['1', '2', '3'],
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
  });
});
