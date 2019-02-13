import React from 'react';
import { shallow } from 'enzyme';
import Factory from '..';

describe('Factory component', () => {
  describe('render', () => {
    it('should render a sizes query component', () => {
      const wrapper = shallow(<Factory />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
