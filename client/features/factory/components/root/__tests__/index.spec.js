import React from 'react';
import { shallow } from 'enzyme';
import Factory, { Sizes, Ingredients } from '..';

describe('Sizes component', () => {
  const propsToRender = {
    options: [
      'option 1',
      'option 2',
      'option 3',
      'option 4',
    ],
  };
  
  describe('render', () => {
    it('should render a select form field component', () => {
      const wrapper = shallow(<Sizes {...propsToRender} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});

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

describe('Factory component', () => {
  const propsToRender = {
    values: {
      size: '',
    },
    setFieldValue: jest.fn(),
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
    });
  });
});
