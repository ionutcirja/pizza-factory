import React from 'react';
import { shallow } from 'enzyme';
import { Total } from '..';

describe('Total component', () => {
  const propsToRender = {
    price: '25.7',
    theme: {
      colours: {
        darkBlue: 'dark blue',
      },
    },
  };
  
  describe('render', () => {
    it('should render the total price', () => {
      const wrapper = shallow(<Total {...propsToRender} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
