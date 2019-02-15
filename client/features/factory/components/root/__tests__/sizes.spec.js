import React from 'react';
import { shallow } from 'enzyme';
import Sizes from '../sizes';

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
