import React from 'react';
import { shallow } from 'enzyme';
import { List } from '..';

describe('List component', () => {
  const propsToRender = {
    list: ['1', '2', '3'],
  };
  
  describe('render', () => {
    it('should render a list of items', () => {
      const wrapper = shallow(<List {...propsToRender} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
