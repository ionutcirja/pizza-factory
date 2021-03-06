import React from 'react';
import { shallow } from 'enzyme';
import { Factory } from '..';

// TODO dive in order to test properly (waiting for https://github.com/airbnb/enzyme/issues/1647 to be fixed)

describe('Factory component', () => {
  const propsToRender = {
    values: {
      size: '',
      basePrice: 0,
      toppings: [],
    },
    setFieldValue: jest.fn(),
    setFieldTouched: jest.fn(),
    setFieldError: jest.fn(),
    theme: {
      colours: {
        darkBlue: 'dark blue',
        white: 'white',
        turquoise: 'turquoise',
        red: 'red',
      },
    },
  };
  
  describe('render', () => {
    it('should render a sizes query component', () => {
      const wrapper = shallow(<Factory {...propsToRender} />);
      expect(wrapper).toMatchSnapshot();
    });
  
    it('should render an ingredient query component if size value is truthy', () => {
      propsToRender.values.size = 'large';
      const wrapper = shallow(<Factory {...propsToRender} />);
      expect(wrapper).toMatchSnapshot();
    });
    
    it('should render computed price if base price value is bigger than zero', () => {
      propsToRender.values.basePrice = 10;
      propsToRender.values.toppings = [
        {
          name: 'option 1',
          value: '0.1',
        },
        {
          name: 'option 2',
          value: '0.2',
        },
        {
          name: 'option 3',
          value: '0.3',
        },
      ];
      const wrapper = shallow(<Factory {...propsToRender} />);
      expect(wrapper).toMatchSnapshot();
    });
  
    it('should render a checkout button if canCheckout prop value is truthy', () => {
      propsToRender.canCheckout = true;
      const wrapper = shallow(<Factory {...propsToRender} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
