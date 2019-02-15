import React from 'react';
import { shallow } from 'enzyme';
import Ingredients from '../ingredients';

describe('Ingredients component', () => {
  const propsToRender = {
    maxToppings: 2,
    toppings: [
      {
        defaultSelected: true,
        topping: {
          name: 'option 1',
          price: 1,
        },
      },
      {
        defaultSelected: false,
        topping: {
          name: 'option 2',
          price: 2,
        },
      },
      {
        defaultSelected: false,
        topping: {
          name: 'option 3',
          price: 3,
        },
      },
    ],
  };
  
  describe('render', () => {
    it('should render a checkbox group form field component', () => {
      const wrapper = shallow(<Ingredients {...propsToRender} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
