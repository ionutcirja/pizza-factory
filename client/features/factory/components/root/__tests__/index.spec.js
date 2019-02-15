import React from 'react';
import { shallow } from 'enzyme';
import Factory from '..';

describe('Factory component', () => {
  const propsToRender = {
    values: {
      size: '',
    },
    setFieldValue: jest.fn(),
    setFieldTouched: jest.fn(),
    setFieldError: jest.fn(),
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
  });
  
  describe('componentWillUpdate', () => {
    it('should reset toppings form value if sizes value is updated', () => {
      propsToRender.values.size = 'small';
      const wrapper = shallow(<Factory {...propsToRender} />);
      expect(wrapper.instance().componentDidUpdate({ values: { size: 'large' } }));
      expect(propsToRender.setFieldValue).toHaveBeenCalledWith('toppings', []);
      expect(propsToRender.setFieldError).toHaveBeenCalledWith('toppings', '');
      expect(propsToRender.setFieldTouched).toHaveBeenCalledWith('toppings', false);
    });
  });
});
