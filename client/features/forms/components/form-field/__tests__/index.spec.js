import React from 'react';
import { shallow } from 'enzyme';
import FormField from '..';

jest.mock('../text', () => () => <input type="text" />);

describe('FormField component', () => {
  let propsToRender;
  
  beforeEach(() => {
    propsToRender = {};
  });
  
  describe('render', () => {
    it('should render a TextField component if type prop value is undefined', () => {
      const wrapper = shallow(<FormField {...propsToRender} />);
      expect(wrapper).toMatchSnapshot();
    });
  
    it('should render a TextField component if type prop value is text', () => {
      propsToRender.type = 'text';
      const wrapper = shallow(<FormField {...propsToRender} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
