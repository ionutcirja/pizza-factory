import React from 'react';
import { shallow } from 'enzyme';
import { Error } from '..';

describe('Error component', () => {
  const propsToRender = {
    message: 'error',
    theme: {
      colours: {
        red: 'red',
      },
    },
  };
  
  describe('render', () => {
    it('should render an error message', () => {
      const wrapper = shallow(<Error {...propsToRender} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
