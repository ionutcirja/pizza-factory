import React from 'react';
import { shallow } from 'enzyme';
import { Loading } from '..';

describe('Loading component', () => {
  const propsToRender = {
    message: 'loading...',
    theme: {
      colours: {
        blue: 'blue',
      },
    },
  };
  
  describe('render', () => {
    it('should render a loading message', () => {
      const wrapper = shallow(<Loading {...propsToRender} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
