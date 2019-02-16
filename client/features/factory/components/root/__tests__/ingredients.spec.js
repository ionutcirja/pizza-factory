import React from 'react';
import { shallow } from 'enzyme';
import Ingredients from '../ingredients';

describe('Ingredients component', () => {
  const propsToRender = {
    maxToppings: 2,
    basePrice: 10,
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
    setFieldValue: jest.fn(),
    setFieldTouched: jest.fn(),
    setFieldError: jest.fn(),
  };
  
  describe('render', () => {
    it('should render a checkbox group form field component', () => {
      const wrapper = shallow(<Ingredients {...propsToRender} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
  
  describe('componentDidMount', () => {
    it('should set base price and toppings default values', () => {
      shallow(<Ingredients {...propsToRender} />);
      expect(propsToRender.setFieldValue.mock.calls[0]).toEqual(['basePrice', propsToRender.basePrice]);
      expect(propsToRender.setFieldValue.mock.calls[1]).toEqual(['toppings', [{ name: 'option 1', value: '1' }]]);
      expect(propsToRender.setFieldTouched).toHaveBeenCalledWith('toppings', false);
      expect(propsToRender.setFieldError).toHaveBeenCalledWith('toppings', '');
    });
  });
  
  describe('componentDidUpdate', () => {
    it('should update base price field value if basePrice prop value is changed', () => {
      const wrapper = shallow(<Ingredients {...propsToRender} />);
      wrapper.instance().componentDidUpdate({ basePrice: 9 });
      expect(propsToRender.setFieldValue.mock.calls[0]).toEqual(['basePrice', propsToRender.basePrice]);
      expect(propsToRender.setFieldValue.mock.calls[1]).toEqual(['toppings', [{ name: 'option 1', value: '1' }]]);
      expect(propsToRender.setFieldTouched).toHaveBeenCalledWith('toppings', false);
      expect(propsToRender.setFieldError).toHaveBeenCalledWith('toppings', '');
    });
  });
});
