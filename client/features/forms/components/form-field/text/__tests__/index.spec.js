import React from 'react';
import { shallow } from 'enzyme';
import TextField from '..';

describe('TextField component', () => {
  let propsToRender;
  
  beforeEach(() => {
    propsToRender = {
      field: {
        name: 'id',
        value: '',
      },
      form: {
        touched: {},
        errors: {},
      },
      placeholder: 'search',
    };
  });
  
  describe('render', () => {
    it('should render a text input', () => {
      const wrapper = shallow(<TextField {...propsToRender} />);
      expect(wrapper).toMatchSnapshot();
    });
  
    it('should render a disabled text input if disabled prop value is truthy', () => {
      propsToRender.disabled = true;
      const wrapper = shallow(<TextField {...propsToRender} />);
      expect(wrapper).toMatchSnapshot();
    });
  
    it('should render an error if field is touched and'
      + ' there is an error defined for the current field', () => {
      propsToRender.form = {
        touched: {
          id: true,
        },
        errors: {
          id: 'some error',
        },
      };
      const wrapper = shallow(<TextField {...propsToRender} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
